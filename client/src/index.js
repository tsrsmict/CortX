import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Dashboard from './apps/Dashboard'
// import SignIn from './apps/signin';
// import Dashboard from "./apps/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SigninModule from "./components/signin_m"
import SignupModule from "./components/signup_m";
import Table from "./components/table";
import Dashboard from "./apps/Dashboard";
// import Files from "./components/Files";
import MyCalendar from "./components/Calendar";
import Contacts from "./components/Contacts";
// import Recordings from "./components/Recordings";
// import Files_M from './components/Files';
// import Navbar from './components/navbar';
import Files from './apps/File_M/Files'
// import Mr from './apps/File_M/mr';
// import NavBar from "./components/navbar";
// import Malendar from "./apps/calendar";
import Upload from './components/upload'
import ReminderMake from "./components/reminder_make";
const TableData = [{
  title: "White Blood Cell (WBC) (Leukocytes) Count",
  value: 6250,
  unit: 'cells/cu.mm',
  bri_start: 4000,
  bri_end: 10500,
  color: false
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


async function checkAuth() {
  await fetch("/api/users/checkAuth", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.auth == false) window.location.replace("/signin");
    });
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    {/* <Table/> */}
<Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignupModule/>}></Route>
          <Route path="/signin" element={<SigninModule/>}></Route>
          <Route path="/tables" element={<Table/>}></Route>
          <Route path="/" render={() => checkAuth() } element={ <Dashboard/> }></Route>
          <Route path="/files" element={<Files />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/calendar" element={<MyCalendar />}></Route>
          <Route path='/remindermake' element={<ReminderMake/>}></Route>
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
reportWebVitals()


// 