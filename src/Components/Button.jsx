import classNames from "classnames";
import React from "react";

const Button = ({ color, outline, size, hover, children }) => {
  return (
    <button
      className={classNames(
        "font-medium rounded-full py-3 px-10 transition ease-in-out duration-150",
        {
          [`text-${size}`]: size,
          [`bg-${color}`]: !outline,
          [`text-${color} border-${outline} border-${color} hover:bg-${color} hover:text-white`]:
            outline,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
