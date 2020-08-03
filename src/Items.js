import React from "react";

const Items = ({ items }) => {
  return (
    <div className="container">
      {items.map((itm) => (
        <div key={itm.id}>
          <img src={itm.url} />
          <h3>{itm.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Items;
