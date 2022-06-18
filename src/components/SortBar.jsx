import * as React from "react";
import { useSearchParams, serializeFormQuery } from "react-router-dom";

function SortBar({setSearchParams}) {
 

  return (
    <div>
      <button onClick={setSearchParams("sort_by?date")}>Date</button>
      <button onClick={setSearchParams("sort_by?date")}>Comment Count</button>
      <button onClick={setSearchParams("sort_by?date")}>Votes</button>
    </div>
  );
}

export default SortBar;
