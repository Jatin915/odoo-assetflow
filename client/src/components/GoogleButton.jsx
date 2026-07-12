import { FcGoogle } from "react-icons/fc";

export default function GoogleButton() {
  return (
    <button className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
      <FcGoogle size={22} />
      Continue with Google
    </button>
  );
}