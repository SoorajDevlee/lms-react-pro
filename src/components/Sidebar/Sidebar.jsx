import { Component } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex w-full gap-3 justify-center border-r-4 border-slate-400 md:flex-col md:h-screen md:w-1/5 md:gap-0 md:justify-start sticky">
      <NavLink
        to="/module"
        className={({ isActive }) =>
          `flex gap-1 mb-1 p-4 duration-300 rounded ${
            isActive ? "bg-blue-950 text-white" : "bg-white text-black"
          } hover:bg-blue-950 hover:text-white`
        }
      >
        <div className="flex gap-1 mb-1">
          <Component size={18} /> <span className="text-sm ">Module</span>
        </div>
      </NavLink>
      <NavLink
        to="/batch"
        className={({ isActive }) =>
          `flex gap-1 mb-1 p-4 duration-300 rounded ${
            isActive ? "bg-blue-950 text-white" : "bg-white text-black"
          } hover:bg-blue-950 hover:text-white`
        }
      >
        <div className="flex gap-1 mb-1">
          <Component size={18} /> <span className="text-sm ">Batch</span>
        </div>
      </NavLink>
      <NavLink
        to="/text-module"
        className={({ isActive }) =>
          `flex gap-1 mb-1 p-4 duration-300 rounded ${
            isActive ? "bg-blue-950 text-white" : "bg-white text-black"
          } hover:bg-blue-950 hover:text-white`
        }
      >
        <div className="flex gap-1 mb-1">
          <Component size={18} /> <span className="text-sm ">Test Module</span>
        </div>
      </NavLink>
      <NavLink
        to="/resources"
        className={({ isActive }) =>
          `flex gap-1 mb-1 p-4 duration-300 rounded ${
            isActive ? "bg-blue-950 text-white" : "bg-white text-black"
          } hover:bg-blue-950 hover:text-white`
        }
      >
        <div className="flex gap-1 mb-1">
          <Component size={18} /> <span className="text-sm ">Module</span>
        </div>
      </NavLink>
    </div>
  );
}
