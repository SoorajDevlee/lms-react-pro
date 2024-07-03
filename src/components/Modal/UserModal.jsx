import React from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import { useContext } from "react";
import UserProfileContext from "../context/UserProfileContext";

function UserModal() {
  const { modal } = useContext(UserProfileContext);
  return (
    <div id="backdrop">
      {modal && createPortal(<Backdrop />, document.getElementById("backdrop"))}
    </div>
  );
}

export default UserModal;
