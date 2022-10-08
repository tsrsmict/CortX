import { Link, useNavigate } from "react-router-dom";
import React, { Component } from "react";
import { FaThumbsDown } from "react-icons/fa";
import axios from "axios";
class SigninModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
        window.location.replace("/");
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
          <h1 className="text-5xl font-semibold dark:text-white">Sign In</h1>
          <br />
          <form className="mt-6" onSubmit={(e) => this.submitHandler(e)}>
            <label
              htmlFor="email"
              className="block mt-2 text-xs font-semibold text-gray-600 dark:text-white uppercase"
            >
              E-mail/Username
            </label>
            <input
              id="email"
              type="text"
              name="usermail"
              placeholder="JohnDoe / john.doe@company.com"
              autoComplete="email"
              defaultValue={email}
              onChange={this.changeHandler}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <br />
            <br />
            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600  dark:text-white uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              autoComplete="new-password"
              defaultValue={password}
              onChange={this.changeHandler}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <br />
            <button
              type="submit"
              className=" w-full py-3 mt-6 font-medium tracking-widest text-white dark:text-black uppercase bg-black shadow-lg dark:bg-white dark:hover:text-white focus:outline-none hover:bg-gray-600 duration-300 hover:shadow-none"
            >
              Sign in
            </button>
            <a href="/signup">
              <p className="flex justify-between mt-4 text-xs text-gray-500 dark:text-white cursor-pointer hover:text-sky-900">
                Not registered?
              </p>
            </a>
            <a href="/signup">
              <p className="flex justify-between mt-4 text-xs text-gray-500 dark:text-white cursor-pointer hover:text-sky-900">
                Forgot Password?
              </p>
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default SigninModule;
