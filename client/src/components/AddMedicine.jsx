// import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
// import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
// import { App } from "../components/chart";
import { FcAddressBook, FcExport } from "react-icons/fc";
// import Table from "../components/table";
import NavBar from "./new_navbar";
import axios from "axios";
// import {Line} from 'react-chartjs-2'

export default function AddMedicine() {

  return (
    <div className=" absolute overflow-auto dark:dark:bg-stone-900 h-screen w-screen">
      <NavBar className="sm:hidden" />
      <div className="flex h-full">
        <Navbar
          className="fixed top-44 left-55 shadow-white shadow-lg overflow-auto"
          style={{ position: "shadow-lg" }}
        />
        <div className="p-1 sm:p-8 sm:mt-200px ml-12 lg:p-12">
          <div className="flex p-5">
            <FcAddressBook className="text-6xl mr-5 text-sky-800 dark:text-sky-300" />
            <h1 className="text-5xl font-mono dark:text-white font-bold">
              Medicines
            </h1>
          </div>
          <div className="text-center m-auto items-center justify-center">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                let contact = {
                  name: e.target.name.value,
                  purpose: e.target.purpose.value,
                  dosage: e.target.dosage.value,
                  frequency: e.target.frequency.value,
                };
                if (localStorage.getItem("medData") === null){
                
                  var data = [contact]

                }
                else {
                  data = JSON.parse(localStorage.getItem("medData"))
                  data.push(contact)
                }
                localStorage.setItem("medData", JSON.stringify(data))
                console.log(data)
                alert("Added")
                window.location.replace("/medicinetracker")
              }}
            >
              <input placeholder="Name..." type="text" name="name" className="p-3 m-5 rounded-lg"></input>
              <input
                type="text"
                name="purpose"
                placeholder="for blood sugar"
                className="p-3 m-5 rounded-lg"
              ></input>
              <input type="text" name="dosage" placeholder="20mg" className="p-3 m-5 rounded-lg"></input>
              <input
                type="text"
                name="frequency"
                placeholder="frequency..."
                className="p-3 m-5 rounded-lg"
              ></input>
              <button
                type="submit"
                className="mt-12 mx-auto mb-5 h-fit w-fit flex bg-green-300 text-black hover:text-white m-auto text-zinc-100 hover:bg-green-700 rounded-lg shadow-xl  border-1 border-gray-200 p-3"
              >
                <span className="">Add Medicine</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
