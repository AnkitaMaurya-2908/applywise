import Navbar from "@/components/Navbar";
import React from "react";
import { LuLogIn } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[#d9d9d9] rounded-2xl mx-4 mt-4 min-h-[85vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#353535]">
          Track your job applications.{" "}
          <span className="text-[#3c6e71]">Smarter.</span>
        </h1>

        <p className="mt-6 max-w-5xl text-base sm:text-lg md:text-xl lg:text-2xl text-[#284b63] font-light leading-relaxed">
          Keep all your job applications, resumes, and progress in one place
          with ApplyWise. Focus on landing interviews, not managing
          spreadsheets.
        </p>

        <button className="mt-8 bg-[#3c6e71] text-base sm:text-lg md:text-xl font-medium text-white px-8 sm:px-10 md:px-12 py-3 md:py-4 rounded-full flex items-center gap-3 hover:bg-[#2f5d60] transition">
          <LuLogIn className="text-xl md:text-2xl" />
          Sign Up – It&apos;s 100% free!
        </button>
      </div>
    </>
  );
}
