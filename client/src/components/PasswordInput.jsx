import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <div className="flex items-center bg-gray-100 rounded-xl border border-gray-300 px-4 focus-within:border-blue-500">
        <FaLock className="text-gray-400 mr-3" />

        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent py-3 outline-none"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="text-gray-500"
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}