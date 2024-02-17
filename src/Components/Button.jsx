import React from "react";

const Button = ({ className, children }) => {
  const btnClasses =
    "font-medium rounded-full py-3 px-10 transition ease-in-out duration-150";
  return <button className={`${btnClasses} ${className}`}>{children}</button>;
};

export default Button;
