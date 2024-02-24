import React, { useRef, useState } from "react";
import Heading from "../Components/Heading";
import classNames from "classnames";

const portfolioTabs = ["all", "design", "brands", "photos"];
const portfolioArr = [
  {
    name: "design",
    img: "/images/portfolio/1.jpg",
  },
  {
    name: "brands",
    img: "/images/portfolio/2.jpg",
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
  const [active, setActive] = useState(null);

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
      <div className="contianer mx-auto py-18 px-8">
        <Heading title="portfolio" tagLine="my work" />
        {/* Grid changing buttons */}
        <ul className="text-center">
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
        <div
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8"
          ref={ref}
        >
          {filterProducts.map((product, i) => (
            <div key={i} className="h-min w-full bg-red-400">
              <img className="object-cover" src={product.img} alt="img 1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
