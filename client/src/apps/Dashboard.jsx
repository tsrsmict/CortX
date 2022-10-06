// import React from "react";
import Navbar from "../components/navbar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { RiDashboardFill } from "react-icons/ri";
import Table from "../components/table";
import NavBar from "../components/new_navbar";

export default function Dashboard() {
  const percentage = 66;


  return (
    <div className=" absolute overflow-auto dark:bg-dark-purple h-screen w-screen">
      <NavBar className='md:hidden'/>
      <div className="flex">
      <Navbar className=" absolute top-44 left-55 h-100vh shadow-white shadow-lg overflow-auto" style={{position: "shadow-lg"}} />ß
      <div className="p-1 md:p-8 lg:p-12">
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
          <CircularProgressbar value={percentage} text={`${percentage}%`} className="p-12 min-w-200px min-h-200px text-center align-middle items-center"/>
          </div>

          </div>
        </div>
        <Table className='' />

      </div>
      </div>
    </div> 
  );
}
