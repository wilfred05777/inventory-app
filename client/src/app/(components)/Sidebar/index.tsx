"use client";

import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
   return (
      <div>
         {/* TOP Logo */}
         <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
            <div className='logo'>Logo</div>
            <h1 className='font-extrabold text-2xl'>Invetory Logo</h1>

            <button
               className='md:hidden px-3 py-3 border-gray-100 rounded-full hover:bg-blue-100'
               onClick={() => {}}
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
