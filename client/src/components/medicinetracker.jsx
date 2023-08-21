import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
// import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
// import { App } from "../components/chart";
import { FcAddressBook, FcBiohazard, FcExport,  } from "react-icons/fc";
// import Table from "../components/table";
import NavBar from "../components/new_navbar";
import axios from "axios";

import Loader from "../loader/Loader";
import React from "react";

// import {Line} from 'react-chartjs-2'
export default function MedicineTracker() {
  const data = localStorage.getItem("medData")
  const medicines = JSON.parse(data)
  return (
    <div className=" absolute overflow-auto dark:bg-stone-900 h-screen w-screen">
      <NavBar className="sm:hidden" />
      <div className="flex h-full">
        <Navbar
          className="fixed top-44 left-55 shadow-white shadow-lg overflow-auto"
          style={{ position: "shadow-lg" }}
        />
        <div className="p-1 sm:p-8 sm:mt-200px ml-12 lg:p-12">
          <div className="flex p-5">
            <FcBiohazard className="text-6xl mr-5 text-sky-800 dark:text-sky-300" />
            <h1 className="text-5xl font-mono dark:text-white font-bold">
              Medicines
            </h1>
          </div>

          <div className=" text-xs md:text-md rounded-2xl text-0.25rem flex bg-slate-100 dark:bg-stone-800 m-5 w-11/12 items-center text-center shadow-2xl shadow-zinc-800 mx-auto mt-10">
            <table className="table-fixed w-full rounded-2xl dark:text-white text-center m-auto">
              <thead className="">
                <th className="p-5">Name</th>
                <th>Side Effects</th>
                <th>Frequency</th>
                <th>Dosage Period</th>
              </thead>

              {medicines.map((row, index) => {
                return (
                  <tr
                    name={row.name}
                    className={` $(color && "shadow-2xl shadow-zinc-800")`}
                  >
                    <td className="p-5">{row.name}</td>
                    <td className="">{row.purpose}</td>
                     <td className="">{row.dosage}</td>
                     <td className="">{row.frequency}</td>

                  </tr>
                );
              })}
            </table>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/add-medicine");
              }}
              className="mt-12 mx-auto mb-5 h-fit w-fit flex bg-green-500 m-auto text-zinc-100 hover:bg-blue-900 rounded-lg shadow-xl  border-1 border-gray-200 p-3"
            >
              <span className="">Add Medicine</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
