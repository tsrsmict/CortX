import { useState } from "react";
import { FaHouseDamage, FaPowerOff } from "react-icons/fa";
// import { BsArrowLeftShort} from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import {
  FcAddressBook,
  FcSettings,
  FcBearish,
  FcCalendar,
  FcFolder,
} from "react-icons/fc";
//import { IconName } from "react-icons/im";
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const Menus = [
    {
      title: "Dashboard",
      icon: (
        <RiDashboardFill
          className={`text-sky-800 dark:text-sky-300 ${!navbar && "rotate"}`}
        />
      ),
      link: "/",
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
    },
    {
      title: "Contacts",
      icon: <FcAddressBook />,
      link: ".contacts",
    },

    {
      title: "Profile",
      icon: <CgProfile className="text-green-800 dark:text-green-300" />,
      link: "/",
    },

    {
      title: "Settings",
      icon: <FcSettings />,
      link: "/",
    },

    {
      title: "Logout",
      icon: <FaPowerOff className="text-orange-600" />,
      link: "/signin",
    },
  ];
  return (
    <nav className="fixed z-10 block lg:hidden w-full bg-white dark:bg-stone-800 shadow">
      <div className="justify-between px-4 mx-auto">
        <div>
          <div className="flex items-center justify-between py-3 ">
            <a href="/" className="flex">
              <FaHouseDamage className="text-2xl bg-orange-600 flex mx-2 my-1 rounded-4px" />
              <h2 className="text-2xl flex font-bold font-mono dark:text-white">
                HealthcareApp
              </h2>
            </a>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-sm outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {!navbar ? (
                  <>
                    <div className="w-9 h-0.5 bg-black dark:bg-white dark:text-white text-xs my-2 duration-300"></div>
                    <div className="w-9 h-0.5 bg-black dark:bg-white dark:text-white text-xs my-2 duration-300"></div>
                    <div className="w-9 h-0.5 bg-black dark:bg-white text-white text-xs my-2 duration-300"></div>
                  </>
                ) : (
                  <>
                    <div className="w-9 h-0.5 bg-black dark:bg-white dark:text-white text-xs rotate-45 duration-300"></div>
                    <div className="w-9 h-0.5 bg-black dark:bg-white dark:text-white text-xs -rotate-45 duration-300"></div>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-2  ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="pr-12">
              {Menus.map((menu, index) => (
                <>
                  <li
                    key={index}
                    className={`dark:text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 font-mono hover:bg-stone-200 dark:hover:bg-stone-600 hover:translate-x-5 transition-transform transform-cpu duration-100 rounded-sm mt-5`}
                  >
                    <span
                      className={`text-2xl block float-left ${
                        !navbar && "hidden"
                      }`}
                    >
                      {menu.icon}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 ${
                        !navbar && "hidden"
                      } duration-200`}
                    >
                      <a href={menu.link}>{menu.title}</a>
                    </span>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
