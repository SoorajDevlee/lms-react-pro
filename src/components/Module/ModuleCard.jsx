import ModuleCardApi from "../API/ModuleCardApi";
import { Pencil } from "lucide-react";

export default function ModuleCard() {
  return (
    <>
      <div className="p-4 bg-slate-200 w-[80%]">
        <div className="flex justify-start flex-wrap gap-4">
          {ModuleCardApi.map((response) => {
            return (
              <div className="flex flex-col rounded-2xl border-b-8 border-blue-900 bg-white p-4 shadow-lg w-[32%] mb-7">
                <div className="flex justify-between align-middle mb-3">
                  <h2 className="text-blue-700 font-bold">
                    {response.courseTitle}
                  </h2>
                  <Pencil size={15} className="mt-1" />
                </div>
                <div className="flex gap-2">
                  <div className="p-2  border-b-4 border-green-800 w-[32%] rounded-md bg-white shadow-md">
                    <p className="text-xs font-normal text-center mb-1">
                      Duration
                    </p>
                    <h3 className="text-xs font-bold text-center">
                      {response.duration}
                    </h3>
                  </div>
                  <div className="p-2  border-b-4 border-green-800 w-[32%] rounded-md bg-white shadow-md">
                    <p className="text-xs font-normal text-center mb-1">
                      Total Topic
                    </p>
                    <h3 className="text-xs font-bold text-center">
                      {response.totalTopic}
                    </h3>
                  </div>
                  <div className="p-2  border-b-4 border-green-800 w-[32%] rounded-md bg-white shadow-md">
                    <p className="text-xs font-normal text-center mb-1">Fees</p>
                    <h3 className="text-xs font-bold text-center">
                      {response.fess}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
