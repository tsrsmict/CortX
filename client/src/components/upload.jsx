// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// import Navbar from "./navbar";
// import NavBar from "./new_navbar";
// import { FaUpload } from "react-icons/fa";
// import { FilePond, registerPlugin } from 'react-filepond';
// import  './upload.css'
// // Import FilePond styles
// import 'filepond/dist/filepond.min.css';
// // registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// import React, { Component } from 'react'

// export class upload extends Component {
//   const url = "";
//   const [data, setData] = useState({
//     file: null,
//     category: "",
//   });
//   function handle(e) {
//     const newdata = { ...data };
//     newdata[e.target.id] = e.target.value[0];
//     setData(newdata);
//     console.log(newdata);
//   }
//   return (
//     <div>

//     <div className="p-5 text-center">
//        <div className="p-12 h-30 m-auto w-1/2 bg-gray-200 dark:bg-gray-700 dark:text-white text-center rounded-lg  border-1 border-black">
//          <h1 className="text-5xl font-bold font-mono mb-12">Upload Your Report</h1>
//        <form className="m-40% block font-mono">

//            <input type={'file'} id={"file"} name="file" className="m-5 p-5 w-3/4 bg-gray-900 rounded-lg dark:text-white" />
//            <br></br>
//            <span className="w-3/4 bg-gray-900 p-5 rounded-2xl" value={this,}>
//            <label for="category" className="w-3/4 bg-gray-900 p-3">Choose a Category</label>
//          <select id="category" name="category" className=" w-5/12 p-2 rounded-lg text-black">
//           <option value="medical-records">Medical Records</option>
//            <option value="prescriptions">Prescriptions</option>
//            <option value="blood-tests-and-reports">Blood Tests & Reports</option>
//            <option value="blood-tests-and-reports">Body Scans & X-Rays</option>
//            <option value="insurance">Insurance</option>
//            <option value="vaccination">Vaccination</option>
//          </select></span>

//        <button className="mt-12 mx-auto mb-5 h-fit w-fit flex bg-blue-500 m-auto text-zinc-100 hover:bg-blue-900 rounded-lg shadow-xl  border-1 border-gray-200 p-3"><span className="mr-3 mt-1"><FaUpload /></span><span className="">Upload</span></button>
//        </form>
//      </div>
//      </div>
//   </div>
//   )}

