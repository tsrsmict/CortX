import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css.css";
import reportWebVitals from "./reportWebVitals";
// import Dashboard from './apps/Dashboard'
// import SignIn from './apps/signin';
// import Dashboard from "./apps/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
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
import Mr from "./apps/File_M/mr";
import GettingStarted from "./GettingStarted";
// import Pr from "./apps/Files_M/pr";

const RequireAuth = () => {
  const location = useLocation();
  const [auth, setAuth] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useLayoutEffect(() => {
    const authCheck = async () => {
      setIsLoading(true);
      try {
        /* =============== HERE CALL MY API CHECK =============== */

        // await the asynchronous logic
        const auth = await axios.get("api/users/checkAuth");

        setAuth(auth.data.auth);
      } catch (error) {
        // handle any Promise rejections, errors, etc...
        setAuth(false); // or unauthorized value
      } finally {
        setIsLoading(false);
      }
    };

    authCheck();

    return () => {
      // cancel/clean up any pending/in-flight asynchronous auth checks
    };
  }, [location.pathname]); // <-- check authentication when route changes

  if (isLoading) {
    return null; // or loading spinner, etc...
  }

  return auth ? ( // or auth property if object, i.e. auth.isAuthenticated, etc...
    <Outlet />
  ) : (
    <Navigate to="/signin" replace />
  );
};

function NotFound() {
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
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<GettingStarted />}></Route>
            <Route path="/signup" element={<SignupModule />}></Route>
            <Route path="/signin" element={<SigninModule />}></Route>
            <Route path="/logout" element={<LogoutModule />}></Route>
            {/* <Route path="/files/pr" element={<Pr />}></Route> */}
            <Route element={<RequireAuth />}>
              <Route path="/tables" element={<Table />}></Route>
              <Route path="/files/mr" element={<Mr />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/files" element={<Files />}></Route>
              <Route path="/upload" element={<Upload />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/calendar" element={<MyCalendar />}></Route>
              <Route path="/remindermake" element={<ReminderMake />}></Route>
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  </React.StrictMode>
);
reportWebVitals();

//
