import { FaEnvelope } from "react-icons/fa";

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <div className="flex items-center bg-gray-100 rounded-xl border border-gray-300 px-4 focus-within:border-blue-500">
        <FaEnvelope className="text-gray-400 mr-3" />

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent py-3 outline-none"
        />
      </div>
    </div>
  );
}