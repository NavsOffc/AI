"use client";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await res.json();
    setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    setLoading(false);
  };

  return (
    <main className="chat-container">
      <h1 className="text-2xl font-bold text-center mb-2">🤖 Nwalhost AI</h1>
      <div className="flex flex-col space-y-2 mb-3 overflow-y-auto h-[400px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`bubble ${
              msg.role === "user" ? "bubble-user self-end" : "bubble-ai self-start"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <div className="bubble bubble-ai">⏳ Nwalhost AI sedang berpikir...</div>}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Tulis pesanmu..."
          className="flex-grow p-2 rounded-lg text-black"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Kirim
        </button>
      </div>
    </main>
  );
}
