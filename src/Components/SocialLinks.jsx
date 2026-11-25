import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data/socials";

// Icon-only social profile links. `className` styles the list (layout, size,
// colour); set `colorOnHover` to use each network's hover colour.
const SocialLinks = ({ className = "", colorOnHover = false }) => {
  return (
    <ul className={className}>
      {socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
            className={`transition-colors duration-300 ${
              colorOnHover ? social.hoverClass : "hover:text-green"
            }`}
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
