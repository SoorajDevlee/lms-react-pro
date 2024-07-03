import { Outlet } from "react-router-dom";
import BatchTab from "./BatchTab/BatchTab";
import SearchCom from "./Search/SearchCom";
import BatchContextProvider from "../context/BatchContext/BatchContextProvider";

export default function Batch() {
  return (
    <>
      <div className="p-4 bg-slate-200 w-[80%]">
        <BatchContextProvider>
          <SearchCom />
          <BatchTab />
          <Outlet />
        </BatchContextProvider>
      </div>
    </>
  );
}
