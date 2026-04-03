import React from "react";
import { Icon } from '@iconify/react';

export default function ChatInput({ value, onChange, onSend, onKeyDown, loading }) {
  return (
    <div className="sticky bottom-0 z-20 w-full flex justify-center items-end pb-16">
      <div className="w-full max-w-3xl flex justify-center">
        <div className="flex items-center w-full bg-[#232323] rounded-full px-6 py-3 gap-4 shadow-lg border border-[#444]" style={{ minHeight: 56 }}>
          <Icon icon="mdi:plus" className="text-white opacity-70" width={22} height={22} />
          <input
            className="flex-1 bg-transparent outline-none text-base text-white placeholder:text-gray-400 border-none focus:ring-0"
            placeholder="Ask Lovable to build an i"
            value={value}
            onChange={e => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            disabled={loading}
            style={{ minWidth: 0 }}
          />
          <Icon icon="mdi:map-outline" className="text-white opacity-70" width={22} height={22} />
          <Icon icon="mdi:microphone-outline" className="text-white opacity-70" width={22} height={22} />
          <button
            className="flex items-center justify-center rounded-full bg-[#444] hover:bg-[#666] transition w-8 h-8 ml-1 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={onSend}
            disabled={loading || !value.trim()}
            aria-label="Send"
          >
            <Icon icon="mdi:arrow-up" className="text-white" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
}