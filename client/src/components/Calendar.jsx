import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugingtgtgtg!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FcCalendar } from "react-icons/fc";
import Loader from "../loader/Loader";
//import ReminderMake from './reminder_make'
import NavBar from "./new_navbar";
import Navbar from "./navbar";
import Popup from "reactjs-popup";
import axios from "axios";
export default function CalendarApp() {
  const [events, setEvents] = React.useState();
  React.useEffect(() => {
    fetch("/api/reminders/getAllUserReminders")
      .then((res) => res.json())
      .then((data) => {
        let events_ = [];
        data.forEach((el) => {
          events_.push({
            title: el.reminderName,
            start: el.datetime,
            end: el.datetime,
            type: el.type,
            allDay: true,
          });
        });
        setEvents(events_);
        console.log(events);
      });
  });

  if (events === undefined) {
    return <Loader />;
  } else {
    if (events?.length === 0) console.log("No files.");
  }

  return (
    <div className="absolute overflow-auto dark:bg-dark-purple h-screen w-screen">
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
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              start: "title",
              center: "addNewReminder",
              end: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            customButtons={{
              addNewReminder: {
                text: "add new",
                click: (e, el) => {
                  window.location.replace("/calendar/add");
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
