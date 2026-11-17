import React, { useEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import Isotope from "isotope-layout";
import Heading from "../Components/Heading";
import Modal from "../Components/Modal";
import PortfolioCard from "../Components/PortfolioComponent/Card";
import ProjectDetails from "../Components/PortfolioComponent/ProjectDetails";
import { categories, projects } from "../data/projects";

const ALL = "all";

const categoryLabels = Object.fromEntries(
  categories.map((category) => [category.id, category.label])
);

// "All" plus only the categories that actually have projects.
const tabs = [
  { id: ALL, label: "All" },
  ...categories.filter((category) =>
    projects.some((project) => project.category === category.id)
  ),
];

const Portfolio = () => {
  const gridRef = useRef(null);
  const isotopeRef = useRef(null);
  const [activeTab, setActiveTab] = useState(ALL);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredProjects = useMemo(
    () =>
      activeTab === ALL
        ? projects
        : projects.filter((project) => project.category === activeTab),
    [activeTab]
  );

  // Same setup as the reference template: Isotope masonry with its default
  // 0.4s scale + fade for hidden/revealed items and slide for moved ones.
  useEffect(() => {
    const isotope = new Isotope(gridRef.current, {
      itemSelector: ".portfolio-item",
      layoutMode: "masonry",
      percentPosition: true,
    });
    isotopeRef.current = isotope;
    return () => {
      isotope.destroy();
      isotopeRef.current = null;
    };
  }, []);

  // Every project stays mounted; Isotope animates them in and out of view.
  useEffect(() => {
    isotopeRef.current?.arrange({
      filter: activeTab === ALL ? "*" : `[data-category="${activeTab}"]`,
    });
  }, [activeTab]);

  const count = filteredProjects.length;
  const selectedProject =
    selectedIndex !== null ? filteredProjects[selectedIndex] : null;

  const closeModal = () => setSelectedIndex(null);
  const showPrevious = () => setSelectedIndex((i) => (i - 1 + count) % count);
  const showNext = () => setSelectedIndex((i) => (i + 1) % count);
  const hasSiblings = count > 1;

  return (
    <section className="bg-gray-900 text-white" id="portfolio">
      <div className="container mx-auto py-18 px-8">
        <Heading title="portfolio" tagLine="my work" />
        {/* Filter tabs */}
        <ul className="text-center mb-12">
          {tabs.map((tab) => (
            <li key={tab.id} className="inline-block">
              <button
                type="button"
                className={classNames(
                  "capitalize hover:text-green py-2 px-4 transition",
                  {
                    "text-green border-b-2 border-b-green":
                      activeTab === tab.id,
                  }
                )}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Portfolio grid */}
        <ul className="-mx-3" ref={gridRef}>
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              categoryLabel={categoryLabels[project.category]}
              onClick={() =>
                setSelectedIndex(filteredProjects.indexOf(project))
              }
            />
          ))}
        </ul>
      </div>
      {selectedProject && (
        <Modal
          label={selectedProject.title}
          onClose={closeModal}
          onPrev={hasSiblings ? showPrevious : undefined}
          onNext={hasSiblings ? showNext : undefined}
        >
          <ProjectDetails key={selectedProject.id} project={selectedProject} />
        </Modal>
      )}
    </section>
  );
};

export default Portfolio;
