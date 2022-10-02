import React from 'react'
import { useState } from "react";
import { FaHouseDamage,  FaTablets, FaPowerOff} from "react-icons/fa";
import { BsArrowLeftShort,  BsSearch} from "react-icons/bs";
import { RiDashboardFill} from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FcAddressBook, FcSettings, FcBearish, FcCalendar, FcFolder} from "react-icons/fc";

export default function Navbar(){
  const [open, setOpen] = useState(true);
  const Menus = [
    {title: "Dashboard",
    icon: <RiDashboardFill className={`text-sky-800 dark:text-sky-300 ${!open && "rotate"}`}/>},

    {title: "Files", 
    icon: <FcFolder/>,
    spacing: true},
    {title: "Calendar", 
    icon: <FcCalendar/>
  },

    {title: "Recordings",
    icon: <FcBearish/>
  },

  {title: "Medicines",
  icon: <FaTablets/>
},
{title: "Contacts",
  icon: <FcAddressBook/>
},


      {title: "Profile", 
      icon: <CgProfile className="text-green-800 dark:text-green-300"/>,
      spacing: true},

      {title: "Settings",
      icon: <FcSettings/>
    },

      {title: "Logout",
      icon: <FaPowerOff className="text-orange-600"/>
    },

  ];
  return (
    <div className="flex font-mono">
      <div
        className={`h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative bg-gray-200 dark:bg-gray-800 dark:hover:bg-gradient-to-r from-black to-gray-800  `}
      >
        <BsArrowLeftShort
          className={`ml-60 bg-dark-purple text-white dark:bg-white dark:text-dark-purple text-3xl rounded-full absolute -right-3 top-9 cursor-pointer border ${!open && "rotate-180"} duration-500`}
          onClick={() => setOpen(!open)}
        />
        <div class="inline-flex">
          <FaHouseDamage className="bg-orange-red text-4xl rounded  block float-left cursor-pointer mr-5"/>
          <h1 className={`dark:text-white origin-left font-medium text-3xl ${!open && "scale-0"} duration-300`}>HealthCare</h1>
        </div>
        <div className={`flex item-center rounded-md bg-gray-300 dark:bg-light-white mt-6 py-2 ${!open ? "px-4" : "pl-2"}`}>
          <BsSearch className="dark:text-white text-2xl block cursor-pointer"/>
          <br></br>
          <input type="search" placeholder="search" className={`text-base ml-2 bg-transparent dark:text-white focus:outline-none w-50px ${!open && "hidden"}`}></input>
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
            <li key={index} className={`dark:text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-36" : "mt-9"}`}>
              <span className="text-2xl block float-left">{menu.icon}</span>
              <span className={`text-base font-medium flex-1 ${!open && "hidden"} duration-200`}>{menu.title}</span>

            </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}
