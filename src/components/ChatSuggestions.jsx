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
    <div className="flex gap-3 w-full max-w-3xl mx-auto mb-4 px-2 overflow-x-auto scrollbar-hide">
      {suggestions.map((s, i) => (
        <button
          key={i}
          className="bg-surface rounded-2xl px-5 py-3 flex flex-col items-start shadow-sm border border-border min-w-[200px] max-w-xs transition hover:shadow-md focus:outline-none"
          onClick={() => onSuggestionClick && onSuggestionClick(s)}
        >
          <span className="font-semibold text-textPrimary text-base leading-tight mb-1 text-left">
            {s.title}
          </span>
          <span className="text-sm text-textSecondary text-left">
            {s.subtitle}
          </span>
        </button>
      ))}
    </div>
  );
}
