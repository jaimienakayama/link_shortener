import React from "react";

const Button = ({ className, text, onClick, dct }) => {
  return (
    <div>
      <button
        className={className}
        onClick={onClick}
        data-clipboard-target={dct}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
