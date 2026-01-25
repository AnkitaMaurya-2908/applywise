"use client";

import { useState } from "react";
import Link from "next/link";
import { poppins, zain } from "@/lib/fonts";

export default function Dashboard() {
  const [active, setActive] = useState("tracker");

  const tabs = [
    { id: "tracker", name: "Job Tracker" },
    { id: "resume", name: "Resume Builder" },
    { id: "ats", name: "ATS Score Checker" },
  ];

  return (
    <div className="min-h-screen flex bg-[#f7f7f7]">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r px-6 py-6 hidden md:block">
        <h1 className={`${zain.className} text-2xl text-[#3c6e71] font-bold`}>
          applywise
        </h1>

        <div className="mt-10 space-y-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                active === tab.id
                  ? "bg-[#3c6e71] text-white"
                  : "text-[#284b63] hover:bg-gray-100"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Top bar */}
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#353535]">
            {tabs.find((t) => t.id === active)?.name}
          </h2>

          <Link
            href="/"
            className="text-sm text-[#3c6e71] hover:underline"
          >
            Logout
          </Link>
        </div>

        {/* Content Area */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-sm min-h-[400px]">
          {active === "tracker" && <p>Job Tracker coming soon...</p>}
          {active === "resume" && <p>Resume Builder coming soon...</p>}
          {active === "ats" && <p>ATS Score Checker coming soon...</p>}
        </div>

      </div>
    </div>
  );
}
