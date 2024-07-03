import React, { useContext } from "react";
import { SquareX } from "lucide-react";
import UserProfileContext from "../context/UserProfileContext";

function UserDetail() {
  const { modal } = useContext(UserProfileContext);
  const { setModal } = useContext(UserProfileContext);
  function modalHandler() {
    setModal(!modal);
  }

  function propogationHandler(e) {
    e.stopPropagation();
  }

  return (
    <div className="relative">
      <div
        className="flex relative flex-col bg-white m-auto w-1/3 p-9 mt-7"
        onClick={(e) => propogationHandler(e)}
      >
        <div className="absolute top-3 right-3">
          <SquareX
            size={22}
            onClick={modalHandler}
            className="hover:cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-black font-bold text-2xl">
            User Name : Sooraj Devlee
          </h1>
        </div>
        <div>
          <h1 className="text-black font-bold text-2xl">
            Profile : Frontend Developer
          </h1>
        </div>
        <div>
          <h1 className="text-black font-bold text-2xl">
            Technology : Javascript, React
          </h1>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
