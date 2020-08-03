import React from "react";

const Pagination = ({ onChange, value, label, items }) => {
  return (
    <div className="container-btn">
      {items.map((itm, id) => (
        <button value={id + 1} key={id} onClick={onChange}>
          {id + 1}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
