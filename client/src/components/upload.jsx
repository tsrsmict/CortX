// import React, { useState } from "react";
// import ReactDOM from "react-/dom";
// Import React FilePond
// import Navbar from "./navbar";
// import NavBar from "./new_navbar";
import { FaUpload } from "react-icons/fa";
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Upload() {
  return (

    <div className="p-5 text-center">
       <div className="p-12 h-30 m-auto w-1/2 bg-gray-200 dark:bg-gray-700 dark:text-white text-center rounded-lg  border-1 border-black">
        <h1 className="text-5xl font-bold font-mono mb-12">Upload Your Report</h1>
      <form className="m-40% block font-mono">

          <input type={'file'} id={"file"} name="file" className="m-5 p-5 w-3/4 bg-gray-900 rounded-lg dark:text-white" />
          <br></br>
          <span className="w-3/4 bg-gray-900 p-5 rounded-2xl">
          <label for="category" className="w-3/4 bg-gray-900 p-3">Choose a Category</label>
        <select id="category" name="category" className=" w-5/12 p-2 rounded-lg text-black">
          <option value="medical-records">Medical Records</option>
          <option value="prescriptions">Prescriptions</option>
          <option value="blood-tests-and-reports">Blood Tests & Reports</option>
          <option value="blood-tests-and-reports">Body Scans & X-Rays</option>
          <option value="insurance">Insurance</option>
          <option value="vaccination">Vaccination</option>
        </select></span>

        <button className="mt-12 mx-auto mb-5 h-fit w-fit flex bg-blue-500 m-auto text-zinc-100 hover:bg-blue-900 rounded-lg shadow-xl  border-1 border-gray-200 p-3"><span className="mr-3 mt-1"><FaUpload /></span><span className="">Upload</span></button>
      </form>
      </div>
    </div>

  );
}
