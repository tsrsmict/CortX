import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
export default function CortoComp() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
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
                            className="form-control bg-gray-600 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            onChange={(e) => this.fileChangeHandler(e)}
                            required
                          />
                          <input
                            type="text"
                            name="fileName"
                            onChange={(e) => this.changeHandler(e)}
                            placeholder="My File (Optional)"
                            className="m-3 p-2 rounded-md bg-gray-600 focus:outline-0"
                          />
                          <input
                            type="text"
                            name="fileDesc"
                            onChange={(e) => this.changeHandler(e)}
                            placeholder="A report on... (Optional)"
                            className="m-3 p-2 rounded-md bg-gray-600 focus:outline-0"
                          />
                          <br></br>
                          <br></br>
                          <br></br>
                          <span className="bg-gray-900 p-5 rounded-2xl">
                            <label
                              htmlhtmlFor="category"
                              className=" bg-gray-900 p-3"
                            >
                              Choose a Category
                            </label>
                            <select
                              id="category"
                              onChange={(e) => {
                                this.changeHandler(e);
                              }}
                              placeholder="--type"
                              name="category"
                              className=" p-2 rounded-lg text-black"
                            >
                              <option value="" disabled selected>
                                Select your upload type
                              </option>
                              <option value="medicalRecords">
                                Medical Records
                              </option>
                              <option value="prescriptions">
                                Prescriptions
                              </option>
                              <option value="bloodTestsAndReports">
                                Blood Tests & Reports
                              </option>
                              <option value="bodyScansAndXrays">
                                Body Scans & X-Rays
                              </option>
                              <option value="insurance">Insurance</option>
                              <option value="vaccinations">Vaccination</option>
                            </select>
                          </span>
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
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
