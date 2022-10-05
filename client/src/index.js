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
// import Navbar from './components/navbar';
// import Files from './apps/File_M/Files'
// import Mr from './apps/File_M/mr';
// import NavBar from "./components/new_navbar";
// import Malendar from "./apps/calendar";
// import Upload from './components/upload'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignupModule/>}>
          </Route>
          <Route path="/signin" element={<SigninModule/>}>
          </Route>
          <Route path="/tables" element={<Table/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
reportWebVitals();