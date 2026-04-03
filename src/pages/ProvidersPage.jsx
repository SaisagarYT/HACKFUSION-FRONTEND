import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Example provider data
const providers = [
  {
    id: 1,
    name: "Ravi Kumar",
    type: "Plumber",
    organization: "HandyOrg",
    experience: 5,
    skills: ["Pipes", "Leak Repair", "Installation"],
    available: true,
    rating: 4.8,
    totalJobs: 120,
    jobsCompleted: 115,
    contact: "9876543210",
    history: [
      { id: "#R2023", service: "Plumbing", status: "Completed", date: "2026-04-01" },
      { id: "#R2020", service: "Plumbing", status: "Completed", date: "2026-03-20" },
    ],
  },
  {
    id: 2,
    name: "Priya Singh",
    type: "Electrician",
    organization: null,
    experience: 3,
    skills: ["Wiring", "Fan Installation"],
    available: false,
    rating: 4.6,
    totalJobs: 80,
    jobsCompleted: 75,
    contact: "9876543211",
    history: [
      { id: "#R2024", service: "Electrical", status: "Completed", date: "2026-04-02" },
      { id: "#R2018", service: "Electrical", status: "Completed", date: "2026-03-15" },
    ],
  },
  // Add more providers as needed
];

function ProviderCard({ provider, onClick }) {
  const reliability = provider.totalJobs > 0 ? (provider.jobsCompleted / provider.totalJobs) : 0;
  return (
    <div
      className="bg-surface border border-border rounded-xl p-5 flex flex-col gap-2 shadow-sm cursor-pointer hover:shadow-md transition min-w-65 max-w-xs"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
          {provider.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <div className="font-semibold text-lg text-textPrimary">{provider.name}</div>
          <div className="text-xs text-textSecondary">{provider.type}{provider.organization ? ` • ${provider.organization}` : ""}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-textSecondary">
        <span>Exp: {provider.experience} yrs</span>
        <span>• Skills: {provider.skills.join(", ")}</span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className={`text-xs px-2 py-1 rounded-full ${provider.available ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
          {provider.available ? "Available" : "Busy"}
        </span>
        <span className="flex items-center gap-1 text-xs text-yellow-700"><Icon icon="mdi:star" className="text-yellow-500" width={14} /> {provider.rating}</span>
        <span className="text-xs text-textSecondary">Jobs: {provider.totalJobs}</span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-xs text-blue-700">Reliability: {(reliability * 100).toFixed(1)}%</span>
      </div>
    </div>
  );
}

function ProviderDetail({ provider, onClose }) {
  const reliability = provider.totalJobs > 0 ? (provider.jobsCompleted / provider.totalJobs) : 0;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-surface rounded-xl shadow-lg border border-border w-full max-w-2xl p-6 relative">
        <button className="absolute top-3 right-3 text-xl text-textSecondary hover:text-primary" onClick={onClose}>
          <Icon icon="mdi:close" />
        </button>
        {/* Profile */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
            {provider.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <div className="font-semibold text-2xl text-textPrimary">{provider.name}</div>
            <div className="text-sm text-textSecondary">{provider.type}{provider.organization ? ` • ${provider.organization}` : ""}</div>
            <div className="text-xs text-textSecondary">Contact: {provider.contact}</div>
            <div className="flex flex-wrap gap-2 mt-1 text-xs text-textSecondary">Skills: {provider.skills.join(", ")}</div>
          </div>
        </div>
        {/* Work Stats */}
        <div className="mb-4">
          <div className="font-semibold text-textPrimary mb-1">Work Stats</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <span>Total Jobs: {provider.totalJobs}</span>
            <span>Completed: {provider.jobsCompleted}</span>
            <span>Rating: {provider.rating}</span>
            <span>Availability: {provider.available ? "Available" : "Busy"}</span>
            <span>Reliability: {(reliability * 100).toFixed(1)}%</span>
          </div>
        </div>
        {/* History */}
        <div>
          <div className="font-semibold text-textPrimary mb-1">History</div>
          <div className="overflow-x-auto rounded-lg border border-border bg-bg">
            <table className="min-w-full text-xs">
              <thead className="bg-surface">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-textSecondary">Request ID</th>
                  <th className="px-3 py-2 text-left font-semibold text-textSecondary">Service</th>
                  <th className="px-3 py-2 text-left font-semibold text-textSecondary">Status</th>
                  <th className="px-3 py-2 text-left font-semibold text-textSecondary">Date</th>
                </tr>
              </thead>
              <tbody>
                {provider.history.map((h) => (
                  <tr key={h.id}>
                    <td className="px-3 py-2 font-mono">{h.id}</td>
                    <td className="px-3 py-2">{h.service}</td>
                    <td className="px-3 py-2">{h.status}</td>
                    <td className="px-3 py-2">{h.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProvidersPage() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl font-bold text-textPrimary mb-4">Providers</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} onClick={() => setSelected(provider)} />
        ))}
      </div>
      {selected && <ProviderDetail provider={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
