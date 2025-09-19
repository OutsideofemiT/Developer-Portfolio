import React, { useState } from 'react';

type Props = {
  onSend: (text: string) => Promise<void>;
  disabled?: boolean;
};

export default function ChatInput({ onSend, disabled }: Props) {
  const [text, setText] = useState('');

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    const t = text.trim();
    if (!t) return;
    setText('');
    await onSend(t);
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a message... (e.g. 'How can I contact you?')"
        className="flex-1 border rounded px-3 py-2"
        disabled={disabled}
      />
      <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded" disabled={disabled || !text.trim()}>
        Send
      </button>
    </form>
  );
}