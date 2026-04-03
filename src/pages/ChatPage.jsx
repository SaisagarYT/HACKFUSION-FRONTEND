import React, { useRef, useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import UserMessage from "../components/UserMessage";
import SystemMessage from "../components/SystemMessage";
import StructuredOutputCard from "../components/StructuredOutputCard";
import ChatInput from "../components/ChatInput";
import ChatSuggestions from "../components/ChatSuggestions";

const mockMessages = [
  { type: "user", text: "Need electrician" },
  { type: "system", text: "Identifying issue..." },
  {
    type: "structured",
    data: {
      category: "Plumbing",
      workers: 2,
      urgency: "Medium",
      location: "Local Area",
    },
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { type: "user", text: input }]);
    setInput("");
    setLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { type: "system", text: "Analyzing your request…" },
      ]);
      setTimeout(() => {
        setMessages((msgs) => [
          ...msgs.slice(0, -1),
          {
            type: "structured",
            data: {
              category: "Plumbing",
              workers: 2,
              urgency: "Medium",
              location: "Local Area",
            },
          },
        ]);
        setLoading(false);
      }, 1200);
    }, 800);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && !loading) {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-bg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-border bg-surface sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Icon icon="mdi:menu" width={28} height={28} className="text-primary" />
          <h1 className="font-semibold text-lg tracking-tight">KAAMSETU</h1>
        </div>
      </div>
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, idx) =>
          msg.type === "user" ? (
            <UserMessage key={idx} text={msg.text} />
          ) : msg.type === "system" ? (
            <SystemMessage key={idx} text={msg.text} />
          ) : (
            <StructuredOutputCard key={idx} {...msg.data} />
          )
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Suggestions */}
      <ChatSuggestions onSuggestionClick={s => setInput(s.title + ' ')} />
      {/* Input Box */}
      <ChatInput
        value={input}
        onChange={setInput}
        onSend={handleSend}
        onKeyDown={handleInputKeyDown}
        loading={loading}
      />
    </div>
  );
}
