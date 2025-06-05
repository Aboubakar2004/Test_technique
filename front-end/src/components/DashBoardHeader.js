"use client";

import React, { useState } from "react";
import Image from "next/image";
import Picture from "../images/pexels-jarosz-2024901.jpg";

function DashBoardHeader() {
  const [activeTab, setActiveTab] = useState("prets");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Bonjour Paul !</h1>
        <Image
          src={Picture}
          alt="Logo"
          width={80}
          height={80}
          className="rounded-full size-14 object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <div className="inline-flex p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => setActiveTab("prets")}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === "prets"
                ? "bg-[#d0d4f8] text-[#4b4d9b] font-medium"
                : "text-gray-500"
            }`}
          >
            Mes prêts
          </button>
          <button
            onClick={() => setActiveTab("factures")}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === "factures"
                ? "bg-[#d0d4f8] text-[#4b4d9b] font-medium"
                : "text-gray-500"
            }`}
          >
            Mes factures
          </button>
        </div>
        <div>
          <button className="w-full lg:w-auto px-6 py-2.5 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-900 transition-colors">
            Demander un financement
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHeader;
