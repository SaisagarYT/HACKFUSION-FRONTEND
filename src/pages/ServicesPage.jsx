import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Example service data
const services = [
  {
    id: 1,
    name: "Plumbing",
    type: "Home Repair",
    description: "All plumbing related services including installation and repair.",
    active: true,
    fields: [
      { label: "Pipe Material", type: "text", required: true },
      { label: "Length (m)", type: "number", required: false },
    ],
  },
  {
    id: 2,
    name: "Electrical",
    type: "Home Repair",
    description: "Electrical wiring, installation, and repair services.",
    active: true,
    fields: [
      { label: "Appliance Type", type: "text", required: true },
      { label: "Power Rating (W)", type: "number", required: false },
    ],
  },
  {
    id: 3,
    name: "Painting",
    type: "Renovation",
    description: "Wall and ceiling painting services.",
    active: false,
    fields: [
      { label: "Area (sqft)", type: "number", required: true },
      { label: "Paint Type", type: "text", required: false },
    ],
  },
];

function ServiceFields({ fields }) {
  return (
    <div className="mt-2">
      <div className="font-semibold text-xs text-textPrimary mb-1">Field Configs</div>
      <table className="min-w-full text-xs border border-border rounded">
        <thead className="bg-surface">
          <tr>
            <th className="px-2 py-1 text-left font-semibold text-textSecondary">Label</th>
            <th className="px-2 py-1 text-left font-semibold text-textSecondary">Type</th>
            <th className="px-2 py-1 text-left font-semibold text-textSecondary">Required</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((f, i) => (
            <tr key={i}>
              <td className="px-2 py-1">{f.label}</td>
              <td className="px-2 py-1">{f.type}</td>
              <td className="px-2 py-1">{f.required ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ServicesPage() {
  const [expanded, setExpanded] = useState(null);
  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl font-bold text-textPrimary mb-4">Services</div>
      <div className="overflow-x-auto rounded-lg border border-border bg-surface">
        <table className="min-w-full text-sm">
          <thead className="bg-bg">
            <tr>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Service Name</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Type</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Description</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Active</th>
              <th className="px-3 py-2 text-left font-semibold text-textSecondary">Fields</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <React.Fragment key={service.id}>
                <tr className="hover:bg-primary/5 transition cursor-pointer" onClick={() => setExpanded(expanded === service.id ? null : service.id)}>
                  <td className="px-3 py-2 font-semibold text-textPrimary">{service.name}</td>
                  <td className="px-3 py-2">{service.type}</td>
                  <td className="px-3 py-2 max-w-xs truncate">{service.description}</td>
                  <td className="px-3 py-2">
                    {service.active ? (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Active</span>
                    ) : (
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">Inactive</span>
                    )}
                  </td>
                  <td className="px-3 py-2">
                    <button className="text-primary hover:underline text-xs flex items-center gap-1" onClick={e => { e.stopPropagation(); setExpanded(expanded === service.id ? null : service.id); }}>
                      <Icon icon={expanded === service.id ? "mdi:chevron-up" : "mdi:chevron-down"} />
                      {expanded === service.id ? "Hide" : "Show"}
                    </button>
                  </td>
                </tr>
                {expanded === service.id && (
                  <tr>
                    <td colSpan={5} className="bg-bg px-3 py-2">
                      <ServiceFields fields={service.fields} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
