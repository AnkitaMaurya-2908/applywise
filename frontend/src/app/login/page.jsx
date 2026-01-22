"use client";

import Link from "next/link";
import { poppins, zain } from "@/lib/fonts";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1
          className={`${zain.className} text-3xl text-center text-[#3c6e71] font-bold`}
        >
          applywise
        </h1>

        <p className="mt-2 text-center text-[#284b63] font-light">
          Log in to your ApplyWise account
        </p>

        <form className="mt-8 space-y-5">
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

          <button
            type="submit"
            className="w-full bg-[#3c6e71] text-white py-3 rounded-lg hover:bg-[#2f5d60] transition font-medium"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&#39;t have an account?{" "}
          <Link href="/signup" className="text-[#3c6e71] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
