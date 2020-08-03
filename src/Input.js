import React from "react";

const Input = ({ onChange, value, label }) => {
  return (
    <div className="container">
      {label}
      <input type="text" className="form" onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
