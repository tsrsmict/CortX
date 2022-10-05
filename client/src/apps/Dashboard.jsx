// import React from "react";
import Navbar from "../components/navbar";

import { RiDashboardFill } from "react-icons/ri";
import Table, { TableData } from "../components/table";

export default function Dashboard() {
  return (
    <div className="flex overflow-auto dark:bg-dark-purple h-screen w-screen">

      <Navbar className="fixed top-0 left-0 shadow-white shaodow-lg overflow-auto" />
      <div className="p-12">
        <div className="flex p-5">
          <RiDashboardFill className="text-5xl mr-5 text-sky-800 dark:text-sky-300" />
          <h1 className="text-5xl font-mono dark:text-white font-bold">Dashboard</h1>
        </div>
        <div className="text-start">
          <div className="w-fit  h-fit bg-gray-100 rounded-2xl shadow-10xl flex p-5">
            <picture><img src="https://cdn-icons-png.flaticon.com/512/30/30473.png" className="dark:invert" alt="txt" /></picture>

          </div>
        </div>
        <Table tabledata={{ TableData }} />

      </div>
    </div>
  );
}
