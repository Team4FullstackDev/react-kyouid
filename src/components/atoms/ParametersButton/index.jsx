import React from "react";

const ParamatersButton = ({ type, onClick, iconSrc, altText, children }) => {
  return (
    <button type={type} onClick={onClick}>
      <img src={iconSrc} alt={altText} />
      {children}
    </button>
  );
};

export default ParamatersButton;
