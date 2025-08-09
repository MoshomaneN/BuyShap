import React, { useState } from 'react';

export default function BudgetPlanner() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    // Show user prompt immediately
    const newMessages = [...messages, { role: 'user', content: prompt }];
    setMessages(newMessages);
    setPrompt('');

    try {
      const res = await fetch('http://localhost:5000/api/ask-budget', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.response }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. Plan my groceries for $50"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition"
        >
          Ask
        </button>
      </form>

      <div className="space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-md ${
              msg.role === 'user' ? 'bg-white border' : 'bg-green-100 text-green-900'
            }`}
          >
            <strong>{msg.role === 'user' ? 'You' : 'Planner'}:</strong> {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
}
