export default function SystemMessage({ text }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] bg-white border border-border px-4 py-3 rounded-xl text-sm shadow-sm">
        {text}
      </div>
    </div>
  );
}
