import React, { useContext } from "react";
import { CalendarDays, CalendarCheck2 } from "lucide-react";
import { NavLink } from "react-router-dom";

function BatchTab() {
  return (
    <div className="flex justify-start mb-10">
      <NavLink
        to="cureent"
        className={({ isActive }) =>
          `mr-3 flex justify-between align-middle leading-5  border-blue-950 border rounded-md py-[6px] px-2 ${
            isActive
              ? "bg-white text-blue-950 text-sm"
              : "bg-blue-950 text-white "
          }hover:bg-white hover:text-blue-950 hover:cursor-pointer`
        }
      >
        <CalendarDays size={12} className="mt-1 mr-1" />
        <div className="text-sm">Current</div>
      </NavLink>
      <NavLink
        to="completed"
        className={({ isActive }) =>
          `mr-3 flex justify-between align-middle leading-5  border-blue-950 border rounded-md py-[6px] px-2 ${
            isActive ? "bg-white text-blue-950" : "bg-blue-950 text-white "
          }hover:bg-white hover:text-blue-950 hover:cursor-pointer`
        }
      >
        <CalendarCheck2 size={12} className="mt-1 mr-1" />
        <div className="text-sm">Compeleted</div>
      </NavLink>
    </div>
  );
}

export default BatchTab;
