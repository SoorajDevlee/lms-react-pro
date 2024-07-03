import React, { useState } from "react";
import BatchContext from "./BatchContext";
import batchApi from "../../API/Batch";

// import { createContext } from "react";

// const BatchContext = createContext();

// // export default BatchContext;

const BatchContextProvider = ({ children }) => {
  let [input, setInput] = useState(batchApi);

  return (
    <BatchContext.Provider value={{ input, setInput, batchApi }}>
      {children}
    </BatchContext.Provider>
  );
};

export default BatchContextProvider;
