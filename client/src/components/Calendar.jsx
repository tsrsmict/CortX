import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugingtgtgtg!
import ReminderMake from './reminder_make'
export default class DemoApp extends React.Component {
  render() {
    return (
      <>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
      <ReminderMake/>
      </>
    )
  }
}
