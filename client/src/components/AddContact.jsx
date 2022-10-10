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
export default function AddContact() {
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
            <FcAddressBook className="text-6xl mr-5 text-sky-800 dark:text-sky-300" />
            <h1 className="text-5xl font-mono dark:text-white font-bold">
              Contacts
            </h1>
          </div>
          <div className="text-center m-auto items-center justify-center">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                let contact = {};
                contact.name = e.target.name.value;
                contact.phone = e.target.phone.value;
                contact.email = e.target.email.value;
                contact.specialization = e.target.specialization.value;

                await axios
                  .post("/api/contacts/new", contact)
                  .then((res) => {
                    if (res.data.message == "error") {
                      alert("Error!");
                      window.location.replace("/add-contact");
                    }
                    alert(res.data.message);
                    window.location.replace("/contacts");
                  })
                  .catch((err) => {
                    alert(err);
                    window.location.replace("/contacts");
                  });
              }}
              style={{ marginRight: "1em" }}
            >
              <input placeholder="Name..." type="text" name="name"></input>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number..."
              ></input>
              <input type="text" name="email" placeholder="E-mail..."></input>
              <input
                type="text"
                name="specialization"
                placeholder="Specialization..."
              ></input>
              <button
                type="submit"
                className="mt-12 mx-auto mb-5 h-fit w-fit flex bg-green-500 m-auto text-zinc-100 hover:bg-blue-900 rounded-lg shadow-xl  border-1 border-gray-200 p-3"
              >
                <span className="">Add Contact</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
