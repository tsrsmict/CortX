import React from "react";

export default function Table(TableData) {
  //     const data = [
  //     { name: "Anom", age: 19, gender: "Male" },
  //     { name: "Megha", age: 19, gender: "Female" },
  //     { name: "Subham", age: 25, gender: "Male"},
  // ]

  return (
    <div className="text-0.25rem flex bg-gray-300 w-11/12 items-center text-center rounded-2xl shadow-2xl dark:bg-zinc-600 mx-auto mt-10">
      <table className="table-fixed w-full rounded-2xl dark:text-white text-center m-auto">
        <thead className=" bg-zinc-300 dark:bg-zinc-700">
          <th className="p-5">Parameter</th>
          <th>Value</th>
          <th>Risk level</th>
          <th>Health level</th>
        </thead>

        {TableData.map((row, index) => {
          return (
            <tr
              key={index}
              className={`bg-gray-200 dark:bg-zinc-600 m-5 ${
                row.color && "bg-zinc-300 dark:bg-zinc-700"
              }`}
            >
              <td className="">{row.title}</td>
              <td>
                {row.value} {row.unit}
              </td>
              <td className="items-center">
                <span className="w-11/12 my-7 mx-5">
                  <div
                    className={`w-11/12 h-4.5 bg-zinc-400 rounded-full dark:bg-gray-400`}
                  >
                    <div
                      className="h-4.5 rounded-full bg-red-500"
                      style={{ width: "50%" }}
                    >
                      50%
                    </div>
                  </div>
                </span>
              </td>

              <td className=" items-center">
                <span className="w-full my-7 mx-5">
                  <div
                    className={`w-11/12 h-4.5 bg-zinc-400  rounded-full dark:bg-gray-400`}
                  >
                    <div
                      className="h-4.5 rounded-full bg-blue-500"
                      style={{ width: "90%" }}
                    >
                      90%
                    </div>
                  </div>
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
