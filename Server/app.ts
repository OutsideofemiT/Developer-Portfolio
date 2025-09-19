import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';
import { chatbotSystemPrompt } from './utils/prompts/systemPrompts.js';
import chatRouter from './routes/chat.js';

const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());

// OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Model config: prefer env var, allow optional per-request override (validated)
const DEFAULT_MODEL = process.env.OPENAI_MODEL ?? 'gpt-3.5-turbo';
// minimal allowlist to prevent arbitrary model names being passed in requests
const ALLOWED_MODELS = new Set([
	'gpt-3.5-turbo',
	'gpt-4o-mini',
	'gpt-4o',
	'gpt-4',
]);

// Health check
app.get('/', (_req: Request, res: Response) => {
	res.json({ status: 'ok', time: new Date().toISOString() });
});

// Mount chat routes under /api
app.use('/api', chatRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

