import React from "react";
import Navbar from "../components/navbar";

import { RiDashboardFill } from "react-icons/ri";

export default function Dashboard() {
  return (
    <div className="flex  dark:bg-dark-purple h-screen w-screen overflow-auto">
      
      <Navbar className="shadow-white shaodow-lg"/>
      <div className="flex p-10">
        <RiDashboardFill className="text-5xl mr-5 text-sky-800 dark:text-sky-300"/>
        <h1 className="text-5xl font-mono dark:text-white font-bold">Dashboard</h1>
      </div>

    </div>
  );
}
