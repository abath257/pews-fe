import * as React from "react";

function SortBar({ setSort, setOrder }) {
  return (
    <>
      <section className="sort__main">
        <button
          onClick={() => {
            setSort("created_at");
          }}
        >
          date
        </button>
        <button
          onClick={() => {
            setSort("comment_count");
          }}
        >
          comments
        </button>
        <button
          onClick={() => {
            setSort("votes");
          }}
        >
          votes
        </button>
      </section>
      <section className="sort__order">
        <button
          onClick={() => {
            setOrder("asc");
          }}
        >
          HI LOW
        </button>
        <button
          onClick={() => {
            setOrder("desc");
          }}
        >
          LOW HI
        </button>
      </section>
    </>
  );
}

export default SortBar;
