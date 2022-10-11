import React from "react";
import Navbar from "../../components/navbar";
import { FcDepartment } from "react-icons/fc";
export default function Mr() {
  //   const files = await axios.get("/api/files/getUserFiles", {
  //     params: { category: "medicalRecords" },
  //   });

  //   console.log(files);

  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch(
      "http://localhost:3000/api/files/getUserFiles?" +
        new URLSearchParams({
          category: "medicalRecords",
        })
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  if (data === undefined) {
    return <>Still loading...</>;
  }

  return (
    <div className="flex h-screen w-screen overflow-auto dark:bg-gray-900">
      <Navbar className="shadow-white shaodow-lg fixed top-0 left-0 z--50" />
      <div className="p-10 w-full">
        <div className="ml-24">
          <div className="flex">
            <div className="hover:shadow-gray-800 dark:shadow-2xl min-h-fit min-w-fit p-3  bg-sky-900/[0.44] hover:bg-sky-900 rounded-xl text-xl m-10">
              <span className="">
                <FcDepartment className="text-5xl bg-sky-300/[0.48] rounded-xl p-1 cursor-pointer" />
              </span>
            </div>
            <h1 className="text-5xl sm:text-3xl font-mono dark:text-white font-bold mt-12">
              Medical Record Files
            </h1>
          </div>

          <div
            id="table"
            className=" text-xs md:text-md rounded-2xl text-0.25rem flex bg-slate-100 dark:bg-stone-800 m-5 w-11/12 items-center text-center shadow-2xl shadow-zinc-800 mx-auto mt-10"
          >
            <table className="table-fixed w-full rounded-2xl dark:text-white text-center m-auto">
              <thead className="">
                <th className="p-5">Name</th>
                <th>Description</th>
                <th>Category</th>
              </thead>

              {data.map((row, index) => {
                return (
                  <tr
                    key={index}
                    className={` $(color && "shadow-2xl shadow-zinc-800")`}
                  >
                    <td className="p-5 underline"><a href="http://localhost:5000/api/files/getFile?fileID=6343c52db33974a2b06527de"  >{row.title}</a></td>
                    <td className="p-5">{row.value}{row.unit}</td>
                    <td className="items-center">
                        Medical Records
                    </td>
                    <td className="p-5">{row.desc}</td>
                    <td className="items-center">Medical Records</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
