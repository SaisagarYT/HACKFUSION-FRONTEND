
import React from "react";
import { Icon } from "@iconify/react";
import RequestsPage from "./RequestsPage";
import ProvidersPage from "./ProvidersPage";
import OrganizationsPage from "./OrganizationsPage";
import ServicesPage from "./ServicesPage";
import PaymentsPage from "./PaymentsPage";
import ReviewsPage from "./ReviewsPage";

const navItems = [
  { label: "Dashboard", icon: "mdi:view-dashboard-outline" },
  { label: "Requests", icon: "mdi:clipboard-list-outline" },
  { label: "Providers", icon: "mdi:account-group-outline" },
  { label: "Organizations", icon: "mdi:domain" },
  { label: "Services", icon: "mdi:briefcase-outline" },
  { label: "Payments", icon: "mdi:credit-card-outline" },
  { label: "Reviews", icon: "mdi:star-outline" },
];

export default function SuperAdminPanel() {
  const [active, setActive] = React.useState("Dashboard");

  return (
    <div className="flex h-screen bg-bg">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-border flex flex-col py-6 px-4">
        <div className="mb-10 text-2xl font-bold text-primary tracking-wide select-none">
          HackFusion Admin
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-100
                ${active === item.label ? "bg-primary text-white" : "text-textPrimary hover:bg-bg"}`}
              onClick={() => setActive(item.label)}
            >
              <Icon icon={item.icon} className="text-xl" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-10 py-6 border-b border-border bg-surface shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-textPrimary capitalize">{active}</h1>
            <p className="text-sm text-textSecondary mt-1">{getSubtitle(active)}</p>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded-md border border-border bg-bg focus:outline-none focus:ring-2 focus:ring-primary text-base"
              style={{ minWidth: 180 }}
            />
            <div className="flex items-center gap-2 bg-primary-dark text-white px-3 py-2 rounded-full font-semibold">
              <span>SA</span>
            </div>
          </div>
        </header>
        {/* Dynamic Content Area */}
        <section className="flex-1 p-4 md:p-10 bg-bg overflow-auto">
          {active === "Dashboard" ? (
            <div className="flex flex-col gap-8">
              {/* Section 1: System Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {/* Card: Total Requests */}
                <div className="bg-surface rounded-xl shadow-sm border border-border p-5 flex flex-col items-start">
                  <span className="text-xs text-textSecondary font-semibold mb-1">Total Requests</span>
                  <span className="text-3xl font-bold text-textPrimary">2,340</span>
                  <span className="text-xs text-green-600 mt-1">▲ 4% this month</span>
                </div>
                {/* Card: Active Requests */}
                <div className="bg-surface rounded-xl shadow-sm border border-border p-5 flex flex-col items-start">
                  <span className="text-xs text-textSecondary font-semibold mb-1">Active Requests</span>
                  <span className="text-3xl font-bold text-textPrimary">112</span>
                  <span className="text-xs text-blue-600 mt-1">● pending/assigned</span>
                </div>
                {/* Card: Completed Requests */}
                <div className="bg-surface rounded-xl shadow-sm border border-border p-5 flex flex-col items-start">
                  <span className="text-xs text-textSecondary font-semibold mb-1">Completed Requests</span>
                  <span className="text-3xl font-bold text-textPrimary">2,010</span>
                  <span className="text-xs text-green-600 mt-1">▲ 20 this week</span>
                </div>
                {/* Card: Total Providers */}
                <div className="bg-surface rounded-xl shadow-sm border border-border p-5 flex flex-col items-start">
                  <span className="text-xs text-textSecondary font-semibold mb-1">Total Providers</span>
                  <span className="text-3xl font-bold text-textPrimary">420</span>
                  <span className="text-xs text-green-600 mt-1">+5 new</span>
                </div>
                {/* Card: Active Providers */}
                <div className="bg-surface rounded-xl shadow-sm border border-border p-5 flex flex-col items-start">
                  <span className="text-xs text-textSecondary font-semibold mb-1">Active Providers</span>
                  <span className="text-3xl font-bold text-textPrimary">98</span>
                  <span className="text-xs text-green-600 mt-1">is_available</span>
                </div>
                {/* Card: Total Revenue */}
                <div className="bg-surface rounded-xl shadow-sm border border-border p-5 flex flex-col items-start">
                  <span className="text-xs text-textSecondary font-semibold mb-1">Total Revenue</span>
                  <span className="text-3xl font-bold text-textPrimary">₹4,50,000</span>
                  <span className="text-xs text-green-600 mt-1">sum(payments.amount)</span>
                </div>
              </div>

              {/* Section 2: Recent Requests */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-textPrimary">Recent Requests</h2>
                  <button className="text-primary text-sm font-medium hover:underline">View all</button>
                </div>
                <div className="overflow-x-auto rounded-lg border border-border bg-surface">
                  <table className="min-w-full text-sm">
                    <thead className="bg-bg">
                      <tr>
                        <th className="px-3 py-2 text-left font-semibold text-textSecondary">Request ID</th>
                        <th className="px-3 py-2 text-left font-semibold text-textSecondary">Service</th>
                        <th className="px-3 py-2 text-left font-semibold text-textSecondary">User</th>
                        <th className="px-3 py-2 text-left font-semibold text-textSecondary">Assigned Provider</th>
                        <th className="px-3 py-2 text-left font-semibold text-textSecondary">Status</th>
                        <th className="px-3 py-2 text-left font-semibold text-textSecondary">Time</th>
                        <th className="px-3 py-2 text-left font-semibold text-textSecondary">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-primary/5 transition">
                        <td className="px-3 py-2 text-xs text-textSecondary font-mono">#R2023</td>
                        <td className="px-3 py-2">Plumbing</td>
                        <td className="px-3 py-2">Amit Sharma</td>
                        <td className="px-3 py-2">Ravi Kumar</td>
                        <td className="px-3 py-2"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Pending</span></td>
                        <td className="px-3 py-2 text-xs text-textSecondary">2026-04-03 10:12</td>
                        <td className="px-3 py-2"><button className="text-primary hover:underline text-xs">View</button></td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition">
                        <td className="px-3 py-2 text-xs text-textSecondary font-mono">#R2024</td>
                        <td className="px-3 py-2">Electrical</td>
                        <td className="px-3 py-2">Priya Singh</td>
                        <td className="px-3 py-2">Amit Mishra</td>
                        <td className="px-3 py-2"><span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Assigned</span></td>
                        <td className="px-3 py-2 text-xs text-textSecondary">2026-04-03 09:45</td>
                        <td className="px-3 py-2"><button className="text-primary hover:underline text-xs">View</button></td>
                      </tr>
                      <tr className="hover:bg-primary/5 transition">
                        <td className="px-3 py-2 text-xs text-textSecondary font-mono">#R2025</td>
                        <td className="px-3 py-2">Painting</td>
                        <td className="px-3 py-2">Rahul Verma</td>
                        <td className="px-3 py-2">-</td>
                        <td className="px-3 py-2"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Completed</span></td>
                        <td className="px-3 py-2 text-xs text-textSecondary">2026-04-02 16:30</td>
                        <td className="px-3 py-2"><button className="text-primary hover:underline text-xs">View</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 3: Live Providers Snapshot */}
              <div>
                <div className="flex items-center justify-between mb-2 mt-6">
                  <h2 className="text-lg font-semibold text-textPrimary">Live Providers Snapshot</h2>
                  <button className="text-primary text-sm font-medium hover:underline">View all</button>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {/* Example provider cards */}
                  <div className="flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-2 min-w-50">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">RK</span>
                    </div>
                    <div>
                      <div className="font-medium text-textPrimary text-sm">Ravi Kumar</div>
                      <div className="text-xs text-textSecondary">Plumber</div>
                      <div className="text-xs text-green-600">Available</div>
                      <div className="text-xs text-yellow-600 flex items-center gap-1"><Icon icon="mdi:star" className="inline text-yellow-500" width={14} /> 4.8</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-2 min-w-50">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">PS</span>
                    </div>
                    <div>
                      <div className="font-medium text-textPrimary text-sm">Priya Singh</div>
                      <div className="text-xs text-textSecondary">Electrician</div>
                      <div className="text-xs text-yellow-600">Busy</div>
                      <div className="text-xs text-yellow-600 flex items-center gap-1"><Icon icon="mdi:star" className="inline text-yellow-500" width={14} /> 4.6</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-surface border border-border rounded-lg px-4 py-2 min-w-50">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">AM</span>
                    </div>
                    <div>
                      <div className="font-medium text-textPrimary text-sm">Amit Mishra</div>
                      <div className="text-xs text-textSecondary">Painter</div>
                      <div className="text-xs text-green-600">Available</div>
                      <div className="text-xs text-yellow-600 flex items-center gap-1"><Icon icon="mdi:star" className="inline text-yellow-500" width={14} /> 4.9</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : active === "Requests" ? (
            <RequestsPage />
          ) : active === "Providers" ? (
            <ProvidersPage />
          ) : active === "Organizations" ? (
            <OrganizationsPage />
          ) : active === "Services" ? (
            <ServicesPage />
          ) : active === "Payments" ? (
            <PaymentsPage />
          ) : active === "Reviews" ? (
            <ReviewsPage />
          ) : (
            <div className="text-xl text-textSecondary opacity-60">{active} content goes here.</div>
          )}
        </section>
      </main>
    </div>
  );
}

function getSubtitle(page) {
  switch (page) {
    case "Dashboard":
      return "Overview & quick stats";
    case "Jobs":
      return "Manage all job postings";
    case "Workers":
      return "Worker management & status";
    case "Analytics":
      return "System analytics & insights";
    default:
      return "";
  }
}
