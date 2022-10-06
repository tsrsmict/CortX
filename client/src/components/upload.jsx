import React, { useState } from "react";
// import ReactDOM from "react-/dom";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import Navbar from "./navbar";
import NavBar from "./new_navbar";
import { FaUpload } from "react-icons/fa";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function Upload() {
  const [files, setFiles] = useState([]);
  return (

    <div className="bg-red-100 p-5 text-center justify-center content-center">
      <form className="flex m-40%">
        <span className="">
        <input type={'file'} id={"file"} name="file" className="my-5"/></span>
       <button className="h-fit w-fit flex bg-blue-500 my-auto text-zinc-100 hover:bg-blue-900 rounded-lg shadow-xl  border-1 border-gray-200 p-3"><span className="mr-3 mt-1"><FaUpload/></span><span className="">Upload</span></button>
      </form>
    </div>

  );
}
