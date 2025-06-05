import React from "react";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideBar />
      <main className="ml-80 p-8">{children}</main>
    </div>
  );
}

export default Layout;
