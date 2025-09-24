import type { VercelRequest, VercelResponse } from '@vercel/node';
import { OpenAI } from 'openai';
import { chatbotSystemPrompt } from '../utils/systemPrompts.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify()
  .then(() => console.log('SMTP ready'))
  .catch((e) => console.warn('SMTP verify failed', e.message));

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Optional: handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const DEFAULT_MODEL = process.env.OPENAI_MODEL ?? 'gpt-3.5-turbo';

    const { messages, message, email, emailTo } = req.body as {
      messages?: unknown;
      message?: string;
      email?: string;
      emailTo?: string;
    };

    type ChatMessage = { role: 'system' | 'user' | 'assistant' | 'function'; content: string; name?: string };

    const userMessagesRaw: ChatMessage[] = Array.isArray(messages)
      ? (messages as Array<Record<string, unknown>>).map(it => {
          const base = {
            role: (String(it.role) as ChatMessage['role']) || 'user',
            content: String(it.content ?? ''),
          };
          return it.name !== undefined
            ? { ...base, name: String(it.name) }
            : base;
        })
      : message
      ? [{ role: 'user', content: String(message), name: undefined }]
      : [];

    const payloadMessages: ChatMessage[] = [
      { role: 'system', content: chatbotSystemPrompt },
      ...userMessagesRaw,
    ];

    const completion = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: payloadMessages as any,
      temperature: 0.6,
    });

    const reply = completion.choices?.[0]?.message?.content ?? '';

    // Optional: send email asynchronously
    if (process.env.ALLOW_EMAILS === 'true' && email) {
      try {
        const to = emailTo ?? process.env.DEFAULT_EMAIL_TO;
        const info = await transporter.sendMail({
          from: process.env.EMAIL_FROM,
          to,
          subject: 'Chatbot reply',
          text: reply,
          html: `<pre style="white-space:pre-wrap">${reply}</pre>`,
        });
        console.log('Email sent', info.messageId);
      } catch (mailErr: any) {
        console.error('Failed to send email:', mailErr?.message ?? mailErr);
      }
    }

    res.status(200).json({ reply });
  } catch (err) {
    console.error('Error in /api/chat:', err);
    res.status(500).json({ error: 'Server error' });
  }
}