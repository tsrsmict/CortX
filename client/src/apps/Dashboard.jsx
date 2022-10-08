// import React from "react";
import Navbar from "../components/navbar";
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { App } from "../components/chart";
import { RiDashboardFill } from "react-icons/ri";
// import Table from "../components/table";
import NavBar from "../components/new_navbar";
// import {Line} from 'react-chartjs-2'
export default function Dashboard() {

  const TableData = [{
    title: "White Blood Cell (WBC) (Leukocytes) Count",
    value: 6250,
    unit: 'cells/cu.mm',
    bri_start: 4000,
    bri_end: 10500,
    color: false,
    // percentage: String(200*TableDate[1][value]/bri_end+bri_start)

  }, {
    title: 'Red blood Cell (Wbc) Erthrocytes Count',
    value: 4.94,
    unit: 'milli/cu.mm',
    bri_start: 4.7,
    bri_end: 6.0,
    color: true,
  }, {
    title: 'Platelet Count',
    value: 173,
    unit: '10^3/microliter',
    bri_start: 150,
    bri_end: 450,
    color: false
  },
  {
    title: 'Absolute Monocyte Count',
    value: 500,
    unit: '/c.mm',
    bri_start: 200,
    bri_end: 1000,
    color: true
  },
  {
    title: 'Absolute Eosinophilis Count',
    value: 375,
    unit: '/c.mm',
    bri_start: 200,
    bri_end: 1000,
    color: false
  },
  {
    title: 'Absolute Lymphocyte Count',
    value: 500,
    unit: '/c.mm',
    bri_start: 1000,
    bri_end: 3000,
    color: true
  }, {
    title: 'Absolute Neutrophilis Count',
    value: 3313,
    unit: '/c.mm',
    bri_start: 2000,
    bri_end: 7000,
    color: false
  },
  {
    title: 'Absolute Neutrophilis Count',
    value: 3313,
    unit: '/c.mm',
    bri_start: 2000,
    bri_end: 7000,
    color: true
  }


  ]

  return (
    <div className=" absolute overflow-auto dark:bg-stone-900 h-screen w-screen">
      <NavBar className='sm:hidden' />
      <div className="flex h-full">
        <Navbar className="fixed top-44 left-55 shadow-white shadow-lg overflow-auto" style={{ position: "shadow-lg" }} />
        <div className="p-1 sm:p-8 sm:mt-200px ml-12 lg:p-12">
          <div className="flex p-5">
            <RiDashboardFill className="text-5xl mr-5 text-sky-800 dark:text-sky-300" />
            <h1 className="text-5xl font-mono dark:text-white font-bold">Dashboard</h1>
          </div>
          <div className="">
            <div className=" m-auto p-4 lg:p-12  sm:flex  w-full">
              <div className="sm:w-11/12 xl:w-1/2 lg:w-2/3 bg-zinc-200/[0.8] dark:bg-zinc-200 p-3 shadow-2xl shadow-zinc-600 rounded-2xl m-auto">
                <App />

              </div>
            </div>
          </div>
          <div className=' text-xs md:text-md rounded-2xl text-0.25rem flex bg-slate-100 dark:bg-stone-800 m-5 w-11/12 items-center text-center shadow-2xl shadow-zinc-800 mx-auto mt-10'>
            <table className='table-fixed w-full rounded-2xl dark:text-white text-center m-auto'>

              <thead className=''>
                <th className='p-5'>Parameter</th>
                <th>Value</th>

                <th>Risk level</th>
                <th>Health level</th></thead>



              {TableData.map((row, index) => {
                return (

                  <tr key={index} className={` $(color && "shadow-2xl shadow-zinc-800")`}>
                    <td className=''>{row.title}</td>
                    <td>{row.value} {row.unit}</td>

                    <td className='items-center'><span className='w-11/12 my-7 mx-5'><div className={`w-11/12 h-4.5 rounded-full bg-zinc-200 dark:bg-stone-700`}>
                      <div className="h-4.5 rounded-full bg-rose-500 dark:bg-rose-700" style={{ width: "30%" }}>30%</div>
                    </div></span></td>

                    <td className=' items-center'><span className='w-full my-7 mx-5'><div className={`w-11/12 h-4.5 rounded-full bg-zinc-200 dark:bg-stone-700`}>
                      <div className="h-4.5 rounded-full bg-emerald-500 dark:bg-teal-700" style={{ width: "90%" }}>90%</div>
                    </div></span></td>
                  </tr>
                )
              })}
            </table>
          </div>


        </div>
      </div>
    </div>
  );
}
