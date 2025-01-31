"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
   const dispatch = useAppDispatch();
   const isSidebarCollapsed = useAppSelector(
      (state) => state.global.isSidebarCollapsed
   );

   const toggleSidebar = () => {
      dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
   };

   const sidebarClassNames = `fixed flex flex-col ${
      isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
   } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

   return (
      <div className={sidebarClassNames}>
         {/* TOP Logo */}
         <div
            className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
               isSidebarCollapsed ? "px-5" : "px-8"
            }`}
         >
            <div className='logo'>Logo</div>
            <h1
               className={`${
                  isSidebarCollapsed ? "hidden" : "block"
               }font-extrabold text-2xl`}
            >
               RBJMAZ
            </h1>

            <button
               className='md:hidden px-3 py-3 border-gray-100 rounded-full hover:bg-blue-100'
               // onClick={() => {}}
               onClick={toggleSidebar}
            >
               <Menu className='w-4 h-4' />
            </button>
         </div>
         {/* LINKS */}
         <div className='flex-grow mt-8'>{/* links here */}</div>
         <div className='footer'>
            <p>&copy; 2024 Inventory</p>
         </div>
      </div>
   );
};

export default Sidebar;
