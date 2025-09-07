import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { TbChartHistogram, TbSettings2 } from "react-icons/tb";
import logo from "../assets/logo.jpg";

export default function Sidebar() {
  const items = [
    { label: "Dashboard", icon: <MdOutlineDashboard /> },
    { label: "Shifts", icon: <SlCalender /> },
    { label: "Employees", icon: <GoPeople /> },
    { label: "Reports", icon: <TbChartHistogram /> },
    { label: "Item 5", icon: <MdOutlineDashboard /> },
    { label: "Item 6", icon: <MdOutlineDashboard /> },
    { label: "Item 7", icon: <MdOutlineDashboard /> },
    { label: "Item 8", icon: <MdOutlineDashboard /> },
    { label: "Item 9", icon: <MdOutlineDashboard /> },
    { label: "Item 10", icon: <MdOutlineDashboard /> },
    { label: "Settings", icon: <TbSettings2 /> },
  ];

  return (
    <div className="h-screen w-16 sm:w-20 md:w-40 lg:w-56 bg-[#1E182A] text-[#9890A6] flex flex-col p-2 sm:p-3 lg:p-4">
      {/* Menu Items */}
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-3 rounded-md cursor-pointer 
            ${
              item.label === "Shifts"
                ? "bg-[#2A223A] text-white"
                : "hover:bg-gray-700"
            }`}
        >
          <span className="text-lg sm:text-xl">{item.icon}</span>
         
          <span className="hidden md:block text-sm font-medium">
            {item.label}
          </span>
        </div>
      ))}

      {/* Bottom Profile */}
      <div className="mt-auto flex text-white py-4 items-center gap-2 sm:gap-3">
        <img
          src={logo}
          alt="logo"
          className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] rounded-full"
        />
      
        <p className="hidden md:block text-sm font-medium">Entie LD</p>
      </div>
    </div>
  );
}
