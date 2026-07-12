import { Link } from "react-router-dom";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import GoogleButton from "../components/GoogleButton";
import { FaShieldAlt } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="relative w-full max-w-md">

        {/* Center Logo */}
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 z-10 w-18 h-18">
          <div className="w-18 h-18 w-20 h-20 rounded-full bg-blue-600 border-4 border-white shadow-xl flex items-center justify-center">
            <span className="text-white text-3xl font-bold">AF</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl pt-20 pb-8 px-8">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-center">
            AssetFlow <span className="text-blue-600">ERP</span>
          </h1>

          <p className="text-gray-500 text-center text-sm mt-2">
            Enterprise Asset & Resource Management Platform
          </p>

          <div className="border-b border-gray-200 my-6"></div>

          {/* Welcome */}
          <h2 className="text-3xl font-bold text-center">
            Welcome Back 👋
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Sign in to continue
          </p>

          {/* Form */}
          <Input
            label="Email Address"
            placeholder="Enter your email"
          />

          <PasswordInput
            label="Password"
            placeholder="Enter password"
          />

          {/* Remember */}
          <div className="flex justify-between items-center mb-5 text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                className="accent-blue-600"
              />
              Remember Me
            </label>

            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <Button text="Sign In →" />

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="mx-4 text-gray-400 font-medium">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <GoogleButton />

          {/* Signup */}
          <p className="text-center mt-6">
            New here?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create an account
            </Link>
          </p>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>
              Every new account is registered as an Employee.
            </p>

            <p>
              Admin roles are assigned later.
            </p>

            <p className="mt-5">
              © 2026 AssetFlow ERP
            </p>

            <div className="flex justify-center items-center gap-2 mt-2">
              <FaShieldAlt />
              <span>Secure & Trusted</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}