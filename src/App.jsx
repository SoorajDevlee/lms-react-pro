import "./App.css";
import { Suspense, useState, lazy } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Loader from "./components/Loader/Loader";
// import Batch from "./components/Batch/Batch";
import ModuleCard from "./components/Module/ModuleCard";
import TestModule from "./components/TestModule/TestModule";
const Batch = lazy(() => import("./components/Batch/Batch"));
import Current from "./components/Batch/AllBatch/Current";
import Completed from "./components/Batch/AllBatch/Completed";
import UserModal from "./components/Modal/UserModal";
import UserProfileProvider from "./components/context/UserProfileProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProfileProvider>
          <Header />
          <UserModal />
        </UserProfileProvider>

        <div className="flex flex-col w-full gap-2 md:flex md:flex-row md:justify-between px-6 py-6 bg-slate-100">
          <Sidebar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="" element={<ModuleCard />}></Route>
              <Route path="module" element={<ModuleCard />}></Route>
              <Route path="batch" element={<Batch />}>
                <Route index="cureent" element={<Current />}></Route>
                <Route path="cureent" element={<Current />}></Route>
                <Route path="completed" element={<Completed />}></Route>
              </Route>
              <Route path="text-module" element={<TestModule />}></Route>
            </Routes>
          </Suspense>
        </div>
        {/* <Home /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