import { Link, useNavigate } from "react-router-dom";
import React, { Component } from "react";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
class SigninModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      category: "medical-records",
    };
  }

  fileHandler = (e) => {
    this.setState({ file: e.target.value });
  };
  categoryHandler = (e) => {
    this.setState({ category: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    console.log(this.state, JSON.stringify(this.state));
    axios.post('', JSON.stringify(this.state))
  };
  render() {
    // const navigate = useNavigate()
    return (
      <div>
        <div className="p-5 text-center">
          <div className="p-12 h-30 m-auto w-1/2 bg-gray-200 dark:bg-gray-700 dark:text-white text-center rounded-lg  border-1 border-black">
            <h1 className="text-5xl font-bold font-mono mb-12">
              Upload Your Report
            </h1>
            <form
              className="m-40% block font-mono"
              onSubmit={(e) => this.submitHandler(e)}
            >
              <div class="flex justify-center">
                <div class="mb-3 w-96">
                  <label
                    for="formFile"
                    class="form-label inline-block mb-2 text-gray-700"
                  >
                    Default file input example
                  </label>
                  <input
                    className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="formFile"
                    defaultValue={this.file}
                    onChange={(e) => this.fileHandler(e)}
                    name="file"
                  />
                </div>
              </div>

              <br></br>
              <span className="w-3/4 bg-gray-900 p-5 rounded-2xl">
                <label htmlFor="category" className="w-3/4 bg-gray-900 p-3">
                  Choose a Category
                </label>
                <select
                  id="category"
                  name="category"
                  className=" w-5/12 p-2 rounded-lg text-black"
                  defaultValue={this.category}
                  onChange={(e) => this.categoryHandler(e)}
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

              <button className="mt-12 mx-auto mb-5 h-fit w-fit flex bg-blue-500 m-auto text-zinc-100 hover:bg-blue-900 rounded-lg shadow-xl  border-1 border-gray-200 p-3">
                <span className="mr-3 mt-1">
                  <FaUpload />
                </span>
                <span className="">Upload</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SigninModule;

{
  /* // import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// // Import React FilePond
// import { FilePond, registerPlugin } from "react-filepond";

// // Import FilePond styles
// import "filepond/dist/filepond.min.css";

// // Import the Image EXIF Orientation and Image Preview plugins
// // Note: These need to be installed separately
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// // Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// // Our app
// class App extends Component { */
}
//   constructor(props) {
//     super(props);

//     this.state = {
//       // Set initial files, type 'local' means this is a file
//       // that has already been uploaded to the server (see docs)
//       files: [
//         {
//           source: "index.html",
//           options: {
//             type: "local"
//           }
//         }
//       ]
//     };
//   }

//   handleInit() {
//     console.log("FilePond instance has initialised", this.pond);
//   }

//   render() {
//     return (
//       <div className="App">
//         <FilePond
//           ref={ref => (this.pond = ref)}
//           files={this.state.files}
//           allowMultiple={true}
//           allowReorder={true}
//           maxFiles={3}
//           server="/api"
//           name="files" {/* sets the file input name, it's filepond by default */}
//           oninit={() => this.handleInit()}
//           onupdatefiles={fileItems => {
//             // Set currently active file objects to this.state
//             this.setState({
//               files: fileItems.map(fileItem => fileItem.file)
//             });
//           }}
//         />
//       </div>
//     );
//   }
// }

//     {/* <div className="p-5 text-center">
//       <div className="p-12 h-30 m-auto w-1/2 bg-gray-200 dark:bg-gray-700 dark:text-white text-center rounded-lg  border-1 border-black">
//         <h1 className="text-5xl font-bold font-mono mb-12">
//           Upload Your Report
//         </h1>
//         <form className="m-40% block font-mono">
//           <input
//             type={"file"}
//             id={"file"}
//             onChange={(e) => {
//               handle(e);
//             }}
//             value={data.file}
//             name="file"
//             className="m-5 p-5 w-3/4 bg-gray-900 rounded-lg dark:text-white"
//             required
//           />
//           <br></br>
//           <span className="w-3/4 bg-gray-900 p-5 rounded-2xl">
//             <label htmlhtmlFor="category" className="w-3/4 bg-gray-900 p-3">
//               Choose a Category
//             </label>
//             <select
//               id="category"
//               onChange={(e) => {
//                 handle(e);
//               }}
//               value={data.category}
//               name="category"
//               className=" w-5/12 p-2 rounded-lg text-black"
//             >
//               <option value="medical-records">Medical Records</option>
//               <option value="prescriptions">Prescriptions</option>
//               <option value="blood-tests-and-reports">
//                 Blood Tests & Reports
//               </option>
//               <option value="blood-tests-and-reports">
//                 Body Scans & X-Rays
//               </option>
//               <option value="insurance">Insurance</option>
//               <option value="vaccination">Vaccination</option>
//             </select>
//           </span>
//           <button className="mt-12 mx-auto mb-5 h-fit w-fit flex bg-blue-500 m-auto text-zinc-100 hover:bg-blue-900 rounded-lg shadow-xl  border-1 border-gray-200 p-3">
//             <span className="mr-3 mt-1">
//               <FaUpload />
//             </span>
//             <span className="">Upload</span>
//           </button>
//         </form>
//       </div>
//     </div>
//     </div> */

// // import React, { useState } from 'react'
// // import ReactDOM from 'react-dom'

// // // Import React FilePond
// // import { FilePond, registerPlugin } from "react-filepond";

// // // Import FilePond styles
// // import "filepond/dist/filepond.min.css";

// // // Import the Image EXIF Orientation and Image Preview plugins
// // // Note: These need to be installed separately
// // import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// // import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// // import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// // // Register the plugins
// // registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// // // Our app
// // export default class Upload extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       // Set initial files, type 'local' means this is a file
// //       // that has already been uploaded to the server (see docs)
// //       files: [
// //         {
// //           source: "index.html",
// //           options: {
// //             type: "local"
// //           }
// //         }
// //       ]
// //     };
// //   }

// //   handleInit() {
// //     console.log("FilePond instance has initialised", this.pond);

// //   }
// //   submitHandler(e) {
// //     e.preventDefault()

// //     console.log(this.state, JSON.stringify(this.state))
// //   }
// //   render() {
// //     return (
// //       <div className="App">
// //         <form onSubmit={(e) => this.submitHandler(e)}>
// //         <FilePond
// //           ref={ref => (this.pond = ref)}
// //           files={this.state.files}
// //           allowMultiple={true}
// //           allowReorder={true}
// //           maxFiles={3}
// //           server="/api"
// //           name="files"
// //           oninit={() => this.handleInit()}
// //           onupdatefiles={fileItems => {
// //             // Set currently active file objects to this.state
// //             this.setState({
// //               files: fileItems.map(fileItem => fileItem.file)
// //             });
// //           }}
// //         />
// //         <button type="submit">submit</button>
// //         </form>
// //       </div>
// //     );
// //   }
// }
