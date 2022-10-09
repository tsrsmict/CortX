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
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/api/users/login", {
        usermail: this.state.usermail,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        console.log("jwtToken: ", response.data.token);
        window.location.replace("/dashboard");
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };
  render() {
    // const navigate = useNavigate()
    const { email, password } = this.state;
    return (
      <div className="grid min-h-screen bg-sign-up-light dark:bg-sign-up-dark place-items-center">
        <div className="transition ease-in duration-200 hover:backdrop-blur-2xl border-1 border-gray-700 rounded-2xl w-11/12 p-12 bg-sign-up bg-white/[0.7] dark:bg-zinc-900/[0.8] shadow-10xl dark:shadow-zinc-800 sm:w-1/2 lg:w-5/12">
          <h1 className="text-5xl font-semibold dark:text-white">Log Out</h1>
          <br />
          <button
            type="submit"
            className=" w-full py-3 mt-6 font-medium tracking-widest text-white dark:text-black uppercase bg-black shadow-lg dark:bg-white dark:hover:text-white focus:outline-none hover:bg-gray-600 duration-300 hover:shadow-none"
          >
            Confirm!
          </button>
        </div>
      </div>
    );
  }
}

export default LogoutModule;
