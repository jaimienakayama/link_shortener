import React from "react";

const Input = ({ className, placeholder, setLongLink, readOnly, value }) => {
  return (
    <div className="link-container">
      <input
        type="text"
        placeholder={placeholder}
        className={className}
        readOnly={readOnly}
        value={value}
        onChange={(e) => {
          setLongLink(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
