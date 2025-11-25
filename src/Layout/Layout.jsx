import React, { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { UserContext } from "../Context/UserContext";

const Layout = () => {
  const { user } = useContext(UserContext);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!user) return <Navigate to="/" />;

  return (
    <div className="flex  mt-[100px]   w-full">

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed md:relative z-20 mt[100px]">
          <Sidebar />
        </div>
      )}

      {/* MAIN AREA */}
      <div className="flex-1  flex flex-col w-full">

        {/* ------------ HEADER (full width) ------------ */}
        <div >
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        </div>

        {/* ------------ PAGE AREA (Outlet) ------------ */}
        <div className="p-6 overflow-y-auto h-full bg-gray-100">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Layout;
