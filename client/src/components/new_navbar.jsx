// import { useState } from "react";
// import { FaHouseDamage,  FaPowerOff } from "react-icons/fa";
// // import { BsArrowLeftShort} from "react-icons/bs";
// import { RiDashboardFill } from "react-icons/ri";
// import { CgProfile } from "react-icons/cg";
// import { FcAddressBook, FcSettings, FcBearish, FcCalendar, FcFolder } from "react-icons/fc";
// export default function NavBar() {
//     const [navbar, setNavbar] = useState(false);
//     const Menus = [
//         {
//           title: "Dashboard",
//           icon: <RiDashboardFill className={`text-sky-800 dark:text-sky-300 ${!navbar && "rotate"}`} />,
//           link: "../../apps/Dashboard.jsx"
//         },
    
//         {
//           title: "Files",
//           icon: <FcFolder />,
//           link: "../../apps/Dashboard.jsx"
    
//         },
//         {
//           title: "Calendar",
//           icon: <FcCalendar />,
//           link: "../../apps/Dashboard.jsx"
//         },
    
//         {
//           title: "Recordings",
//           icon: <FcBearish />,
//           link: "../../apps/Dashboard.jsx"
//         },
//         {
//           title: "Contacts",
//           icon: <FcAddressBook />,
//           link: "../../apps/Dashboard.jsx"
//         },
    
    
//         {
//           title: "Profile",
//           icon: <CgProfile className="text-green-800 dark:text-green-300" />,
//           link: "../../apps/Dashboard.jsx"
//         },
    
//         {
//           title: "Settings",
//           icon: <FcSettings />,
//           link: "../../apps/Dashboard.jsx"
//         },
    
//         {
//           title: "Logout",
//           icon: <FaPowerOff className="text-orange-600" />,
//           link: "../../apps/Dashboard.jsx"
//         },
    
//       ];
//     return (
//         <nav className="w-full bg-white dark:bg-gray-800 shadow">
//             <div className="justify-between px-4 mx-auto">
//                 <div>
//                     <div className="flex items-center justify-between py-3 ">
//                         <a href="javascript:void(0)" className="flex">
//                             <FaHouseDamage className="text-2xl bg-orange-600 flex mx-2 my-1 rounded-4px"/>
//                             <h2 className="text-2xl flex font-bold font-mono dark:text-white">HealthcareApp</h2>
//                         </a>
//                         <div className="md:hidden">
//                             <button
//                                 className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                                 onClick={() => setNavbar(!navbar)}
//                             >
//                                 {navbar ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6"
//                                         viewBox="0 0 20 20"
//                                         fill="currentColor"
//                                     >
//                                         <path
//                                             fillRule="evenodd"
//                                             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                             clipRule="evenodd"
//                                         />
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="w-6 h-6"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth={2}
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M4 6h16M4 12h16M4 18h16"
//                                         />
//                                     </svg>
//                                 )}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div
//                         className={`flex-1 justify-self-center pb-3 mt-2  ${
//                             navbar ? "block" : "hidden"
//                         }`}
//                     >
//                         <ul className="pt-2">
//           {Menus.map((menu, index) => (
//             <>
//               <li key={index} className={`dark:text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 font-mono hover:bg-gray-100 rounded-md mt-5`}>
//                 <span className="text-2xl block float-left">{menu.icon}</span>
//                 <span className={`text-base font-medium flex-1 ${!navbar && "hidden"} hover:text-black duration-200`}><a href={menu.link}>{menu.title}</a></span>
                
//               </li>
//             </>
//           ))}
//         </ul>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }