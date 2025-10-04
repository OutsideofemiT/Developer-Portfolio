import fs from 'fs';
import path from 'path';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { OpenAI } from 'openai';
import { chatbotSystemPrompt } from '../utils/systemPrompts.js';
import nodemailer from 'nodemailer';
import { emailPrompts } from '../utils/emailPrompts.js';


const projectsPath = path.join(process.cwd(), 'utils', 'data', 'projects.json');
const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));

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

    // Incorporate projects and general questions into the system prompt
    const projectsPrompt = `Here are some of my projects:\n${projects.projects
      .map((p: any) => `- ${p.name}: ${p.description}`)
      .join('\n')}\n`;

    const generalQAPrompt = `Here are some common questions and answers:\n${projects.general_questions
      .map((q: any) => `Q: ${q.question}\nA: ${q.answer}`)
      .join('\n')}\n`;

    const systemPrompts = `
    ${chatbotSystemPrompt} You may share any project links or live URLs provided in the list below if the user asks for them.
    ${projectsPrompt}
    ${generalQAPrompt}
    `;
    
    const payloadMessages: ChatMessage[] = [
      { 
        role: 'system', 
        content: `${chatbotSystemPrompt}\n${projectsPrompt}\n${generalQAPrompt}` 
      },
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

        const userName = req.body.userName ?? 'Anonymous';
        const userCompany = req.body.userCompany ?? 'N/A';
        const userEmail = req.body.userEmail;
        const userMessage = req.body.userMessage ?? '';

      
    if (!userEmail) {
      console.warn('No user email provided, skipping email send');
    } else {
      const emailSubject = `Message from Portfolio Chatbot`;

      const emailText = `
      Name: ${userName}
      Company: ${userCompany}
      Wmail: ${userEmail}

      Message:
      ${userMessage}
        `;

          const emailHTML = `<pre style="white-space:pre-wrap">${emailText}</pre>`;

          const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to,
            subject: emailSubject,
            text: emailText,
            html: emailHTML,
          });

          console.log('Email sent', info.messageId);
        }
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
