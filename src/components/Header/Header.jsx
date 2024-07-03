import logo from "../../assets/logo.jpg";
import { UserCheck } from "lucide-react";
import { useContext } from "react";
import UserProfileContext from "../context/UserProfileContext";

export default function Header() {
  const { modal } = useContext(UserProfileContext);
  const { setModal } = useContext(UserProfileContext);

  function modalHandler() {
    console.log(modal);
    console.log("working...");
    setModal(!modal);
  }

  return (
    <div className="flex justify-between align-middle w-full px-20 bg-white py-3 sticky top-0 z-[99] shadow-md">
      <div className="">
        <img src={logo} alt="" width="120px" />
      </div>
      <div className="p-3">
        <UserCheck
          size={30}
          className="hover:cursor-pointer"
          onClick={() => modalHandler()}
        />
      </div>
    </div>
  );
}
