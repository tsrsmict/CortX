// import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
// import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
// import { App } from "../components/chart";
import { FcCalendar } from "react-icons/fc";
// import Table from "../components/table";
import NavBar from "./new_navbar";
import axios from "axios";
// import {Line} from 'react-chartjs-2'

function getMin() {
  let yourDate = new Date();
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() + offset * 60 * 1000);
  return yourDate.toISOString().split("T")[0];
}
export default function AddReminder() {
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
            <FcCalendar className="text-6xl mr-5 text-sky-800 dark:text-sky-300" />
            <h1 className="text-5xl font-mono dark:text-white font-bold">
              Add Reminder
            </h1>
          </div>
          <div className="text-center m-auto items-center justify-center">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                let reminder = {};
                reminder.reminderName = e.target.name.value;
                reminder.reminderDesc = e.target.desc.value;
                reminder.reminderType = e.target.type.value;
                reminder.reminderDatetime = e.target.datetime.value;

                await axios
                  .post("/api/reminders/new", reminder)
                  .then((res) => {
                    if (res.data.satus == "error") {
                      alert(res.data.error);
                      window.location.replace("/calendar/add");
                    }
                    alert("Added new reminder!");
                    window.location.replace("/calendar");
                  })
                  .catch((err) => {
                    alert(err);
                    window.location.replace("/calendar/add");
                  });
              }}
              style={{ marginRight: "1em" }}
            >
              <input
                placeholder="Reminder Name... (optional)"
                type="text"
                name="name"
              ></input>
              <input
                type="text"
                name="desc"
                placeholder="Reminder Description... (optional)"
              ></input>
              <input
                type="text"
                name="type"
                placeholder="Reminder Type..."
              ></input>
              <input
                type="date"
                name="datetime"
                placeholder="Date... (required)"
                required="true"
                min={getMin()}
              ></input>
              <button
                type="submit"
                className="mt-12 mx-auto mb-5 h-fit w-fit flex bg-green-500 m-auto text-zinc-100 hover:bg-blue-900 rounded-lg shadow-xl  border-1 border-gray-200 p-3"
              >
                <span className="">Add Reminder!</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
