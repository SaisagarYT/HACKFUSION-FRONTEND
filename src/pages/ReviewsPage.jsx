import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Example review data
const reviews = [
  {
    id: "#RV1001",
    user: "Amit Sharma",
    provider: "Ravi Kumar",
    rating: 2,
    comment: "Service was delayed and not satisfactory.",
    time: "2026-04-03 11:00",
  },
  {
    id: "#RV1002",
    user: "Priya Singh",
    provider: "Amit Mishra",
    rating: 5,
    comment: "Excellent work, very professional!",
    time: "2026-04-02 15:30",
  },
  {
    id: "#RV1003",
    user: "Rahul Verma",
    provider: "Priya Singh",
    rating: 4,
    comment: "Good job, but could improve punctuality.",
    time: "2026-04-01 18:10",
  },
];

const ratingColors = [
  "bg-gray-200 text-gray-700", // 0
  "bg-red-100 text-red-700",   // 1
  "bg-orange-100 text-orange-700", // 2
  "bg-yellow-100 text-yellow-700", // 3
  "bg-blue-100 text-blue-700", // 4
  "bg-green-100 text-green-700", // 5
];

export default function ReviewsPage() {
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);

  const filtered = reviews.filter((r) => {
    const matchesSearch =
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.user.toLowerCase().includes(search.toLowerCase()) ||
      r.provider.toLowerCase().includes(search.toLowerCase()) ||
      r.comment.toLowerCase().includes(search.toLowerCase());
    const matchesRating = r.rating >= minRating;
    return matchesSearch && matchesRating;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Title */}
      <div className="text-2xl font-bold text-textPrimary mb-4">Reviews</div>
      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
        <input
          type="text"
          placeholder="Search by user, provider, or comment..."
          className="px-3 py-2 rounded-md border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-primary text-base w-full md:w-64"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="px-3 py-2 rounded-md border border-border bg-bg text-base focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-48"
          value={minRating}
          onChange={e => setMinRating(Number(e.target.value))}
        >
          <option value={0}>All Ratings</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={5}>5</option>
        </select>
      </div>
      {/* Data */}
      <div className="overflow-x-auto rounded-lg border border-border bg-surface">
        <table className="min-w-full text-sm">
          <thead className="bg-bg">
            <tr>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Review ID</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">User</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Provider</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Rating</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Comment</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Time</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-textSecondary py-6">No reviews found.</td>
              </tr>
            ) : (
              filtered.map((r) => (
                <tr key={r.id} className="hover:bg-primary/5 transition cursor-pointer">
                  <td className="px-3 py-2 font-mono text-xs text-textSecondary">{r.id}</td>
                  <td className="px-3 py-2">{r.user}</td>
                  <td className="px-3 py-2">{r.provider}</td>
                  <td className={`px-3 py-2 font-bold ${ratingColors[r.rating]}`}>{r.rating}</td>
                  <td className="px-3 py-2 max-w-xs truncate" title={r.comment}>{r.comment}</td>
                  <td className="px-3 py-2 text-xs text-textSecondary">{r.time}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
