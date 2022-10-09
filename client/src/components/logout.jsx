import { Link, useNavigate } from "react-router-dom";
import React, { Component } from "react";
import { FaThumbsDown } from "react-icons/fa";
import axios from "axios";
class LogoutModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  logOut = async (e) => {
    e.preventDefault();
    const logout = await axios.get("/api/users/logout");
    alert(logout.data);
    window.location.replace("/");
  };

  dashboardRedir = (e) => {
    e.preventDefault();
    window.location.replace("/dashboard");
  };
  render() {
    // const navigate = useNavigate()
    return (
      <div className="grid min-h-screen bg-sign-up-light dark:bg-sign-up-dark place-items-center">
        <div className="transition ease-in duration-200 hover:backdrop-blur-2xl border-1 border-gray-700 rounded-2xl w-11/12 p-12 bg-sign-up bg-white/[0.7] dark:bg-zinc-900/[0.8] shadow-10xl dark:shadow-zinc-800 sm:w-1/2 lg:w-5/12">
          <h1 className="text-5xl font-semibold dark:text-white text-center">
            Log Out
          </h1>
          <br />
          <button
            onClick={(e) => this.logOut(e)}
            className=" w-full py-3 mt-6 font-medium tracking-widest text-white  uppercase  shadow-lg focus:outline-none duration-300 hover:shadow-none bg-red-500 hover:bg-red-400 hover:text-gray-800"
          >
            Confirm!
          </button>
          <button
            onClick={this.dashboardRedir}
            className=" w-full py-3 mt-6 font-medium tracking-widest text-black uppercase shadow-lg  hover:invert focus:outline-none  duration-300 hover:shadow-none bg-green-400"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }
}

export default LogoutModule;
