import React from "react";
import { Bold, Search } from "lucide-react";
import { useContext } from "react";
import BatchContext from "../../context/BatchContext/BatchContext";

import { useRef } from "react";

function SearchCom() {
  let inputVal = useRef();

  let { input } = useContext(BatchContext);
  let { setInput } = useContext(BatchContext);

  function searchInputHandler(e) {
    let searchVal = inputVal.current.value.toLowerCase();
    let filterItem = input.filter((item) => {
      let batchApiKeyArr = Object.keys(item);
      for (let i = 0; i < batchApiKeyArr.length; i++) {
        let batchApiKey = batchApiKeyArr[i];
        if (String(item[batchApiKey]).toLocaleLowerCase().includes(searchVal)) {
          return batchApiKey;
        }
      }
    });
    console.log(filterItem);
    setInput(filterItem);
  }

  return (
    <div className="flex  justify-start mb-10 mt-4">
      <form action="" className="bg-white px-2 rounded-md">
        <input
          type="text"
          className="bg-transparent focus:outline-none py-1"
          ref={inputVal}
          onChange={searchInputHandler}
        />
        <button>
          <Search size={15} fontWeight={Bold} className="mt-2" />
        </button>
      </form>
    </div>
  );
}

export default SearchCom;
