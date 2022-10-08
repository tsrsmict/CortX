import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugingtgtgtg!
//import ReminderMake from './reminder_make'
import NavBar from './new_navbar'
import Navbar from './navbar'
export default class DemoApp extends React.Component {
  render() {
    return (
      // <div className='h-screen w-full'>
      //   <NavBar className='sm:hidden'/>
      //   <div className='flex h-full w-full'>
      //     <Navbar className="absolute top-44 left-55 h-100vh shadow-white shadow-lg overflow-auto" style={{ position: "shadow-lg" }}/>
      //     <div className='w-full'>
      // 
      // {/* <ReminderMake/> */}
      // </div>
      <div className=" absolute overflow-auto dark:bg-dark-purple h-screen w-screen">
      <NavBar className='sm:hidden h-screen' />
      <div className="flex h-full">
        <Navbar className=" absolute top-44 left-55 h-full shadow-white shadow-lg overflow-auto" style={{ position: "shadow-lg" }} />
        <div className="dark:text-white p-1 sm:p-8 sm:mt-200px lg:p-12 w-full h-full">
        <FullCalendar
          plugins={[ dayGridPlugin ]}
         initialView="dayGridMonth"
         events={[
          { title: 'event 1', date: '2022-12-05' },
          { title: 'event 1', date: '2022-11-07' },
          { title: 'event 1', date: '2022-06-11' },
          { title: 'event 1', date: '2022-10-08' },
          { title: 'event 1', date: '2022-07-08' },
          { title: 'event 1', date: '2022-10-01' },
          { title: 'event 1', date: '2022-08-03' },
          { title: 'event 1', date: '2022-09-06' }]}
          />
        </div>
      </div>
    </div>
    )
  }
}
