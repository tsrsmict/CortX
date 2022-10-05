// import React from "react";
import Navbar from "../components/navbar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { RiDashboardFill } from "react-icons/ri";
import Table from "../components/table";

export default function Dashboard() {
  const percentage = 66;


  return (
    <div className="flex absoluteoverflow-auto dark:bg-dark-purple h-screen w-screen">

      <Navbar className="absolute top-44 left-55 shadow-white shadow-lg overflow-auto" style={{position: "shadow-lg"}} />
      <div className="p-12">
        <div className="flex p-5">
          <RiDashboardFill className="text-5xl mr-5 text-sky-800 dark:text-sky-300" />
          <h1 className="text-5xl font-mono dark:text-white font-bold">Dashboard</h1>
        </div>
        <div className="md:flex">
        <div className=" m-auto p-12 flex w-full">
          <div className="float-left m-auto p-12 bg-gray-100 dark:bg-gray-600 rounded-2xl shadow-lg flex">
            <picture><img src="https://cdn-icons-png.flaticon.com/512/30/30473.png" className="dark:invert" alt="txt"/></picture>

          </div>
          <div className="m-auto float-right">
          <CircularProgressbar value={percentage} text={`${percentage}%`} className="p-12 text-center align-middle items-center"/>
          </div>

          </div>
        </div>
        <Table className='' />

      </div>
    </div> 
  );
}
