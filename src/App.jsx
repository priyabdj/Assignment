import React from "react";
import SideBar from "./components/SideBar";
import ShiftViewWeekly from "./components/ShiftViewWeekly";
// import LeftsideBar from "./components/LeftsideBar";

const App = () => {
  return (
    <div className="flex h-screen bg-[#1E182A]">
      {/* ✅ Static Sidebar */}
      <div className="bg-[#1E182A]">
        <SideBar />
      </div>

      {/* ✅ Scrollable Content */}
      <div className="flex-1 bg-white overflow-y-auto my-3 mr-3 rounded-2xl ">
        {/* <LeftsideBar /> */}
        <ShiftViewWeekly/>
      </div>
    </div>
  );
};

export default App;
