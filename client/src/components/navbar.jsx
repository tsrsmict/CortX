import React from 'react'
import { useState } from "react";
import { FaHouseDamage, FaTablets, FaPowerOff } from "react-icons/fa";
import { BsArrowLeftShort} from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FcAddressBook, FcSettings, FcBearish, FcCalendar, FcFolder } from "react-icons/fc";

export default function Navbar() {
  const [navbar, setNavbar] = useState(true)
  const Menus = [
    {
      title: "Dashboard",
      icon: <RiDashboardFill className={`text-sky-800 dark:text-sky-300 ${!navbar && "rotate"}`} />,
      link: "../../apps/Dashboard.jsx"
    },

    {
      title: "Files",
      icon: <FcFolder />,
      link: "../../apps/Dashboard.jsx"

    },
    {
      title: "Calendar",
      icon: <FcCalendar />,
      link: "../../apps/Dashboard.jsx"
    },

    {
      title: "Recordings",
      icon: <FcBearish />,
      link: "../../apps/Dashboard.jsx"
    },

    {
      title: "Medicines",
      icon: <FaTablets />,
      link: "../../apps/Dashboard.jsx"
    },
    {
      title: "Contacts",
      icon: <FcAddressBook />,
      link: "../../apps/Dashboard.jsx"
    },


    {
      title: "Profile",
      icon: <CgProfile className="text-green-800 dark:text-green-300" />,
      link: "../../apps/Dashboard.jsx"
    },

    {
      title: "Settings",
      icon: <FcSettings />,
      link: "../../apps/Dashboard.jsx"
    },

    {
      title: "Logout",
      icon: <FaPowerOff className="text-orange-600" />,
      link: "../../apps/Dashboard.jsx"
    },

  ];
  return (
    <div className="flex font-mono">
      <div
        className={`md:p-5 md:pt-8 ${navbar ? "w-72" : "w-20"} duration-300 relative bg-gray-200 dark:bg-gray-800  shadow-lg `}
      >
        <BsArrowLeftShort
          className={`ml-60 bg-dark-purple text-white dark:bg-white dark:text-dark-purple text-3xl rounded-full absolute -right-3 top-9 cursor-pointer border ${!navbar && "rotate-180"} duration-300`}
          onClick={() => setNavbar(!navbar)}
        />
        <ul className="">
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`dark:text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-5`}>
                <span className="text-2xl block float-left">{menu.icon}</span>
                <span className={`text-base font-medium flex-1 ${!navbar && "hidden"} hover:text-black duration-200`}><a href={menu.link}>{menu.title}</a></span>
                
              </li>
            </>
          ))}
        </ul>

    </div>

    </div>
  )
}


