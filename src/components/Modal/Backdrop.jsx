import React, { useContext } from "react";
import UserDetail from "./UserDetail";
import UserProfileContext from "../context/UserProfileContext";

function Backdrop() {
  const { modal } = useContext(UserProfileContext);
  const { setModal } = useContext(UserProfileContext);
  function modalHandler(e) {
    e.stopPropagation();
    setModal(!modal);
  }

  return (
    <div
      className="w-full h-full absolute top-[80px] left-0 bg-slate-900 bg-opacity-70 z-10"
      onClick={(e) => modalHandler(e)}
    >
      <UserDetail />
    </div>
  );
}

export default Backdrop;
