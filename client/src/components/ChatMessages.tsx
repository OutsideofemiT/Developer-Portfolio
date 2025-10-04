import React from 'react';

type ChatMessage = {
  id?: string | number;
  role?: 'user' | 'assistant' | 'system';
  content?: string;
  timestamp?: number | string;
};

export default function ChatMessages({ messages }: { messages: ChatMessage[] }) {
  const signature = "—Carmen's Assistant";

  return (
    <div className="space-y-3 overflow-auto max-h-80 p-2">
      {messages.map((m) => {
        if (m.role === 'assistant' && m.content && m.content.includes(signature)) {
          const [body,] = m.content.split(signature);
          return (
            <div key={m.id} className="text-left">
              <div className="inline-block p-2 rounded-lg bg-gray-100 text-black">
                <div>{body.trim()}</div>
                <div className="mt-2 italic">{signature}</div>
              </div>
            </div>
          );
        }
        return (
          <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <div className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'}`}>
              {m.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}