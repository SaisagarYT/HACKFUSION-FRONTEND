import React from "react";
import { Icon } from "@iconify/react";

export default function RequestsPage() {
  const [showDetail, setShowDetail] = React.useState(false);
  // Example data for demonstration
  const requests = [
    {
      id: "#R2023",
      user: { name: "Amit Sharma", contact: "9876543210", location: "Delhi" },
      service: "Plumbing",
      description: "Fix leaking kitchen sink and replace pipe",
      provider: { name: "Ravi Kumar", org: "HandyOrg" },
      status: "Pending",
      price: "₹1,200",
      paymentStatus: "Paid",
      created: "2026-04-03 10:12",
      service_data: "Pipe: PVC, Length: 2m",
      lat: 28.61,
      lng: 77.23,
      address: "123 Main St, Delhi"
    },
    {
      id: "#R2024",
      user: { name: "Priya Singh", contact: "9876543211", location: "Noida" },
      service: "Electrical",
      description: "Install ceiling fan in living room",
      provider: { name: "Amit Mishra", org: "FixIt" },
      status: "Assigned",
      price: "₹900",
      paymentStatus: "Unpaid",
      created: "2026-04-03 09:45",
      service_data: "Fan: Crompton, Model: X1",
      lat: 28.57,
      lng: 77.32,
      address: "456 Sector 12, Noida"
    }
  ];
  const [selected, setSelected] = React.useState(null);

  return (
    <div className="flex flex-col gap-8">
      {/* Section 1: Control Bar */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
        <input
          type="text"
          placeholder="Search by description or user..."
          className="px-3 py-2 rounded-md border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-primary text-base w-full md:w-64"
        />
        <select className="px-3 py-2 rounded-md border border-border bg-bg text-base focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-48">
          <option value="">All Statuses</option>
          <option>Pending</option>
          <option>Assigned</option>
          <option>In Progress</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
        <select className="px-3 py-2 rounded-md border border-border bg-bg text-base focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-48">
          <option value="">All Services</option>
          <option>Plumbing</option>
          <option>Electrical</option>
          <option>Painting</option>
          <option>Carpentry</option>
        </select>
        <input
          type="date"
          className="px-3 py-2 rounded-md border border-border bg-bg text-base focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-48"
        />
        <button className="flex items-center gap-1 px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition text-base w-full md:w-auto">
          <Icon icon="mdi:refresh" className="text-lg" />
          Refresh
        </button>
      </div>

      {/* Section 2: Request Table */}
      <div className="overflow-x-auto rounded-lg border border-border bg-surface">
        <table className="min-w-full text-sm">
          <thead className="bg-bg">
            <tr>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Request ID</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">User</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Service</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Description</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Assigned Provider</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Status</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Price</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Payment</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Created</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr
                key={req.id}
                className="hover:bg-primary/5 transition cursor-pointer"
                onClick={() => { setSelected(req); setShowDetail(true); }}
              >
                <td className="px-3 py-2 text-xs text-textSecondary font-mono">{req.id}</td>
                <td className="px-3 py-2">{req.user.name}</td>
                <td className="px-3 py-2">{req.service}</td>
                <td className="px-3 py-2 max-w-xs truncate">{req.description}</td>
                <td className="px-3 py-2">{req.provider.name}</td>
                <td className="px-3 py-2">
                  {req.status === "Pending" && <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Pending</span>}
                  {req.status === "Assigned" && <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Assigned</span>}
                  {req.status === "In Progress" && <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">In Progress</span>}
                  {req.status === "Completed" && <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Completed</span>}
                  {req.status === "Cancelled" && <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">Cancelled</span>}
                </td>
                <td className="px-3 py-2">{req.price}</td>
                <td className="px-3 py-2">
                  {req.paymentStatus === "Paid" ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Paid</span>
                  ) : (
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Unpaid</span>
                  )}
                </td>
                <td className="px-3 py-2 text-xs text-textSecondary">{req.created}</td>
                <td className="px-3 py-2"><button className="text-primary hover:underline text-xs" onClick={e => { e.stopPropagation(); setSelected(req); setShowDetail(true); }}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Request Detail Modal */}
      {showDetail && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-surface rounded-xl shadow-lg border border-border w-full max-w-2xl p-6 relative">
            {/* Close button */}
            <button className="absolute top-3 right-3 text-xl text-textSecondary hover:text-primary" onClick={() => setShowDetail(false)}>
              <Icon icon="mdi:close" />
            </button>
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-lg font-bold text-primary">{selected.id}</span>
              {selected.status === "Pending" && <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Pending</span>}
              {selected.status === "Assigned" && <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Assigned</span>}
              {selected.status === "In Progress" && <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">In Progress</span>}
              {selected.status === "Completed" && <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Completed</span>}
              {selected.status === "Cancelled" && <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">Cancelled</span>}
            </div>
            {/* SECTION 1: USER INFO */}
            <div className="mb-2">
              <div className="font-semibold text-textPrimary">User Info</div>
              <div className="text-sm text-textSecondary">{selected.user.name} • {selected.user.contact} • {selected.user.location}</div>
            </div>
            {/* SECTION 2: SERVICE DETAILS */}
            <div className="mb-2">
              <div className="font-semibold text-textPrimary">Service Details</div>
              <div className="text-sm text-textSecondary">{selected.service} — {selected.description}</div>
              <div className="text-xs text-textSecondary">{selected.service_data}</div>
            </div>
            {/* SECTION 3: ASSIGNMENT */}
            <div className="mb-2">
              <div className="font-semibold text-textPrimary">Assignment</div>
              <div className="text-sm text-textSecondary">Provider: {selected.provider.name} • Organization: {selected.provider.org}</div>
            </div>
            {/* SECTION 4: LOCATION */}
            <div className="mb-2">
              <div className="font-semibold text-textPrimary">Location</div>
              <div className="text-sm text-textSecondary">{selected.address} (Lat: {selected.lat}, Lng: {selected.lng})</div>
            </div>
            {/* SECTION 5: PAYMENT */}
            <div className="mb-2">
              <div className="font-semibold text-textPrimary">Payment</div>
              <div className="text-sm text-textSecondary">Price: {selected.price} • Status: {selected.paymentStatus}</div>
            </div>
            {/* SECTION 6: ACTIONS */}
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition text-sm">Assign Provider</button>
              <button className="px-4 py-2 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition text-sm">Mark Completed</button>
              <button className="px-4 py-2 rounded-md bg-gray-300 text-textPrimary font-medium hover:bg-gray-400 transition text-sm">Cancel Request</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
