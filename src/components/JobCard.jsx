export default function JobCard({ title, workers, onAccept }) {
  return (
    <div className="bg-surface border border-border rounded-xl p-4 space-y-2">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-textSecondary">{workers} workers required</p>
      <button className="bg-primary text-white px-3 py-1 rounded-md" onClick={onAccept}>
        Accept
      </button>
    </div>
  );
}
