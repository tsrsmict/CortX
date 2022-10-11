import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css.css";
import reportWebVitals from "./reportWebVitals";
// import Dashboard from './apps/Dashboard'
// import SignIn from './apps/signin';
// import Dashboard from "./apps/Dashboard";
import Medicinetracker from "./components/medicinetracker";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Vaccination from "./apps/Vaccination";
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
import GettingStarted from "./GettingStarted";
import AddContact from "./components/AddContact";
import FileDisplay from "./apps/File_M/FileDisplay";
import Loader from "./loader/Loader";
import MedicineSearch from "./apps/MedicineSearch";
import CortoComp from "./components/CortocComp";
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
        const authed = await axios.get("/api/users/checkAuth");

        setAuth(authed.data.auth);
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
    return <Loader />;
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
            <Route element={<RequireAuth />}>
              <Route path="/tables" element={<Table />}></Route>
              <Route path="/vaccinations" element={<Vaccination />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="medicinetracker" element={<Medicinetracker />}></Route>
              <Route path="/files" element={<Files />}></Route>
              <Route
                path="/files/medicalRecords"
                element={
                  <FileDisplay
                    fetchParam="medicalRecords"
                    name="Medical Records"
                  />
                }
              ></Route>
              <Route
                path="/files/prescriptions"
                element={
                  <FileDisplay
                    fetchParam="prescriptions"
                    name="Prescriptions"
                  />
                }
              ></Route>
              <Route
                path="/files/bloodTestsAndReports"
                element={
                  <FileDisplay
                    fetchParam="bloodTestsAndReports"
                    name="Blood Tests and Reports"
                  />
                }
              ></Route>
              <Route
                path="/files/bodyScansAndXrays"
                element={
                  <FileDisplay
                    fetchParam="bodyScansAndXrays"
                    name="Body Scans and X-Rays"
                  />
                }
              ></Route>
              <Route
                path="/files/vaccinations"
                element={
                  <FileDisplay fetchParam="vaccinations" name="Vaccinations" />
                }
              ></Route>
              <Route
                path="/files/insurance"
                element={
                  <FileDisplay fetchParam="insurance" name="Insurance" />
                }
              ></Route>
              <Route path="/upload" element={<Upload />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/add-contact" element={<AddContact />}></Route>
              <Route path="/calendar" element={<MyCalendar />}></Route>
              <Route
                path="/dashboard/CortoComp"
                element={<CortoComp />}
              ></Route>
              <Route path="/remindermake" element={<ReminderMake />}></Route>
              <Route
                path="/search/medicine"
                element={<MedicineSearch />}
              ></Route>
            </Route>
            <Route path="/app/loader" element={<Loader />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  </React.StrictMode>
);
reportWebVitals();

//
