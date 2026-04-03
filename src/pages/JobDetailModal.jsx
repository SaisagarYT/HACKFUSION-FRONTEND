import React from "react";

export default function JobDetailModal({ open, onClose, job }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-surface border border-border rounded-xl p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-textSecondary hover:text-primary"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="font-semibold text-xl mb-2">{job.title}</h2>
        <p className="text-sm text-textSecondary mb-2">{job.description}</p>
        <div className="space-y-1 mb-4">
          <p><strong>Category:</strong> {job.category}</p>
          <p><strong>Workers:</strong> {job.workers}</p>
          <p><strong>Urgency:</strong> {job.urgency}</p>
          <p><strong>Location:</strong> {job.location}</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg w-full">Accept Job</button>
      </div>
    </div>
  );
}
