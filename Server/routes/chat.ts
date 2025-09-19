import express from 'express';
import type { Request, Response } from 'express';
import { OpenAI } from 'openai';
import { chatbotSystemPrompt } from '../utils/prompts/systemPrompts.js';
import nodemailer from 'nodemailer';
const router = express.Router();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
transporter.verify().then(() => console.log('SMTP ready')).catch((e) => console.warn('SMTP verify failed', e.message));
// Chat route: POST /api/chat
// Accepts { message: string } or { messages: [{ role, content }, ...] }
router.post('/chat', async (req: Request, res: Response) => {
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const DEFAULT_MODEL = process.env.OPENAI_MODEL ?? 'gpt-3.5-turbo';

    const { messages } = req.body as { messages?: unknown; message?: string; model?: string };

  type ChatMessage = { role: 'system' | 'user' | 'assistant' | 'function'; content: string; name: string | undefined };

    // Normalize incoming messages
    const userMessagesRaw: ChatMessage[] = Array.isArray(messages)
      ? (messages as Array<Record<string, unknown>>).map((it) => ({
          role: (String(it.role) as ChatMessage['role']) || 'user',
          content: String(it.content ?? ''),
          name: it.name ? String(it.name) : undefined,
        }))
      : req.body?.message
      ? [{ role: 'user', content: String(req.body.message), name: undefined }]
      : [];

    const payloadMessages: ChatMessage[] = [
      { role: 'system', content: chatbotSystemPrompt, name: undefined },
      ...userMessagesRaw,
    ];

    const completion = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: payloadMessages as unknown as any,
      temperature: 0.6,
    });

    const reply = completion.choices?.[0]?.message?.content ?? '';

    // If configured and requested by the client, send the reply by email.
    // Send asynchronously so we don't delay the HTTP response.
    if (process.env.ALLOW_EMAILS === 'true' && req.body?.email) {
      const emailTo = req.body?.emailTo ?? process.env.DEFAULT_EMAIL_TO;
      transporter
        .sendMail({
          from: process.env.EMAIL_FROM,
          to: emailTo,
          subject: 'Chatbot reply',
          text: reply,
          html: `<pre style="white-space:pre-wrap">${reply}</pre>`,
        })
        .then((info) => console.log('Email sent', info.messageId))
        .catch((mailErr) => console.error('Failed to send email:', mailErr?.message ?? mailErr));
    }

    res.json({ reply });
  } catch (err) {
    console.error('Error in /api/chat:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;