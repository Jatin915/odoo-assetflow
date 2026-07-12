import { Link } from "react-router-dom";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleButton";
import { FaShieldAlt } from "react-icons/fa";

export default function Signup() {
  return (
    <div className="h-screen bg-blue-50 flex items-center justify-center px-4 py-2 overflow-hidden">
      <div className="relative w-full max-w-md">

        {/* Center Logo */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
          <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white shadow-xl flex items-center justify-center">
            <span className="text-white text-2xl font-bold">AF</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl pt-12 pb-3 px-7">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center">
            AssetFlow <span className="text-blue-600">ERP</span>
          </h1>

          <p className="text-gray-500 text-center text-xs mt-1">
            Enterprise Asset & Resource Management Platform
          </p>

          <div className="border-b border-gray-200 my-3"></div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center">
            Create Account ✨
          </h2>

          <p className="text-center text-gray-500 text-sm mb-2">
            Register your employee account
          </p>

          {/* Form */}
          <Input
            label="Full Name"
            placeholder="Enter your full name"
          />

          <Input
            label="Email Address"
            placeholder="Enter your email"
          />

          <PasswordInput
            label="Password"
            placeholder="Create password"
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
          />

          {/* Button */}
          <Button text="Create Account →" />

          {/* Divider */}
          <div className="flex items-center my-2">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="mx-3 text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <GoogleButton />

          {/* Login */}
          <p className="text-center mt-2 text-sm">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

          {/* Footer */}
          <div className="mt-2 text-center text-gray-500 text-[10px] leading-3">
            <p>Every new account is registered as an Employee.</p>

            <p>Admin roles are assigned later.</p>

            <p className="mt-1">© 2026 AssetFlow ERP</p>

            <div className="flex justify-center items-center gap-1 mt-1">
              <FaShieldAlt className="text-[10px]" />
              <span>Secure & Trusted</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
