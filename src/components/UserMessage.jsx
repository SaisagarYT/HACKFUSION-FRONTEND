export default function UserMessage({ text }) {
  return (
    <div className="flex justify-end">
      <div className="ml-auto max-w-[75%] bg-primary text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-md">
        {text}
      </div>
    </div>
  );
}
