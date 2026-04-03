import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Example organization data
const organizations = [
  {
    id: 1,
    name: "HandyOrg",
    owner: "Suresh Mehta",
    services: ["Plumbing", "Carpentry"],
    rating: 4.7,
    verified: true,
    members: [
      { id: 1, name: "Suresh Mehta", role: "Owner" },
      { id: 2, name: "Ravi Kumar", role: "Provider" },
      { id: 3, name: "Anil Singh", role: "Provider" },
    ],
    providers: [
      { id: 2, name: "Ravi Kumar", type: "Plumber", rating: 4.8 },
      { id: 3, name: "Anil Singh", type: "Carpenter", rating: 4.5 },
    ],
  },
  {
    id: 2,
    name: "FixIt",
    owner: "Priya Sharma",
    services: ["Electrical"],
    rating: 4.5,
    verified: false,
    members: [
      { id: 4, name: "Priya Sharma", role: "Owner" },
      { id: 5, name: "Priya Singh", role: "Provider" },
    ],
    providers: [
      { id: 5, name: "Priya Singh", type: "Electrician", rating: 4.6 },
    ],
  },
];

function OrganizationCard({ org, onClick }) {
  return (
    <div
      className="bg-surface border border-border rounded-xl p-5 flex flex-col gap-2 shadow-sm cursor-pointer hover:shadow-md transition min-w-65 max-w-xs"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
          {org.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <div className="font-semibold text-lg text-textPrimary">{org.name}</div>
          <div className="text-xs text-textSecondary">Owner: {org.owner}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-textSecondary">
        <span>Services: {org.services.join(", ")}</span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <span className="flex items-center gap-1 text-xs text-yellow-700"><Icon icon="mdi:star" className="text-yellow-500" width={14} /> {org.rating}</span>
        {org.verified ? (
          <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"><Icon icon="mdi:check-circle" /> Verified</span>
        ) : (
          <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"><Icon icon="mdi:close-circle" /> Not Verified</span>
        )}
      </div>
    </div>
  );
}

function OrganizationDetail({ org, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-surface rounded-xl shadow-lg border border-border w-full max-w-2xl p-6 relative">
        <button className="absolute top-3 right-3 text-xl text-textSecondary hover:text-primary" onClick={onClose}>
          <Icon icon="mdi:close" />
        </button>
        {/* Basic Info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
            {org.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <div className="font-semibold text-2xl text-textPrimary">{org.name}</div>
            <div className="text-sm text-textSecondary">Owner: {org.owner}</div>
            <div className="flex flex-wrap gap-2 mt-1 text-xs text-textSecondary">Services: {org.services.join(", ")}</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="flex items-center gap-1 text-xs text-yellow-700"><Icon icon="mdi:star" className="text-yellow-500" width={14} /> {org.rating}</span>
              {org.verified ? (
                <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"><Icon icon="mdi:check-circle" /> Verified</span>
              ) : (
                <span className="flex items-center gap-1 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"><Icon icon="mdi:close-circle" /> Not Verified</span>
              )}
            </div>
          </div>
        </div>
        {/* Members */}
        <div className="mb-4">
          <div className="font-semibold text-textPrimary mb-1">Members</div>
          <div className="overflow-x-auto rounded-lg border border-border bg-bg">
            <table className="min-w-full text-xs">
              <thead className="bg-surface">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-textSecondary">Name</th>
                  <th className="px-3 py-2 text-left font-semibold text-textSecondary">Role</th>
                </tr>
              </thead>
              <tbody>
                {org.members.map((m) => (
                  <tr key={m.id}>
                    <td className="px-3 py-2">{m.name}</td>
                    <td className="px-3 py-2">{m.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Providers Under Org */}
        <div>
          <div className="font-semibold text-textPrimary mb-1">Providers</div>
          <div className="overflow-x-auto rounded-lg border border-border bg-bg">
            <table className="min-w-full text-xs">
              <thead className="bg-surface">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-textSecondary">Name</th>
                  <th className="px-3 py-2 text-left font-semibold text-textSecondary">Type</th>
                  <th className="px-3 py-2 text-left font-semibold text-textSecondary">Rating</th>
                </tr>
              </thead>
              <tbody>
                {org.providers.map((p) => (
                  <tr key={p.id}>
                    <td className="px-3 py-2">{p.name}</td>
                    <td className="px-3 py-2">{p.type}</td>
                    <td className="px-3 py-2">{p.rating}</td>
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

export default function OrganizationsPage() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl font-bold text-textPrimary mb-4">Organizations</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {organizations.map((org) => (
          <OrganizationCard key={org.id} org={org} onClick={() => setSelected(org)} />
        ))}
      </div>
      {selected && <OrganizationDetail org={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
