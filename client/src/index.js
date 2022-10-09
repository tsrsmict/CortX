import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Dashboard from './apps/Dashboard'
// import SignIn from './apps/signin';
// import Dashboard from "./apps/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import SigninModule from "./components/signin_m";
import SignupModule from "./components/signup_m";
import LogoutModule from "./components/logout";
import Table from "./components/table";
import Dashboard from "./apps/Dashboard";
// import Files from "./components/Files";
import MyCalendar from "./components/Calendar";
import Contacts from "./components/Contacts";
// import Recordings from "./components/Recordings";
// import Files_M from './components/Files';
// import Navbar from './components/navbar';
import Files from "./apps/File_M/Files";
// import Mr from './apps/File_M/mr';
// import NavBar from "./components/navbar";
// import Malendar from "./apps/calendar";
import Upload from "./components/upload";
import ReminderMake from "./components/reminder_make";
import axios from "axios";

async function checkAuth() {
  await axios.get("api/users/checkAuth").then((res) => {
    console.log(res.data);
    return res.data.auth;
  });
}

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "5em", color: "red" }}>
          Oops! You seem to be lost.
        </h1>
        <p style={{ fontSize: "3em", textDecorationLine: "underline" }}>
          Here are some helpful links:
        </p>

        <div
          style={{
            display: "flex",
            gap: "1em",
            justifyContent: "center",
            fontSize: "2em",
          }}
        >
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Table/> */}
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignupModule />}></Route>
          <Route path="/signin" element={<SigninModule />}></Route>
          <Route path="/logout" element={<LogoutModule />}></Route>
          <Route path="/tables" element={<Table />}></Route>
          <Route
            path="/dashboard"
            element={checkAuth() ? <Dashboard /> : <Navigate to="/signin" />}
          ></Route>
          <Route
            path="/files"
            element={checkAuth() ? <Files /> : <Navigate to="/signin" />}
          ></Route>
          <Route
            path="/upload"
            element={checkAuth() ? <Upload /> : <Navigate to="/signin" />}
          ></Route>
          <Route
            path="/contacts"
            element={checkAuth() ? <Contacts /> : <Navigate to="/signin" />}
          ></Route>
          <Route
            path="/calendar"
            element={checkAuth() ? <MyCalendar /> : <Navigate to="/signin" />}
          ></Route>
          <Route
            path="/remindermake"
            element={checkAuth() ? <ReminderMake /> : <Navigate to="/signin" />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
reportWebVitals();

//
