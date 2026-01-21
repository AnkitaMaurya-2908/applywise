"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { zain, poppins } from "@/lib/fonts";
import { navLinks } from "@/lib/navlink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className={`${zain.className} text-2xl md:text:3xl lg:text-4xl font-bold text-[#3c6e71]`}
        >
          applywise
        </Link>

        {/* For Desktop */}
        <div
          className={`${poppins.className} hidden md:flex gap-4 lg:gap-8 md:text-md lg:text-lg font-light text-[#284b63]`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#3c6e71]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden lg:inline-block px-4 py-2 text-lg rounded-md border border-[#3c6e71] text-[#284b63] hover:bg-[#3c6e71] hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="hidden md:inline-block px-4 py-2 text-lg rounded-md text-white bg-[#284b63] hover:bg-[#3c6e71]"
          >
            Sign up
          </Link>
        </div>

        {/* For Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#284b63]"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-3 pt-2 pb-6">
          <div className="bg-[#3c6e71] rounded-2xl shadow-xl p-2 ">
            {/* Nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${poppins.className} block text-white text-md font-light px-4 py-3 rounded-lg hover:bg-white/10 transition`}
              >
                {link.name}
              </Link>
            ))}

            <div className="space-y-3 pb-4 mx-3">
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className={`${poppins.className} block text-center bg-white text-[#3c6e71] px-4 py-3 rounded-lg font-semibold`}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
