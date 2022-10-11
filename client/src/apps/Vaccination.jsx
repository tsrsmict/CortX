import React from "react";
import Navbar from "../components/navbar";
import CortoComp from "../components/CortocComp";
import Chart from "../components/chart";
const reminders = [
  {
    name: "",
    date: "",
  },
];
function Vaccination() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch(
      "/api/files/getUserFiles?" +
        new URLSearchParams({
          category: "vaccinations",
        })
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  if (data === undefined) {
    return <>Still loading...</>;
  } else {
    console.log(data);
  }
  return (
    <div className="">
      <Navbar />
      <div className="flex h-screen w-screen bg-stone-200 overflow-auto dark:bg-gray-900">
        <div className="p-10 w-full">
          <div className="ml-24">
            <div className="flex">
              <h1 className="text-5xl sm:text-3xl font-mono dark:text-white font-bold mt-12">
                Vaccinations
              </h1>
            </div>
            <div className="flex items-center">
            <div className="m-auto rounded-lg w-1/5 bg-sky-400 bg-gradient-to-r from-sky-500 to-sky-300 hover:shadow-2xl shadow-white hover:bg-gradient-to-l from-sky-500 to-sky-900 duration-500 p-5 dark:text-white">
              Upcoming Reminders:
              <br />
              <br />
              You have your booster dose for COVID 19 Coming up on 25th October
              <br/><br/>
              Your 5 year tetanus shot gets over on 19th November
            </div></div>
            <div
              id="table"
              className=" text-xs md:text-md rounded-2xl text-0.25rem flex bg-slate-100 dark:bg-stone-800 m-5 w-11/12 items-center text-center shadow-2xl shadow-zinc-800 mx-auto mt-10"
            >
              <table className="table-fixed w-full rounded-2xl dark:text-white text-center m-auto">
                <thead className="">
                  <th className="p-5">Vaccine Name</th>
                  <th>Cerificate</th>
                  <th>Date of Dose</th>
                </thead>

                {data.map((row, index) => {
                  return (
                    <tr
                      key={index}
                      className={` $(color && "shadow-2xl shadow-zinc-800")`}
                    >
                      <td className="p-5 underline">
                        <a
                          href={`http://localhost:5000/api/files/getFile?fileID=${row._id}`}
                        >
                          {row.name}
                        </a>
                      </td>
                      <td className="p-5">{row.desc}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vaccination;
