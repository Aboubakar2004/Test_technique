"use client";

import React, { useState } from "react";
import SideBar from "@/components/SideBar";
import DashBoardHeader from "@/components/DashBoardHeader";
import MyAccount from "@/components/MyAccount";
import FinancialInformation from "@/components/FinancialInformation";
import Transaction from "@/components/Transaction";
import Tab from "@/components/Tab";
import { Menu, X } from "lucide-react";

function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col 2xl:flex-row relative">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="2xl:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } 2xl:translate-x-0 fixed 2xl:relative z-30 transition-transform duration-300 ease-in-out`}
      >
        <SideBar />
      </div>

      <main className="flex-1 p-4 2xl:pl-30 overflow-x-auto">
        <div className="max-w-7xl py-6">
          <DashBoardHeader />
          <MyAccount />
          <FinancialInformation />
          <Transaction />
          <Tab />
        </div>
      </main>
    </div>
  );
}

export default Page;
