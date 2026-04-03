import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Example payment data
const payments = [
  {
    id: "#P1001",
    user: "Amit Sharma",
    request: "#R2023",
    amount: 1200,
    method: "UPI",
    status: "Paid",
    time: "2026-04-03 10:15",
  },
  {
    id: "#P1002",
    user: "Priya Singh",
    request: "#R2024",
    amount: 900,
    method: "Card",
    status: "Unpaid",
    time: "2026-04-03 09:50",
  },
  {
    id: "#P1003",
    user: "Rahul Verma",
    request: "#R2025",
    amount: 1500,
    method: "Cash",
    status: "Paid",
    time: "2026-04-02 16:35",
  },
];

const statusOptions = ["All", "Paid", "Unpaid", "Refunded"];

export default function PaymentsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = payments.filter((p) => {
    const matchesStatus = status === "All" || p.status === status;
    const matchesSearch =
      p.id.toLowerCase().includes(search.toLowerCase()) ||
      p.user.toLowerCase().includes(search.toLowerCase()) ||
      p.request.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl font-bold text-textPrimary mb-4">Payments</div>
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
        <input
          type="text"
          placeholder="Search by user, request, or payment ID..."
          className="px-3 py-2 rounded-md border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-primary text-base w-full md:w-64"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="px-3 py-2 rounded-md border border-border bg-bg text-base focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-48"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          {statusOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto rounded-lg border border-border bg-surface">
        <table className="min-w-full text-sm">
          <thead className="bg-bg">
            <tr>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Payment ID</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">User</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Request</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Amount</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Method</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Status</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Time</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center text-textSecondary py-6">No payments found.</td>
              </tr>
            ) : (
              filtered.map((p) => (
                <tr key={p.id} className="hover:bg-primary/5 transition">
                  <td className="px-3 py-2 font-mono text-xs text-textSecondary">{p.id}</td>
                  <td className="px-3 py-2">{p.user}</td>
                  <td className="px-3 py-2">{p.request}</td>
                  <td className="px-3 py-2">₹{p.amount}</td>
                  <td className="px-3 py-2">{p.method}</td>
                  <td className="px-3 py-2">
                    {p.status === "Paid" && <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Paid</span>}
                    {p.status === "Unpaid" && <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Unpaid</span>}
                    {p.status === "Refunded" && <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">Refunded</span>}
                  </td>
                  <td className="px-3 py-2 text-xs text-textSecondary">{p.time}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
