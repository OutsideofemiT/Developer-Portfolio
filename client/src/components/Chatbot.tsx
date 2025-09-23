import React, { useEffect, useRef, useState } from 'react';
import useChat from '../hooks/useChat.js';

type ChatMessage = {
  id?: string | number;
  role?: 'user' | 'assistant' | 'system';
  content?: string;
  timestamp?: number | string;
};

interface TypingTextProps {
  text: string;
  start: boolean;
}

const TypingText: React.FC<TypingTextProps> = ({ text, start }) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    if (!start || !text) {
      setDisplayed('');
      return;
    }
    setDisplayed('');
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 25);
    return () => window.clearInterval(id);
  }, [text, start]);
  return (
    <span className="typing-wrap font-mono text-lime-300">
      {displayed}
      <span className="typing-cursor" aria-hidden />
    </span>
  );
};

const Chatbot: React.FC = () => {
  const { messages: rawMessages, loading, error, sendMessage } = useChat() as {
    messages?: ChatMessage[];
    loading?: boolean;
    error?: string | null;
    sendMessage: (text: string) => void;
  };

  const messages = rawMessages ?? [];
  const [input, setInput] = useState('');
  const [typingStart, setTypingStart] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTypingStart(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (typingStart && inputRef.current) inputRef.current.focus();
  }, [typingStart]);

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    sendMessage(text);
    setInput('');
  };

return (
  <div
    ref={containerRef}
    className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 shadow-[0_20px_60px_rgba(183,240,138,0.22)] transition-shadow duration-300 hover:shadow-[0_30px_90px_rgba(183,240,138,0.36)]"
  >
    <div className="flex items-center gap-3 px-3 py-2 bg-slate-900/30 border-b border-white/5">
      <span className="w-3 h-3 bg-red-500 rounded-full" />
      <span className="w-3 h-3 bg-yellow-400 rounded-full" />
      <span className="w-3 h-3 bg-green-500 rounded-full" />
      <div className="ml-3 text-sm text-slate-400 font-mono">Stellar — Terminal</div>
    </div>

    <div ref={messagesRef} className="w-full h-96 overflow-auto no-scrollbar p-6 font-mono text-lime-300 bg-black/50" aria-live="polite">
      {messages.length === 0 && (
        <div className="text-sm text-lime-300">
          <TypingText
            text="Hello, I am Stellar, Carmen's Assistant. I can answer general questions about the portfolio, send your messages for Carmen, and even tell you a joke. How can I be of service today?"
            start={typingStart}
          />
        </div>
      )}

      {messages.map((m, idx) => {
        const msg = (m as ChatMessage) ?? { content: '' };
        const role = msg.role ?? 'assistant';
        const content = msg.content ?? '';
        const time = msg.timestamp ? new Date(msg.timestamp as any).toLocaleTimeString() : '';
        return (
          <div key={msg.id ?? idx} className={`mb-4 ${role === 'user' ? 'text-right' : 'text-left'} msg-animate`}>
            <div className={`inline-block px-6 py-4 rounded-lg text-lg leading-relaxed font-mono ${role === 'user' ? 'bg-black/80 text-lime-300' : 'bg-black/30 text-lime-200'}`}>
              {content}
            </div>
            <div className="text-xs text-slate-400 mt-1">{time}</div>
          </div>
        );
      })}
    </div>

    {error && <div className="text-red-500 text-sm mb-2">Error: {error}</div>}

    <form onSubmit={onSubmit} className="flex items-center gap-2 px-6 py-3 bg-black/40 border-t border-white/5" role="search" aria-label="Send message">
      <div className="text-lime-400 mr-3 font-mono text-sm">carmen@portfolio:~$</div>
      <input
        ref={inputRef}
        className="flex-1 bg-transparent border-0 focus:outline-none placeholder-lime-400 text-lime-200 px-2 py-1 text-lg font-mono caret-lime-300"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={loading ? 'Waiting for reply...' : 'Type a message'}
        disabled={loading}
        aria-disabled={loading}
      />
      <button type="submit" className="ml-3 bg-slate-700 text-white px-4 py-2 rounded disabled:opacity-60" disabled={loading}>
        {loading ? '...' : 'Send'}
      </button>
    </form>
  </div>
);
};

export default Chatbot;
