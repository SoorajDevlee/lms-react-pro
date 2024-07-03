import React from "react";
import UserProfileContext from "./UserProfileContext";
import { useState } from "react";

const UserProfileProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <UserProfileContext.Provider value={{ modal, setModal }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;
