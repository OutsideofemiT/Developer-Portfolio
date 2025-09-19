import React, { useState } from 'react';
import useChat from '../hooks/useChat';

const Chatbot: React.FC = () => {
  const { messages, loading, error, sendMessage } = useChat();
  const [input, setInput] = useState('');

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto bg-black  text-lime rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">Chatbot</h2>

      <div className="h-64 overflow-auto border rounded p-2 mb-3">
        {messages.length === 0 && <div className="text-sm text-gray-500">Say hi — ask a question about the portfolio.</div>}
        {messages.map((m) => (
          <div key={m.id} className={`mb-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-3 py-2 rounded ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'}`}>
              {m.content}
            </div>
            <div className="text-xs text-gray-400">{new Date(m.timestamp).toLocaleTimeString()}</div>
          </div>
        ))}
      </div>

      {error && <div className="text-red-500 text-sm mb-2">Error: {error}</div>}

      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={loading ? 'Waiting for reply...' : 'Type a message'}
          disabled={loading}
        />
        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded" disabled={loading}>
          {loading ? '...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Chatbot;