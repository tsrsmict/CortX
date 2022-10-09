import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function ReminderMake() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="p-24">
      <DatePicker
        selected={date}
        onChange={(date) => {setDate(date); console.log(date)}}
      />
      <input type={'date'} name="date" onChange={(date) => {setDate(date); console.log(date)}}/></div>
  );
}
