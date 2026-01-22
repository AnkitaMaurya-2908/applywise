"use client";

import Link from "next/link";
import { poppins, zain } from "@/lib/fonts";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1
          className={`${zain.className} text-3xl text-center text-[#3c6e71] font-bold`}
        >
          applywise
        </h1>

        <p className="mt-2 text-center text-[#284b63] font-light">
          Create your account to get started
        </p>

        <form className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3c6e71]"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3c6e71]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3c6e71]"
          />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3c6e71]"
          />

          <button
            type="submit"
            className="w-full bg-[#3c6e71] text-white py-3 rounded-lg hover:bg-[#2f5d60] transition font-medium"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-[#3c6e71] hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
