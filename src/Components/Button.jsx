import classNames from "classnames";
import React from "react";

const Button = ({
  color,
  outline,
  paddingY,
  paddingX,
  size,
  hover,
  children,
}) => {
  return (
    <button
      className={classNames("font-medium rounded-full", {
        [`text-${size}`]: size,
        [`text-${color}`]: color && outline,
        [`bg-${color}`]: color && !hover,
        [`border-${outline}`]: outline,
        [`border-${color}`]: color,
        [`py-${paddingY}`]: paddingY,
        [`px-${paddingX}`]: paddingX,
        [`hover:bg-${color}`]: color && hover,
        "hover:text-white": color && outline,
        "transition ease-in-out duration-150": hover,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
