import {
  faGithub,
  faHackerrank,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// Social profiles shown in the sidebar, mobile header and Contact section.
// `hoverClass` must be a full Tailwind class name so Tailwind can find it.
export const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/muzamil167/",
    icon: faLinkedinIn,
    hoverClass: "hover:text-blue-100",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/muzamil-frontend-dev",
    icon: faGithub,
    hoverClass: "hover:text-white",
  },
  {
    id: "hackerrank",
    label: "HackerRank",
    url: "https://www.hackerrank.com/profile/hmuzamil567",
    icon: faHackerrank,
    hoverClass: "hover:text-green",
  },
];
