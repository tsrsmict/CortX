import React from "react";
// import Navbar from "../../components/navbar";
import { FcFolder, FcDepartment, FcBiotech, FcDocument, FcManager, FcBusinessContact, FcMoneyTransfer } from "react-icons/fc";
import NavBar from "../../components/new_navbar";
import Navbar from "../../components/navbar";
// https://tailwindcomponents.com/

export default function Files() {

  return (
    <div className="flex">
      <div>
        <NavBar/>
      </div>
    <div className="flex h-screen w-screen  dark:bg-gray-900">
    <Navbar className=" absolute top-44 left-55 h-100vh shadow-white shadow-lg overflow-auto" style={{position: "shadow-lg"}} />
      {/* <div className="p-10 w-full">
        <div className="flex">
        <FcFolder className=" text-5xl md:text-3xl mr-5 text-sky-800 dark:text-sky-300"/>
        <h1 className="text-5xl md:text-3xl font-mono dark:text-white font-bold">Files</h1>
        </div>

      <div className="sm:mt-5 mt-12 text-center align-middle items-center">
        <table className="flex items-center justify-center text-center align-middle m-auto">
          <tr>
            <td className="">
              <div className="hover:shadow-gray-800 dark:shadow-2xl min-h-fit min-w-fit p-6  bg-sky-900/[0.44] hover:bg-sky-900 rounded-xl text-xl m-10">
                <span className="">
                  <FcDepartment className="text-9xl bg-sky-300/[0.48] rounded-xl p-3 cursor-pointer"/>
                  </span>
              </div>
              <div className="dark:text-white font-bold mt-2 text-center">
                <h1 className="md:text-3/4">
                  Medical Records
                </h1>
              </div>
            </td>
            <td className="">
              <div className="hover:shadow-gray-800 dark:shadow-2xl min-h-fit min-w-fit p-6  bg-purple-600/[0.44] hover:bg-purple-800 rounded-xl text-xl m-10">
                <span className="">
                  <FcBusinessContact className="text-9xl  bg-purple-300/[0.48] rounded-xl p-3 cursor-pointer"/>
                  </span>
              </div>
              <div className="dark:text-white font-bold mt-2 text-center">
                <h1>
                  Prescriptions
                </h1>
              </div>
            </td>
            <td className="">
              <div className="hover:shadow-gray-800 dark:shadow-2xl min-h-fit min-w-fit p-6 bg-pink-600/[0.44] hover:bg-pink-600 rounded-xl text-xl m-10">
                <span className="">
                  <FcBiotech className="text-9xl  bg-pink-300/[0.48] rounded-xl p-3 cursor-pointer"/>
                  </span>
              </div>
              <div className="dark:text-white font-bold mt-2 text-center">
                <h1>
                  Blood Tests and Reports
                </h1>
              </div>
            </td>
            </tr>
            </table>
            <table className="flex items-center justify-center text-center m-auto">
              <tr>
            <td className="">
              <div className="hover:shadow-gray-800 dark:shadow-2xl min-h-fit min-w-fit p-6 bg-black/[0.44] hover:bg-black rounded-xl text-xl m-10">
                <span className="">
                  <FcManager className="text-9xl bg-white/[0.48] rounded-xl p-3 cursor-pointer"/>
                  </span>
              </div>
              <div className="dark:text-white font-bold mt-2 text-center">
                <h1>
                  Body Scans and X-Rays
                </h1>
              </div>
            </td>
            <td className="">
              <div className="hover:shadow-gray-800 dark:shadow-2xl min-h-fit min-w-fit p-6 bg-yellow-600/[0.44] hover:bg-yellow-600 rounded-xl text-xl m-10">
                <span className="">
                  <FcDocument className="text-9xl bg-yellow-300/[0.48] rounded-xl p-3 cursor-pointer"/>
                  </span>
              </div>
              <div className="dark:text-white font-bold mt-2 text-center">
                <h1>
                  Vaccination
                </h1>
              </div>
            </td>
            <td className="">
              <div className="hover:shadow-gray-800 dark:shadow-2xl min-h-fit min-w-fit p-6 bg-green-900/[0.44] hover:bg-green-900 rounded-xl text-xl m-10">
                <span className="">
                  <FcMoneyTransfer className="text-9xl bg-green-300/[0.48] rounded-xl p-3 cursor-pointer"/>
                  </span>
              </div>
              <div className="dark:text-white font-bold mt-2 text-center">
                <h1>
                  Insurance
                </h1>
              </div>
            </td>
           
          </tr>
        </table>

      </div>
      </div>
    </div></div> */}
    </div>
    </div>
  );
}
