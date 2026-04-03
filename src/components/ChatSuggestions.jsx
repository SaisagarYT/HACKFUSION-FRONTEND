import React from "react";

const suggestions = [
  {
    title: "Create an illustration",
    subtitle: "for a bakery",
  },
  {
    title: "Write a thank-you note",
    subtitle: "to my colleague",
  },
  // Add more suggestions as needed
];

export default function ChatSuggestions({ onSuggestionClick }) {
  return (
    <div className="w-full flex flex-wrap gap-3 px-6 pt-6 pb-2 justify-start">
      {suggestions.map((s, i) => (
        <button
          key={i}
          className="bg-surface rounded-2xl px-5 py-3 shadow-sm border border-border flex flex-col items-start min-w-[180px] max-w-xs text-left hover:bg-gray-50 transition"
          onClick={() => onSuggestionClick?.(s.title)}
        >
          <span className="font-semibold text-base text-textPrimary leading-tight">{s.title}</span>
          <span className="text-sm text-textSecondary mt-1 leading-tight">{s.subtitle}</span>
        </button>
      ))}
    </div>
  );
}
