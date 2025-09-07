import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RxTimer } from "react-icons/rx";
import { GoPeople } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { PiCurrencyDollarSimple } from "react-icons/pi";
import { BsPersonCheck } from "react-icons/bs";
import { TiFilter } from "react-icons/ti";
import { FaRegMoon, FaSun } from "react-icons/fa";
import "../index.css";

const toMinutes = (time) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

const getShiftStyle = (start, end) => {
  const startMins = toMinutes(start);
  const endMins = toMinutes(end);
  const dayStart = 8 * 60; // start at 08:00
  const top = ((startMins - dayStart) / 60) * 64;
  const height = ((endMins - startMins) / 60) * 64;
  return { top: `${top}px`, height: `${height}px` };
};

export default function ShiftViewWeekly() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const days = [
    { day: "MON", date: 22 },
    { day: "TUE", date: 23 },
    { day: "WED", date: 24 },
    { day: "THU", date: 25 },
    { day: "FRI", date: 26 },
    { day: "SAT", date: 27 },
    { day: "SUN", date: 28 },
  ];

  const shifts = [
    {
      day: 22,
      start: "09:00",
      end: "13:00",
      duration: "4h",
      pay: "$880",
      confirmed: "8/8 confirmed",
      avatars: [
        "/avatars/A1.png",
        "/avatars/A5.png",
        "/avatars/A8.png",
        "/avatars/A1.png",
      ],
      borderColor: "border-teal-400",
    },
    {
      day: 23,
      start: "08:00",
      end: "11:30",
      duration: "3.5h",
      pay: "$880",
      confirmed: "8/8 confirmed",
      avatars: ["/avatars/A1.png", "/avatars/A5.png", "/avatars/A8.png"],
      borderColor: "border-teal-400",
    },
    {
      day: 24,
      start: "08:30",
      end: "17:30",
      duration: "9h",
      pay: "$880",
      confirmed: "",
      avatars: [],
      borderColor: "border-[#66CCCC]",
      unassigned: true,
    },
    {
      day: 27,
      start: "09:00",
      end: "12:00",
      duration: "12.5h",
      pay: "$880",
      confirmed: "8/8 confirmed",
      avatars: ["/avatars/A1.png", "/avatars/A5.png", "/avatars/A8.png"],
      borderColor: "border-teal-400",
    },
    {
      day: 25,
      start: "12:30",
      end: "18:00",
      duration: "5.5h",
      pay: "$880",
      confirmed: "",
      avatars: [],
      borderColor: "border-[#9890A6]",
      unassigned: true,
    },
  ];

  const times = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  return (
    <div className="flex flex-col h-screen bg-[#FAF8FC] dark:bg-[#2F283B] dark:shadow-xl transition-colors duration-300">
      {/* Top Filter Bar with Theme Toggle */}
      <div className="bg-white dark:bg-[#2F283B] border-b px-4 py-2 flex items-center gap-2 ">
        {/* existing buttons */}
        <button className="px-3 py-1.5 rounded-md bg-white border border-[#EDE9F5] flex items-center gap-2 dark:bg-[#2F283B] dark:text-gray-200">
          <RxTimer /> Shift view
        </button>
        <button className="px-3 py-1.5 rounded-md bg-[#EDE9F5] flex items-center gap-2 dark:bg-[#110B1D] dark:text-gray-200">
          <GoPeople /> Staff view
        </button>
        <button className="px-3 py-1.5 rounded-md bg-[#EDE9F5] flex items-center gap-2 dark:bg-[#110B1D] dark:text-gray-200">
          <TiFilter /> Status All
        </button>
        <button className="px-3 py-1.5 rounded-md bg-[#EDE9F5] flex items-center gap-2 dark:bg-[#110B1D] dark:text-gray-200">
          <TiFilter /> Team All
        </button>
        <button className="px-3 py-1.5 rounded-md hover:text-blue-500 text-sm font-semibold underline text-[#32848F] dark:text-blue-300">
          + Advanced filter
        </button>
        <div className="ml-auto flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md bg-[#EDE9F5] dark:bg-gray-600 dark:text-gray-200"
          >
            {darkMode ? <FaSun /> : <FaRegMoon />}
          </button>
          <button className="px-3 py-1.5 rounded-md bg-white border border-[#EDE9F5] dark:bg-[#2F283B] dark:text-gray-200">
            Week
          </button>
          <button className="px-3 py-1.5 rounded-md bg-[#EDE9F5] dark:bg-[#110B1D] dark:text-gray-200">
            Month
          </button>
          <button className="px-3 py-1.5 rounded-md bg-[#EDE9F5] flex items-center gap-1 dark:bg-[#110B1D] dark:text-gray-200">
            Current Week <FiChevronDown />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto scrollbar-hide">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-8 border-t text-sm">
            <div className="bg-[#EDE9F5] px-3 text-xs text-gray-500 dark:bg-gray-600 dark:text-gray-300">
              <div className="font-semibold mb-1">W35</div>
              <div className="font-bold text-lg text-black dark:text-white">
                $16.5k
              </div>
              <div className="text-[#32848F] underline cursor-pointer text-[11px] dark:text-blue-300">
                Weekly Budget
              </div>
            </div>
            {days.map((d, i) => (
              <div
                key={i}
                className="border-r bg-[#FAF8FC] p-3 text-gray-600 dark:bg-[#2F283B] dark:text-gray-300"
              >
                <div className="text-gray-400 text-xs">{d.day}</div>
                <div className="font-bold text-lg">{d.date}</div>
                <div className="text-xs text-gray-400">12h - $1.2k</div>
              </div>
            ))}
          </div>
          {/* body grid */}
          <div className="grid grid-cols-8 relative">
            <div className="text-xs text-gray-400 dark:text-gray-500">
              {times.map((t) => (
                <div key={t} className="h-16 flex justify-end pr-2">
                  {t}
                </div>
              ))}
            </div>
            {days.map((d, i) => (
              <div
                key={i}
                className="border-r relative min-w-[100px] border-gray-200 dark:border-gray-700"
              >
                {times.map((t) => (
                  <div
                    key={t}
                    className="h-16 border-t border-gray-200 dark:border-gray-700"
                  ></div>
                ))}
                {shifts
                  .filter((s) => s.day === d.date)
                  .map((s, j) => (
                    <div
                      key={j}
                      className={`absolute left-1 right-1 bg-white rounded-lg shadow-md border-t-4 flex flex-col gap-1 ${s.borderColor} px-2 py-3 text-sm dark:bg-[#110B1D]`}
                      style={getShiftStyle(s.start, s.end)}
                    >
                      {/* shift content unchanged */}
                      <div className="flex flex-col gap-2">
                        <div className="font-bold text-gray-700 dark:text-gray-200 text-sm">
                          {s.start} - {s.end}
                        </div>
                        <div className="font-bold flex flex-col gap-2 text-xs whitespace-nowrap">
                          <span className="flex items-center gap-1">
                            <IoTimerOutline /> {s.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <PiCurrencyDollarSimple /> {s.pay}
                          </span>
                        </div>

                        {s.unassigned ? (
                          <button className="mt-2 pr-3 py-0.5 bg-[#EDE9F5] rounded-2xl text-gray-600 text-xs whitespace-nowrap dark:bg-gray-600 dark:text-gray-200">
                            + Assign
                          </button>
                        ) : (
                          <>
                          
                            <div className="flex mt-2">
                              {s.avatars.map((a, idx) => (
                                <img
                                  key={idx}
                                  src={a}
                                  alt="avatar"
                                  className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-700 -ml-2 first:ml-0"
                                />
                              ))}

                              {s.avatars.length > 3 && (
                                <div className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 text-xs flex items-center justify-center -ml-2">
                                  +{s.avatars.length - 3}
                                </div>
                              )}
                            </div>

                            <div className="flex items-center mt-1">
                              <span className="text-[11px] text-gray-500 dark:text-gray-300 flex items-center gap-1">
                                <BsPersonCheck /> {s.confirmed}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="fixed bottom-6 right-6 bg-teal-400 text-white w-12 h-12 rounded-full shadow-lg text-2xl flex items-center justify-center dark:bg-teal-600">
        +
      </button>
    </div>
  );
}
