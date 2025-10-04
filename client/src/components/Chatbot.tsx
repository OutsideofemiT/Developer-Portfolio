import React, { useEffect, useRef, useState } from 'react';
import useChat from '../hooks/useChat.js';

type ChatMessage = {
  id?: string | number;
  role?: 'user' | 'assistant' | 'system';
  content?: string;
  timestamp?: number | string;
};

const emailPrompts = [
  "What's your name?",
  "What's your company name?",
  "What's your email address?",
  "What message would you like to send to Carmen?",
  "Are you ready to send your message? (yes/no)"
];

const signature = "—Carmen's Assistant";

const Chatbot: React.FC = () => {
  const {
    messages: rawMessages = [],
    loading = false,
    error = null,
    sendMessage,
  } = useChat() as {
    messages?: ChatMessage[];
    loading?: boolean;
    error?: string | null;
    sendMessage: (text: string, emailData?: any, options?: any) => void;
  };

  const [input, setInput] = useState('');
  const [emailStep, setEmailStep] = useState<number | null>(null);
  const [emailData, setEmailData] = useState<{
    name?: string;
    company?: string;
    email?: string;
    message?: string;
  }>({});
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: 'smooth' });
  }, [rawMessages]);

  const handleSend = async (text: string) => {
    if (emailStep !== null) {
      const nextData = { ...emailData };
      if (emailStep === 0) nextData.name = text;
      if (emailStep === 1) nextData.company = text;
      if (emailStep === 2) nextData.email = text;
      if (emailStep === 3) nextData.message = text;

      // Show user's input in chat (local only)
      sendMessage(text, { role: 'user', localOnly: true });

      // Confirmation step
      if (emailStep === 4) {
        if (/^y(es)?$/i.test(text.trim())) {
          // User confirmed, send email
          setEmailData({});
          setEmailStep(null);
          await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: true,
              userName: nextData.name,
              userCompany: nextData.company,
              userEmail: nextData.email,
              userMessage: nextData.message,
            }),
          });
          sendMessage(`Thank you, your message has been sent! ${signature}`, { role: 'assistant', localOnly: true });
          sendMessage("Is there anything else I can assist you with today?", { role: 'assistant', localOnly: true });
        } else {
          // User said no, cancel or restart
          setEmailStep(null);
          setEmailData({});
          sendMessage("Message cancelled. If you want to try again, type 'contact'.", { role: 'assistant', localOnly: true });
        }
        setInput('');
        return;
      }

      // Advance to next prompt
      if (emailStep < emailPrompts.length - 1) {
        setEmailData(nextData);
        setEmailStep(emailStep + 1);
        sendMessage(emailPrompts[emailStep + 1], { role: 'assistant', localOnly: true });
      }
      setInput('');
      return;
    }

    // Detect "contact" or "send a message"
    if (/contact|send.*message/i.test(text)) {
      setEmailStep(0);
      setEmailData({});
      sendMessage(text, { role: 'user', localOnly: true });
      sendMessage(emailPrompts[0], { role: 'assistant', localOnly: true });
      setInput('');
      return;
    }

    // Normal chat: send to backend/LLM
    sendMessage(text, { role: 'user' });
    setInput('');
  };

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (text) handleSend(text);
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="flex items-center gap-3 px-3 py-2 bg-slate-900/30 border-b border-white/5">
        <span className="w-3 h-3 bg-red-500 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-500 rounded-full" />
        <div className="ml-3 text-sm text-slate-400 font-mono">Stellar — Terminal</div>
      </div>

      <div
        ref={messagesRef}
        className="w-full h-96 overflow-auto no-scrollbar p-6 font-mono text-lime-300 bg-black/50"
        aria-live="polite"
      >
        {rawMessages.length === 0 && (
          <div className="text-sm text-lime-300">
            Hello, I am Stellar, Carmen's portfolio assistant. Would you like to ask a question about my work, or send me a message directly?
            Just type your question or say 'contact' to send a message.
          </div>
        )}

        {rawMessages.map((m, idx) => {
          const msg = m ?? { content: '' };
          const role = msg.role ?? 'assistant';
          const content = msg.content ?? '';
          const time = msg.timestamp ? new Date(msg.timestamp as any).toLocaleTimeString() : '';

          if (role === 'assistant' && content.includes(signature)) {
            const [body] = content.split(signature);
            return (
              <div key={msg.id ?? idx} className="mb-4 text-left msg-animate">
                <div className="inline-block px-6 py-4 rounded-lg text-lg leading-relaxed font-mono bg-black/30 text-lime-200">
                  <div>{body.trim()}</div>
                  <div className="mt-2 italic">{signature}</div>
                </div>
                <div className="text-xs text-slate-400 mt-1">{time}</div>
              </div>
            );
          }

          return (
            <div
              key={msg.id ?? idx}
              className={`mb-4 ${role === 'user' ? 'text-right' : 'text-left'} msg-animate`}
            >
              <div
                className={`inline-block px-6 py-4 rounded-lg text-lg leading-relaxed font-mono ${
                  role === 'user'
                    ? 'bg-black/80 text-lime-300'
                    : 'bg-black/30 text-lime-200'
                }`}
              >
                {content}
              </div>
              <div className="text-xs text-slate-400 mt-1">{time}</div>
            </div>
          );
        })}
      </div>

      {error && <div className="text-red-500 text-sm mb-2">Error: {error}</div>}

      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 px-6 py-3 bg-black/40 border-t border-white/5"
        role="search"
        aria-label="Send message"
      >
        <div className="text-lime-400 mr-3 font-mono text-sm">carmen@portfolio:~$</div>
        <input
          ref={inputRef}
          className="flex-1 bg-transparent border-0 focus:outline-none placeholder-lime-400 text-lime-200 px-2 py-1 text-lg font-mono caret-lime-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={loading && emailStep === null ? 'Waiting for reply...' : 'Type a message'}
          disabled={loading && emailStep === null}
          aria-disabled={loading && emailStep === null}
        />
        <button
          type="submit"
          className="ml-3 bg-slate-700 text-white px-4 py-2 rounded disabled:opacity-60"
          disabled={loading}
        >
          {loading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;