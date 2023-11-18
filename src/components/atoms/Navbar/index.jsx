import React, { useState } from "react";

// Nav Button Atom
export const NavButton = ({ type, className, onClick, children }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

// Nav Image Atom
export const NavImage = ({ className, src, alt }) => {
  return <img className={className} src={src} alt={alt} />;
};

// Nav Form Atom
export const NavForm = ({ children }) => {
  return <form className="nav__form_search">{children}</form>;
};

export const NavModalFormSearch = ({ children }) => {
  return <form className="nav__modal__search_form">{children}</form>;
};

// Nav Input Atom
export const NavInput = ({
  className,
  type,
  placeholder,
  name,
  autoComplete,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      name={name}
      autoComplete={autoComplete}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

// Nav Modal Search Input Atom
export const NavModalSearchInput = ({
  type,
  placeholder,
  name,
  autoComplete,
  value,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      className="nav__modal__search_form"
      type={type}
      placeholder={placeholder}
      name={name}
      autoComplete={autoComplete}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

// Nav Span Atom
export const NavSpan = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

// Nav HR Atom
export const NavHR = () => {
  return <hr />;
};
