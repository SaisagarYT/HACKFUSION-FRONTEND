export default function StructuredOutputCard({ category, workers, urgency, location }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-5 space-y-2 shadow-md">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{category}</h3>
          <span className="text-xs px-2 py-1 border border-border rounded-md">{urgency}</span>
        </div>
        <div className="text-sm text-textSecondary">
          {/* You can customize this line to show a summary or description if available */}
          {location ? `Location: ${location}` : null}
        </div>
        <div className="flex justify-between text-sm">
          <span>Workers</span>
          <span className="font-medium text-textPrimary">{workers}</span>
        </div>
        {location && (
          <div className="flex justify-between text-sm">
            <span>Location</span>
            <span className="text-textSecondary">{location}</span>
          </div>
        )}
    </div>
  );
}
