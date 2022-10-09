import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugingtgtgtg!
import { FcCalendar } from "react-icons/fc";
//import ReminderMake from './reminder_make'
import NavBar from "./new_navbar";
import Navbar from "./navbar";
export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { name, date } = this.state;
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
        <NavBar className="sm:hidden h-screen" />
        <div className="h-full">
          <Navbar
            className=" absolute top-44 left-55 h-full shadow-white shadow-lg overflow-auto"
            style={{ position: "shadow-lg" }}
          />
          <div className="mt-12 p-24 lg:mt-0 dark:text-white sm:p-8 sm:mt-200px lg:p-24 w-full h-full">
            <h1 className="text-5xl font-mono flex font-bold">
              <span className="mt-3">
                <FcCalendar />
              </span>
              Calendar
            </h1>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={this.ReminderData}
            />
          </div>
        </div>
        <div>
          <form
            onSubmit={this.submitHandler}
            className="text-white p-5 absolute bottom-0 "
          >
            <label htmlfor="name">Name of Appointment</label>
            <br></br>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
              className="text-black bg-gray-300"
            />
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.changeHandler}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
