import React from "react";

// Pill button. Pass `href` to render a link styled as a button (e.g. a
// download), otherwise a regular <button> is rendered.
const Button = ({ className = "", href, children, ...rest }) => {
  const classes = `inline-block font-medium rounded-full py-3 px-10 transition ease-in-out duration-150 ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
