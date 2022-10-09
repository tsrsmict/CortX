


// import { Link, useNavigate } from "react-router-dom";
import React, { Component } from "react";


import { FaUpload } from "react-icons/fa";
import axios from "axios";
import FormData from "form-data";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      fileDesc: "",
      file: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fileChangeHandler = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  submitHandler = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("file", this.state.file);
    data.append("fileName", this.state.fileName);
    data.append("fileDesc", this.state.fileDesc);
    console.log(data);
    axios
      .post("/api/files/upload", data)
      .then((r) => {
        console.log("JSON Response: " + r);
        alert("File uploaded successfully.");
        window.location.replace("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.error);
        window.location.replace("/upload");
      });
  };
  render() {
    return (
      <div>
        <div className="p-5 text-center">
          <div className="p-12 h-30 m-auto w-1/2 bg-gray-200 dark:bg-gray-700 dark:text-white text-center rounded-lg  border-1 border-black">
            <h1 className="text-5xl font-bold font-mono mb-12">
              Upload Your Report
            </h1>
            <form
              ref="uploadForm"
              id="uploadForm"
              onSubmit={(e) => this.submitHandler(e)}
            >
              {" "}
              <input
                type="file"
                name="file"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => this.fileChangeHandler(e)}
                required
              />
              <input
                type="text"
                name="fileName"
                onChange={(e) => this.changeHandler(e)}
                placeholder="My File (Optional)"
              />
              <input
                type="text"
                name="fileDesc"
                onChange={(e) => this.changeHandler(e)}
                placeholder="A report on... (Optional)"
              />
              <span className="w-3/4 bg-gray-900 p-5 rounded-2xl">
          <label htmlhtmlFor="category" className="w-3/4 bg-gray-900 p-3">Choose a Category</label>
        <select id="category" onChange={(e) => {handle(e)}}  value={data.category}  name="category" className=" w-5/12 p-2 rounded-lg text-black">
          <option value="medicalRecords">Medical Records</option>
          <option value="prescriptions">Prescriptions</option>
          <option value="bloodTestsAndReports">Blood Tests & Reports</option>
          <option value="bodyScansAndXrays">Body Scans & X-Rays</option>
          <option value="insurance">Insurance</option>
          <option value="vaccination">Vaccination</option>
        </select></span>
              <button
                type="submit"
                value="Upload!"
                className="mt-12 mx-auto mb-5 h-fit w-fit flex bg-blue-500 m-auto text-zinc-100 hover:bg-blue-900 rounded-lg shadow-xl  border-1 border-gray-200 p-3"
              >
                <FaUpload />
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUpload;
