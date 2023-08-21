import React from "react";
// import Upload from './upload'
import NavBar from "./new_navbar";
import Navbar from "./navbar";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Upload from "./upload";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";
function Files_M() {
  const [data, setData] = useState({
    file: null,
    category: "",
  });
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value[0];
    console.log(newdata);
  }
  return (
    <div className=" absolute overflow-auto bg-stone-200 dark:bg-dark-purple h-screen w-screen">
      <NavBar className="sm:hidden" />
      <div className="flex">
        <Navbar
          className=" absolute top-44 left-55 h-100vh shadow-white shadow-lg overflow-auto"
          style={{ position: "shadow-lg" }}
        />
        <div className="p-1 sm:p-8 sm:mt-96 lg:p-12">
          <Popup
            trigger={<button> Click to open popup </button>}
            position=""
            className=""
          >
            <div>
              <div className="p-5 text-center w-screen">
                <div className="p-12 h-30 m-auto md:w-1/2 bg-gray-200 dark:bg-stone-700 dark:text-white text-center rounded-lg  border-1 border-black">
                  <h1 className="text-5xl font-bold font-mono mb-12">
                    Upload Your Report
                  </h1>
                  <form className="m-40% block font-mono">
                    <input
                      type={"file"}
                      id={"file"}
                      onChange={(e) => {
                        handle(e);
                      }}
                      value={data.file}
                      name="file"
                      className="m-5 p-5 w-3/4 dark:bg-stone-900 rounded-lg dark:text-white"
                      required
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    <span className="w-3/4 dark:bg-stone-900 p-5 rounded-2xl">
                      <label
                        htmlhtmlFor="category"
                        className="w-3/4 dark:bg-stone-900 p-3"
                      >
                        Choose a Category
                      </label>
                      <select
                        id="category"
                        onChange={(e) => {
                          handle(e);
                        }}
                        value={data.category}
                        name="category"
                        className=" w-5/12 p-2 rounded-lg text-black"
                      >
                        <option value="medical-records">Medical Records</option>
                        <option value="prescriptions">Prescriptions</option>
                        <option value="blood-tests-and-reports">
                          Blood Tests & Reports
                        </option>
                        <option value="blood-tests-and-reports">
                          Body Scans & X-Rays
                        </option>
                        <option value="insurance">Insurance</option>
                        <option value="vaccination">Vaccination</option>
                      </select>
                    </span>
                    <div className="m-12">
                      <button
                        type="submit"
                        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                      >
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-stone-600  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="flex relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                          <span className="mx-2 mt-1">
                            <FaUpload />
                          </span>
                          <span classame="">Upload</span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <button>Click here</button>
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Files_M;
