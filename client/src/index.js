import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Dashboard from './apps/Dashboard'
// import SignIn from './apps/signin';
import Dashboard from './apps/Dashboard';
// import Navbar from './components/navbar';
// import Files from './apps/File_M/Files'
// import Mr from './apps/File_M/mr';
import NavBar from './components/new_navbar';
import Malendar from './apps/calendar';
// import Upload from './components/upload'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <NavBar/>
    <Malendar/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
