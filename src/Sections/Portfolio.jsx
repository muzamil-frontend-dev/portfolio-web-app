import React, { useEffect, useRef, useState } from "react";
import Heading from "../Components/Heading";
import classNames from "classnames";
import { wrapGrid } from "animate-css-grid";
import PortfolioCard from "../Components/PortfolioComponent/Card";

const portfolioTabs = ["all", "design", "brands", "photos"];
const portfolioArr = [
  {
    name: "design",
    img: "/images/portfolio/1.jpg",
  },
  {
    name: "design",
    img: "/images/portfolio/3.jpg",
  },
  {
    name: "brands",
    img: "/images/portfolio/2.jpg",
  },
  {
    name: "brands",
    img: "/images/portfolio/4.jpg",
  },
  {
    name: "photos",
    img: "/images/portfolio/3.jpg",
  },
  {
    name: "design",
    img: "/images/portfolio/4.jpg",
  },
  {
    name: "brands",
    img: "/images/portfolio/5.jpg",
  },
  {
    name: "photos",
    img: "/images/portfolio/6.jpg",
  },
  {
    name: "photos",
    img: "/images/portfolio/7.jpg",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const [filterProducts, setFilterProducts] = useState(portfolioArr);
  const [active, setActive] = useState(0);

  useEffect(() => {
    wrapGrid(ref?.current, {
      stagger: 100,
      duration: 500,
      easing: "linear",
    });
  }, []);

  const handleClick = (e, index) => {
    setActive(index);
    const text = e.target.textContent.toLowerCase();
    const filterData = portfolioArr.filter((product) => product.name === text);
    filterData.length !== 0
      ? setFilterProducts(filterData)
      : setFilterProducts(portfolioArr);
  };

  return (
    <section className="bg-gray-900 text-white" id="portfolio">
      <div className="container mx-auto py-18 px-8">
        <Heading title="portfolio" tagLine="my work" />
        {/* Grid changing buttons */}
        <ul className="text-center mb-12">
          {portfolioTabs.map((tab, index) => (
            <li
              key={index}
              className={classNames(
                "inline-block cursor-pointer capitalize hover:text-green py-2 px-4 transition",
                {
                  "text-green border-b-2 border-b-green": active === index,
                }
              )}
              onClick={(event) => handleClick(event, index)}
            >
              {tab}
            </li>
          ))}
        </ul>
        {/* Portfolio Grid */}
        <ul
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 px-4 transition"
          ref={ref}
        >
          {filterProducts.map((product, i) => (
            <PortfolioCard key={i} image={product.img} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
