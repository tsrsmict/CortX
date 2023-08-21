// import React from "react";
import Navbar from "../components/navbar";
// import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import Chart from "../components/chart";
import { RiDashboardFill } from "react-icons/ri";
// import Table from "../components/table";
import NavBar from "../components/new_navbar";
import axios from "axios";
import { useState } from "react";
import CortoComp from "../components/CortocComp";

export default function Dashboard() {
  const TableData = [
    {
      title: "White Blood Cell (WBC) (Leukocytes) Count",
      value: 6250,
      unit: "cells/cu.mm",
      bri_start: 4000,
      bri_end: 10500,
      color: false,
      health: 75,
      risk: 19
      // percentage: String(200*TableDate[1][value]/bri_end+bri_start)
    },
    {
      title: "Red blood Cell (Wbc) Erthrocytes Count",
      value: 4.94,
      unit: "milli/cu.mm",
      bri_start: 4.7,
      bri_end: 6.0,
      color: true,
      health: 87,
      risk: 15
    },
  ]; 
  localStorage.setItem('TableData', TableData)
  const data = localStorage.getItem("TableData")
  console.log(data[0])
  function changeHandler (e, index) {

    data[index][e.target.name] = e.target.value
    console.log(data[index])
  
  }
 

  return (
    <div className=" absolute overflow-auto bg-stone-200 dark:bg-stone-900 h-screen w-screen">
      <NavBar className="sm:hidden" />
      <div className="flex h-full">
        <Navbar
          className="absolute top-44 left-55 z-0 shadow-white shadow-lg "
          style={{ position: "shadow-lg" }}
        />
        <div className="p-1 sm:p-5 mt-16 lg:mt-0 md:ml-12 lg:p-12 ">
          <div className="flex p-5 items-center">
            <RiDashboardFill className="text-5xl mr-5 text-sky-800 dark:text-sky-300" />
            <h1 className="text-5xl font-mono dark:text-white font-bold">
              Dashboard
            </h1>
          </div>
          <div className="flex place-content-center">
            <CortoComp />
          </div>
          
          <div
            id="table"
            className=" text-xs md:text-md rounded-2xl border-gray-500 text-0.25rem flex bg-slate-100 dark:bg-stone-800 m-5 w-11/12 items-center text-center border mx-auto mt-10"
          >
            <table className="table-fixed w-full rounded-2xl dark:text-white text-center m-auto">
              <thead className="">
                <th className="p-5">Parameter</th>
                <th>Value</th>

                <th>Risk level</th>
                <th>Health level</th>
              </thead>

              {TableData.map((row, index) => {
                return (
                  <tr
                    key={index}
                    className={` $(color && "shadow-2xl shadow-zinc-800")`}
                  >
                    <td className="p-5">{row.title}</td>
                    <td className="p-5">{row.value}{row.unit}</td>

                    <td className="items-center">
                      <span className="w-3/12 my-7 mx-5">
                        <div
                          className={`w-11/12 h-4.5 rounded-full bg-zinc-200 dark:bg-stone-700`}
                        >
                          <div className="h-4.5 rounded-full bg-rose-500 dark:bg-rose-70 duration-300" style={{width: `${row.risk}%`}}>
                            {`${row.risk}%`}
                          </div>
                        </div>
                      </span>
                    </td>

                    <td className=" items-center">
                      <span className="w-full my-7 mx-5">
                        <div
                          className={`w-11/12 h-4.5 rounded-full bg-zinc-200 dark:bg-stone-700`}
                        >
                          <div
                            className="h-4.5 rounded-full bg-emerald-500 dark:bg-teal-700"
                            style={{ width: `${row.health}%` }}
                          >
                            {`${row.health}%`}
                          </div>
                        </div>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
