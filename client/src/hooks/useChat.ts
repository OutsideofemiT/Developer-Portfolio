import { useState, useCallback } from 'react';

export type MessageRole = 'user' | 'assistant' | 'system';
export type Message = { id: string; role: MessageRole; content: string; timestamp: string };

const makeId = () => Math.random().toString(36).slice(2, 9);

export default function useChat(baseUrl?: string) {
	const [messages, setMessages] = useState<Message[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const sendMessage = useCallback(async (text: string) => {
		if (!text.trim()) return;
		if (loading) return; // avoid double send
		setError(null);

		const userMsg: Message = { id: makeId(), role: 'user', content: text, timestamp: new Date().toISOString() };
		setMessages((m) => [...m, userMsg]);
		setLoading(true);

		try {
			const resp = await fetch((baseUrl ?? '') + '/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: text }),
			});

			if (!resp.ok) {
				const errText = await resp.text();
				throw new Error(errText || 'Server error');
			}

			const data = await resp.json();
			const assistantMsg: Message = { id: makeId(), role: 'assistant', content: data.reply ?? '', timestamp: new Date().toISOString() };
			setMessages((m) => [...m, assistantMsg]);
		} catch (err: any) {
			console.error('Chat error', err);
			setError(err?.message ?? 'Unknown error');
		} finally {
			setLoading(false);
		}
	}, [baseUrl, loading]);

	const clear = useCallback(() => setMessages([]), []);

	const appendMessage = useCallback((msg: Message) => setMessages((m) => [...m, msg]), []);

	return { messages, loading, error, sendMessage, clear, appendMessage } as const;
}
