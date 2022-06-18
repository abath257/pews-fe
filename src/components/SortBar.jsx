import * as React from "react";




function SortBar({setSort}) {
  return (
    <>
    <button onClick={()=>{setSort('date')}}>date</button>
    <button onClick={()=>{setSort('comment_count')}}>comments</button>
    <button onClick={()=>{setSort('votes')}}>votes</button>
    </>
  );
}

export default SortBar;
