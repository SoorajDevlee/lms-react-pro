import React, { useState } from "react";
import testModuleApi from "../API/TestModuleApi";
import { useId } from "react";

function TestModule() {
  let randomId = useId("");
  const [open, setOpen] = useState("hidden");

  function handelOpen(getTarget) {
    if (open === "hidden") {
      console.log(getTarget);
      setOpen("block");
    } else {
      setOpen("hidden");
      console.log(getTarget);
    }
  }

  return (
    <>
      <div className="w-full p-4 bg-slate-200 md:w-[80%]">
        <div className="flex justify-start flex-wrap gap-4">
          {testModuleApi.map((response) => {
            return (
              <div className="flex flex-col rounded-2xl border-b-2 border-slate-400 bg-white p-4 shadow-lg w-[45%] mb-7">
                <div className="py-2">
                  <h2 className="text-slate-400 font-bold text-xl">
                    {response.testModuleTitle}
                  </h2>
                </div>
                <div className="flex flex-col">
                  {response.testname.map((subResponse) => {
                    return (
                      <>
                        <div
                          key={randomId}
                          className="py-2 px-1 text-left text-blue-800 font-bold text-[16px] border-b"
                          onClick={(e) => handelOpen(e.target)}
                        >
                          <div className="">{subResponse.testTitle}</div>
                          <div className={`${open} duration-500`}>Hello</div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TestModule;
