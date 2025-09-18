import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chat', async (req: Request, res: Response) => {
  const { message } = req.body;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant for a developer portfolio website." },
        { role: "user", content: message }
      ],
      max_tokens: 200,
    });
    const reply = completion.choices && completion.choices[0]?.message?.content
      ? completion.choices[0].message.content
      : "No reply generated.";
    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: "Error communicating with OpenAI." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

