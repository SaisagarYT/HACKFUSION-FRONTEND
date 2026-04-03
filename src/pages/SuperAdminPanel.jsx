import React from "react";

const navItems = [
  { label: "Dashboard", icon: "🏠" },
  { label: "Jobs", icon: "💼" },
  { label: "Workers", icon: "🧑‍💻" },
  { label: "Analytics", icon: "📊" },
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
              <span className="text-xl">{item.icon}</span>
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
        <section className="flex-1 p-10 bg-bg overflow-auto">
          <div className="text-xl text-textSecondary opacity-60">{active} content goes here.</div>
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
