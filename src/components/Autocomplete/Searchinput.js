import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { Searchipt } from "./Searchstyle";

const Searchinput = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const [debouncedCallback] = useDebouncedCallback(
    // function
    value => {
      setSearchValue(value);
      search(value);
    },
    // delay in ms
    100
  );

  return (
    <form className="search">
      <Searchipt
        value={searchValue}
        onChange={e => debouncedCallback(e.target.value)}
        placeholder="Search.."
        type="text"
      />
    </form>
  );
};

export default Searchinput;
