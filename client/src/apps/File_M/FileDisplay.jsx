import React from "react";
import Navbar from "../../components/navbar";
import {
  FcDepartment,
  FcBiotech,
  FcDocument,
  FcManager,
  FcBusinessContact,
  FcMoneyTransfer,
} from "react-icons/fc";
import Loader from "../../loader/Loader";

function renderIcon(fetchParam) {
  if (fetchParam === "medicalRecords")
    return (
      <FcDepartment className="text-5xl bg-sky-300/[0.48] rounded-xl p-1 cursor-pointer" />
    );
  else if (fetchParam === "prescriptions")
    return (
      <FcBusinessContact className="text-6xl bg-purple-300/[0.48] rounded-xl p-3 cursor-pointer" />
    );
  else if (fetchParam === "bloodTestsAndReports")
    return (
      <FcBiotech className="text-6xl  bg-pink-300/[0.48] rounded-xl p-3 cursor-pointer" />
    );
  else if (fetchParam === "bodyScansAndXrays")
    return (
      <FcManager className="text-6xl bg-white/[0.48] rounded-xl p-3 cursor-pointer" />
    );
  else if (fetchParam === "vaccinations")
    return (
      <FcDocument className="text-6xl bg-yellow-300/[0.48] rounded-xl p-3 cursor-pointer" />
    );
  else if (fetchParam === "insurance")
    return (
      <FcMoneyTransfer className="text-6xl bg-green-300/[0.48] rounded-xl p-3 cursor-pointer" />
    );
  return;
}

export default function FileDisplay(props) {
  // prop types: fetch (fetch param name), nameFormatted (name of the file display page formatted)
  const { fetchParam, name } = props;
  const [fileData, setFileData] = React.useState();
  React.useEffect(() => {
    fetch(
      "/api/files/getUserFiles?" +
        new URLSearchParams({
          category: fetchParam,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setFileData(data);
      });
  });

  if (fileData === undefined) {
    return <Loader />;
  } else {
    if (fileData?.length === 0) console.log("No files.");
  }
  return (
    <div className="flex h-screen w-screen overflow-auto dark:bg-gray-900">
      <Navbar className="shadow-white shaodow-lg fixed top-0 left-0 z--50" />
      <div className="p-10 w-full">
        <div className="ml-24">
          <div className="flex">
            <div className="hover:shadow-gray-800 dark:shadow-2xl min-h-fit min-w-fit p-3  bg-sky-900/[0.44] hover:bg-sky-900 rounded-xl text-xl m-10">
              <span className="">{renderIcon(fetchParam)}</span>
            </div>
            <h1 className="text-5xl sm:text-3xl font-mono dark:text-white font-bold mt-12">
              {name} Files
            </h1>
          </div>
          <div
            id="table"
            className=" text-xs md:text-md rounded-2xl text-0.25rem flex bg-slate-100 dark:bg-stone-800 m-5 w-11/12 items-center text-center shadow-2xl shadow-zinc-800 mx-auto mt-10"
          >
            <table className="table-fixed w-full rounded-2xl dark:text-white text-center m-auto">
              {fileData?.length > 0 ? (
                <thead className="">
                  <th className="p-5">Name</th>
                  <th>Description</th>
                  <th>Category</th>
                </thead>
              ) : null}

              {fileData?.length > 0 ? (
                fileData.map((row, index) => {
                  return (
                    <tr
                      key={index}
                      className={` $(color && "shadow-2xl shadow-zinc-800")`}
                    >
                      <td className="p-5 underline">
                        <button
                          style={{
                            color: "#88ff61",
                            textDecoration: "underline",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            let filename;
                            fetch(`/api/files/getFile?fileID=${row._id}`)
                              .then((res) => {
                                const header = res.headers.get(
                                  "Content-Disposition"
                                );
                                const parts = header.split("filename=");
                                filename = parts[1];
                                return res.blob();
                              })
                              .then((blob) => {
                                let url = window.URL.createObjectURL(blob);
                                let a = document.createElement("a");
                                a.href = url;
                                a.download = filename;
                                document.body.appendChild(a);
                                a.click();
                                a.remove();
                              });
                          }}
                        >
                          {row.name}
                        </button>
                      </td>
                      <td className="p-5">{row.desc}</td>

                      <td className="items-center">{name}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td></td>
                  <td
                    style={{
                      color: "white",
                      fontSize: "calc(1rem + 1.5vw)",
                      textAlign: "center",
                      marginTop: "20%",
                    }}
                  >
                    <p>No files to display...</p>
                  </td>
                  <td></td>
                </tr>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
