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
  submitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state);
    await axios
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
      /*
      <div className="grid min-h-screen bg-sign-up-light dark:bg-sign-up-dark place-items-center">
        <div className="transition ease-in duration-200 hover:backdrop-blur-2xl border-1 border-gray-700 rounded-2xl w-11/12 p-12 bg-sign-up bg-white/[0.7] dark:bg-zinc-900/[0.8] shadow-10xl dark:shadow-zinc-800 sm:w-1/2 lg:w-5/12">
          <h1 className="text-5xl font-semibold dark:text-white">Sign In</h1>
          <br />
          <form className="mt-6" onSubmit={(e) => this.submitHandler(e)}>
            <label
              htmlFor="email"
              className="block mt-2 text-xs font-semibold text-gray-600 dark:text-white uppercase"
            >
              E-mail
            </label>
            <input
              id="email"
              type="text"
              name="usermail"
              placeholder="example@email.com"
              autoComplete="email"
              defaultValue={email}
              onChange={this.changeHandler}
              className="rounded-md block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
              placeholder="yoursupersecretpassword"
              autoComplete="new-password"
              defaultValue={password}
              onChange={this.changeHandler}
              className="block w-full rounded-md p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <br />
            <button
              type="submit"
              className=" w-full py-3 mt-6 font-medium tracking-widest text-white dark:text-black uppercase bg-black shadow-lg dark:bg-white dark:hover:text-white focus:outline-none hover:bg-gray-600 duration-300 hover:shadow-none"
            >
              Sign in
            </button>
            <div className="flex justify-between">
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
            </div>
          </form>
        </div>
      </div>
      */
      <section className="w-full h-screen bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="relative border-r w-full h-screen bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
            <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <h1 className="mb-2 font-medium text-gray-700 uppercase">CortX</h1>
                  <h2 className="text-5xl font-bold text-gray-900 l">Tracking Your Health Just Became Easier</h2>
                </div>
                <h3 className=" text-gray-700">We've created a simple solution to keep a track of your health efficiently.</h3>

              </div>
            </div>
          </div>

          <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
            <form  onSubmit={(e) => {this.submitHandler(e)}} className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
              <h4 className="w-full text-black text-3xl font-bold">Login</h4>
              <h1 className="text-lg text-gray-500">Don't have an account? <a href="/signup" className="text-blue-300 font-bold underline" d>Sign Up</a></h1>
              <div className="relative w-full mt-10 space-y-8">
                <div className="relative">
                  <label className="font-medium text-gray-900">Email</label>
                  <input id="email"
              type="text"
              name="usermail"
              placeholder="example@email.com"
              autoComplete="email"
              defaultValue={email}
              onChange={this.changeHandler}   className="block text-black w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 border border-1 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg"  />
                </div>
                <div className="relative">
                  <label className="font-medium text-gray-900">Password</label>
                  <input id="password"
              type="password"
              name="password"
              placeholder="yoursupersecretpassword"
              autoComplete="new-password"
              defaultValue={password}
              onChange={this.changeHandler}  className="block text-black w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 border border-1 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" />
                </div>
                <div className="relative">
                  <button className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-[#2FA561] rounded-lg " data-primary="blue-600" data-rounded="rounded-lg">Log In</button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default SigninModule;
