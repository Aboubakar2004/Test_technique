import React from "react";
import SideBar from "@/components/SideBar";
import DashBoardHeader from "@/components/DashBoardHeader";
import MyAccount from "@/components/MyAccount";
import FinancialInformation from "@/components/FinancialInformation";
import Transaction from "@/components/Transaction";
import Tab from "@/components/Tab";

function page() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SideBar />
      <main className="flex-1 pl-30">
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

export default page;
