import React from "react";
import { GraduationCap, Users, User } from "lucide-react";
import { useContext } from "react";
import BatchContext from "../../context/BatchContext/BatchContext";
function Current() {
  let { input } = useContext(BatchContext);

  return (
    <>
      <div className="flex justify-start flex-wrap gap-4">
        {input.map((response) => {
          return (
            <div className="flex flex-col rounded-2xl border-t-8 border-blue-900 bg-white p-4 shadow-md w-[32%] ">
              <div className="flex justify-between align-middle leading-5 mb-2">
                <h3 className="text-sm font-bold text-blue-700">
                  {response.batchTitle}
                </h3>
                <span className="flex align-middle text-xs">
                  {response.studentCount > 1 ? (
                    <Users size={12} className="mr-2 mt-[2px]" />
                  ) : (
                    <User size={12} className="mr-2 mt-[2px]" />
                  )}

                  {response.studentCount}
                </span>
              </div>
              <div className="flex align-middle py-2">
                <GraduationCap size={18} className="mr-2" />{" "}
                <span className="text-sm text-black font-bold">
                  {response.counseTitle}
                </span>
              </div>
              <div className="flex align-middle py-2">
                <GraduationCap size={18} className="mr-2" />{" "}
                <span className="text-sm text-black font-bold">
                  {response.tutor}
                </span>
              </div>
              <div className="flex align-middle py-2">
                <GraduationCap size={18} className="mr-2" />{" "}
                <span className="text-sm text-black font-bold">
                  {response.duration}
                </span>
              </div>
              <div className="flex align-middle py-2 mb-2">
                <GraduationCap size={18} className="mr-2" />{" "}
                <span className="text-sm text-black font-bold">
                  {response.batchTime}
                </span>
              </div>
              <div className="flex align-middle pt-4 border-blue-950 border-t border-dashed">
                <button className="bg-blue-950 text-sm text-white border-blue-950 border rounded-md py-1 px-2 duration-500 hover:bg-white hover:text-blue-950">
                  View More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Current;
