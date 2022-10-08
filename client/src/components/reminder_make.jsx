import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function ReminderMake () {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="p-24">
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
    </div>
  );
};