import React from 'react'

export default function Table() {
    const TableData = [{
            title: "White Blood Cell (WBC) (Leukocytes) Count",
            value: 6250,
            unit: 'cells/cu.mm',
            bri_start: 4000,
            bri_end: 10500
        }, {
            title: 'Red blood Cell (Wbc) Erthrocytes Count',
            value: 4.94,
            unit: 'milli/cu.mm',
            bri_start: 4.7,
            bri_end: 6.0,
            color: true
        }, {
            title: 'Platelet Count',
            value: 173,
            unit: '10^3/microliter',
            bri_start: 150,
            bri_end: 450
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
            bri_end: 1000
        },
        {
            title: 'Absolute Lymphocyte Count',
            value: 500,
            unit: '/c.mm',
            bri_start: 1000,
            bri_end: 3000,
            color: true
        },        {
            title: 'Absolute Neutrophilis Count',
            value: 3313,
            unit: '/c.mm',
            bri_start: 2000,
            bri_end: 7000
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
    <div className='flex bg-gray-300 w-fit dark:bg-gray-900 '>
        <table className='table-fixed w-full'>
            <tr>
                <th>Parameter</th>
                <th>Value</th>
                <th>Unit</th>
                <th>Risk level</th>
                <th>Health level</th>
            </tr>
            <tbody>
            {TableData.map((row, index)=> {return(

                <tr key={index}> 
                    <td >{row.title}</td>
                </tr>
            )})}
            </tbody>
        </table>
    </div>
  )
}
