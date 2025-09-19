import React from 'react';
import type { ChatMessage } from '../types/chat';

export default function ChatMessages({ messages }: { messages: ChatMessage[] }) {
  return (
    <div className="space-y-3 overflow-auto max-h-80 p-2">
      {messages.map((m) => (
        <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
          <div className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'}`}>
            {m.content}
          </div>
        </div>
      ))}
    </div>
  );
}