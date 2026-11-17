// Portfolio data. Add or edit projects here — the Portfolio section, its
// filter tabs and the project modal are all driven from this file.
//
// TODO: replace the placeholder projects below with real ones and put their
// screenshots under public/images/portfolio/.

// Filter tabs, in display order. A tab only appears if at least one project
// uses its category.
export const categories = [
  { id: "web-apps", label: "Web Apps" },
  { id: "websites", label: "Websites" },
  { id: "open-source", label: "Open Source" },
];

/**
 * @typedef {Object} Project
 * @property {string} id           Unique, stable id (used as React key).
 * @property {string} title
 * @property {string} category     One of the `categories` ids above.
 * @property {string} thumbnail    Image shown in the grid.
 * @property {string[]} images     Screenshots shown in the modal carousel.
 * @property {string} description
 * @property {string} role
 * @property {string[]} tech
 * @property {string} date
 * @property {string} [client]
 * @property {string} [liveUrl]
 * @property {string} [githubUrl]
 */

/** @type {Project[]} */
export const projects = [
  {
    id: "project-1",
    title: "Project Title 1",
    category: "web-apps",
    thumbnail: "/images/portfolio/1.jpg",
    images: ["/images/portfolio/1.jpg", "/images/portfolio/5.jpg"],
    description:
      "Short summary of the problem, what you built and the outcome. Replace with real project info.",
    role: "Front-end Developer",
    tech: ["React", "Redux", "Tailwind CSS"],
    date: "2024",
    client: "Client Name",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/muzamil-frontend-dev",
  },
  {
    id: "project-2",
    title: "Project Title 2",
    category: "websites",
    thumbnail: "/images/portfolio/2.jpg",
    images: ["/images/portfolio/2.jpg"],
    description:
      "Short summary of the problem, what you built and the outcome. Replace with real project info.",
    role: "Front-end Developer",
    tech: ["Next.js", "Tailwind CSS"],
    date: "2023",
    liveUrl: "https://example.com",
  },
  {
    id: "project-3",
    title: "Project Title 3",
    category: "open-source",
    thumbnail: "/images/portfolio/3.jpg",
    images: ["/images/portfolio/3.jpg", "/images/portfolio/6.jpg"],
    description:
      "Short summary of the problem, what you built and the outcome. Replace with real project info.",
    role: "Author",
    tech: ["React", "TypeScript"],
    date: "2023",
    githubUrl: "https://github.com/muzamil-frontend-dev",
  },
  {
    id: "project-4",
    title: "Project Title 4",
    category: "web-apps",
    thumbnail: "/images/portfolio/4.jpg",
    images: ["/images/portfolio/4.jpg", "/images/portfolio/7.jpg"],
    description:
      "Short summary of the problem, what you built and the outcome. Replace with real project info.",
    role: "Front-end Developer",
    tech: ["React", "Material UI", "Node.js"],
    date: "2022",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/muzamil-frontend-dev",
  },
];
