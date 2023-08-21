import React from "react";
import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import {
  FcAddressBook,
  FcAlarmClock,
  FcSettings,
  FcBearish,
  FcCalendar,
  FcFolder,
  FcMindMap,
  FcBiohazard
} from "react-icons/fc";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const Menus = [
    {
      title: "Dashboard",
      icon: (
        <RiDashboardFill
          className={`text-sky-800 dark:text-sky-300 ${!navbar && "rotate"}`}
        />
      ),
      link: "/dashboard",
    },

    {
      title: "Files",
      icon: <FcFolder />,
      link: "/files",
    },
    {
      title: "Calendar",
      icon: <FcCalendar />,
      link: "/calendar",
    },{
      title: "Vaccination",
      icon: <FcMindMap />,
      link: "/vaccinations",
    },
    {
      title: "Contacts",
      icon: <FcAddressBook />,
      link: "/contacts",
    },
    {
      title: "Medicines",
      icon: <FcBiohazard/>,
      link: "/medicinetracker",
    },

    {
      title: "Profile",
      icon: <CgProfile className="text-green-800 dark:text-green-300" />,
      link: "/dashboard",
    },

    {
      title: "Settings",
      icon: <FcSettings />,
      link: "/dashboard",
    },

    {
      title: "Logout",
      icon: <FaPowerOff className="text-orange-600" />,
      link: "/logout",
    },
  ];
  return (
    <div className="font-mono hidden  fixed h-screen z-50 lg:block">
      <div
        className={`sm:p-5 sm:pt-8 ${
          navbar ? "w-72" : "w-20"
        } h-full duration-300 relative bg-stone-300 dark:bg-zinc-800 shadow-2xl  shadow-stone-800`}
      >
        <BsArrowLeftShort
          className={` bg-dark-purple text-white dark:bg-white dark:text-dark-purple text-3xl rounded-full cursor-pointer border ${
            navbar ? "ml-64" : "rotate-180 ml-9"
          } duration-300`}
          onClick={() => setNavbar(!navbar)}
        />
        <div className="absolute">
          {/* <div><img src={require("../assets/cortex_logo-removebg.png")} className="fixed bg-gray-200 dark:hidden"></img></div>
      <div><img src={require("../assets/image-2.png")} className="fixed bg-gray-800 hidden dark:block"></img></div> */}
        </div>
        <div>
          <ul className="fixed">
            {Menus.map((menu, index) => (
              <a href={menu.link}>
                <li
                  key={index}
                  className={`md:mb-2 mx-2 dark:text-white text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-stone-600/[0.5] hover:translate-x-2 rounded-sm`}
                >
                  <span className="text-2xl block float-left">{menu.icon}</span>
                  <span
                    className={`text-base font-medium flex-1 ${
                      !navbar && "hidden"
                    } hover:text-black duration-200`}
                  >
                    {menu.title}
                  </span>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
