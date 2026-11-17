import {
  faCode,
  faDiagramProject,
  faGaugeHigh,
  faMobileScreenButton,
  faPenRuler,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";

// Services shown in the "What I Do" section. Edit the copy freely; keep an
// even count so the two-column layout stays balanced.
export const services = [
  {
    id: "web-apps",
    icon: faCode,
    title: "Web App Development",
    description:
      "Building fast, scalable single-page applications with React, Next.js and modern JavaScript/TypeScript.",
  },
  {
    id: "responsive-ui",
    icon: faMobileScreenButton,
    title: "Responsive UI",
    description:
      "Mobile-first, pixel-perfect interfaces with Tailwind CSS and Material UI that look right on every screen.",
  },
  {
    id: "state-management",
    icon: faDiagramProject,
    title: "State Management",
    description:
      "Predictable application state with Redux and React hooks, keeping complex data flows easy to reason about.",
  },
  {
    id: "api-integration",
    icon: faPlug,
    title: "API Integration",
    description:
      "Connecting front ends to REST APIs and Node.js services with solid loading, error and caching handling.",
  },
  {
    id: "performance",
    icon: faGaugeHigh,
    title: "Performance Optimization",
    description:
      "Faster load times and smoother interactions through code splitting, lazy loading and render optimization.",
  },
  {
    id: "design-to-code",
    icon: faPenRuler,
    title: "Design to Code",
    description:
      "Turning Figma designs into clean, reusable and accessible React components.",
  },
];
