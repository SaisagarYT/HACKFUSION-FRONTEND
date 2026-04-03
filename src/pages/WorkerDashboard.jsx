import React from "react";

export default function WorkerDashboard() {
  // Placeholder for job cards and actions
  return (
    <div className="min-h-screen bg-bg p-6">
      <h2 className="text-xl font-semibold mb-6">Worker Dashboard</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Example Job Card */}
        <div className="bg-surface border border-border rounded-xl p-4 space-y-2">
          <h3 className="font-semibold text-lg">Plumbing Issue</h3>
          <p className="text-sm text-textSecondary">2 workers required</p>
          <button className="bg-primary text-white px-3 py-1 rounded-md">Accept</button>
        </div>
        {/* More job cards would be mapped here */}
      </div>
    </div>
  );
}
