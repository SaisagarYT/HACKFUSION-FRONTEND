import { Icon } from "@iconify/react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon icon="solar:chat-round-dots-bold" className="text-primary" width="32" />
      </div>
      {/* Title */}
      <h2 className="text-xl font-semibold text-textPrimary mb-1">
        What do you need help with?
      </h2>
      {/* Subtitle */}
      <p className="text-sm text-textSecondary max-w-md">
        Describe your task and we’ll connect you with the right worker instantly.
      </p>
    </div>
  );
}
