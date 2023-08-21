// import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
// import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
// import { App } from "../components/chart";
import { FcAddressBook, FcExport } from "react-icons/fc";
// import Table from "../components/table";
import NavBar from "../components/new_navbar";
import axios from "axios";

import Loader from "../loader/Loader";

// import {Line} from 'react-chartjs-2'
export default function Contacts() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`/api/contacts/getUserContacts`)
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  if (data === undefined) {
    return <Loader />;
  }

  return (
    <div className=" absolute overflow-auto bg-stone-200 dark:bg-stone-900 h-screen w-screen">
      <NavBar className="sm:hidden" />
      <div className="flex h-full">
        <Navbar
          className="fixed top-44 left-55  overflow-auto"
          style={{ position: "shadow-md" }}
        />
        <div className="p-1 sm:p-8 sm:mt-200px ml-12 lg:p-12">
          <div className="flex p-5">
            <FcAddressBook className="text-6xl mr-5 text-sky-800 dark:text-sky-300" />
            <h1 className="text-5xl font-mono dark:text-white font-bold">
              Contacts
            </h1>
          </div>

          <div className=" text-xs md:text-md rounded-2xl text-0.25rem flex bg-slate-100 dark:bg-stone-800 m-5 w-11/12 items-center text-center border border-gray-300 shadow-zinc-800 mx-auto mt-10">
            <table className="table-fixed w-full rounded-2xl dark:text-white text-center m-auto">
              <thead className="">
                <th className="p-5">Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Specialization</th>
                <th>Export</th>
              </thead>

              {data.map((row, index) => {
                return (
                  <tr
                    name={row.email}
                    className={` $(color && "shadow-md shadow-zinc-800")`}
                  >
                    <td className="">{row.name}</td>
                    <td className="">{row.email}</td>
                    <td className="">{row.phone}</td>
                    <td className="">{row.specialization}</td>
                    <td className="text-3xl p-2">
                      <button
                        onClick={async (e) => {
                          e.preventDefault();

                          const res = await axios.get("api/sendMail", {
                            params: {
                              subject: "Your Patient's File",
                              recepient: row.email,
                            },
                          });

                          if (res.data.status === "error") {
                            alert(res.data.error);
                            window.location.replace("/contacts");
                          } else if (res.data.status === "success") {
                            alert("Sent mail!");
                            window.location.replace("/contacts");
                          }
                        }}
                      >
                        <FcExport />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/add-contact");
              }}
              className="mt-12 mx-auto mb-5 h-fit w-fit flex bg-blue-400 m-auto text-zinc-100 bg-blue-600 rounded-lg hover:bg-blue-500 border-1 border-blue-700 p-3"
            >
              <span className="">Add Contacts</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
