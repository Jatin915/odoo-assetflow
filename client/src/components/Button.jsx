export default function Button({ text }) {
  return (
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
      {text}
    </button>
  );
}