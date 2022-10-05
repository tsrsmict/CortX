import React from 'react'
// import Navbar from './navbar'
// import {RiDashboardFill} from 'react'
// import Table from './table'
function Contacts() {
    const TableData = [{
        title: "John Doe",
        value: 12345678,
        unit: 'cells/cu.mm',
        color: false
    }, {
        title: "John Doe",
        value: 12345678,
        unit: 'cells/cu.mm',
        color: false
    }, {
        title: "John Doe",
        value: 12345678,
        unit: 'cells/cu.mm',
        color: false
    }]
  return (
    <div className='flex bg-gray-300 w-11/12 items-center text-center rounded-2xl shadow-2xl dark:bg-zinc-600 mx-auto mt-10'>
            <table className='table-fixed w-full rounded-2xl dark:text-white text-center m-auto'>

                <thead className=' bg-zinc-500 dark:bg-zinc-800'>
                    <th className='p-5'>Parameter</th>
                    <th>Value</th>
                    <th>Risk level</th>
                    <th>Health level</th></thead>



                {TableData.map((row, index) => {
                    return (

                        <tr key={index} className={`bg-gray-200 dark:bg-zinc-600 m-5 ${row.color && "bg-zinc-400 dark:bg-zinc-800"}`}>
                            <td className=''>{row.title}</td>
                            <td>{row.value} {row.unit}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
  )
}

export default Contacts