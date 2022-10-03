import React from "react";
import Navbar from "../../components/navbar";
import { FcDepartment } from "react-icons/fc";
export default function Mr() {
    return (
        <div className="flex h-screen w-screen overflow-auto dark:bg-gray-900">
            <Navbar className="shadow-white shaodow-lg fixed top-0 left-0 z--50"/>
      <div className="p-10 w-full">
        <div className="flex">
        <FcDepartment className=" text-5xl md:text-3xl mr-5 text-sky-800 dark:text-sky-300"/>
        <h1 className="text-5xl md:text-3xl font-mono dark:text-white font-bold">Medical Record Files</h1>
        </div>
        </div>

        </div>
    )
}