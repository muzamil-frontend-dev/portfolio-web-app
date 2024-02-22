import React, { useRef, useState } from "react";
import Heading from "../Components/Heading";

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

  const handleClick = (e) => {
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
        {/* <Tabs /> */}
        {/* Grid changing buttons */}
        <ul className="text-center" onClick={handleClick}>
          <li className="inline text-green py-2 px-4 border-b-2 border-b-green">
            All
          </li>
          <li className="inline text-white-100 py-2 px-4">Design</li>
          <li className="inline text-white-100 py-2 px-4">Brands</li>
          <li className="inline text-white-100 py-2 px-4">Photos</li>
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
