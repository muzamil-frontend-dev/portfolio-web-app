import React, { useEffect, useRef, useState } from "react";
import Heading from "../Components/Heading";
import classNames from "classnames";
import { wrapGrid } from "animate-css-grid";
import PortfolioCard from "../Components/PortfolioComponent/Card";

const portfolioTabs = ["all", "design", "brands", "photos"];
const portfolioArr = [
  {
    id: 1,
    name: "design",
    title: "Project Title 1",
    img: "/images/portfolio/1.jpg",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    clientName: "Jonn Cena",
    industry: "Puzzle Game",
    technologies: "IOS, HTML5, CSS3, PHP, Java",
    date: new Date().toLocaleDateString(),
    productURL: "www.example.com",
    socialLinks: [
      {
        icon: "facebook",
        url: "www.facebook.com",
        colorCode: "text-blue-600",
      },
      { icon: "twitter", url: "www.twitter.com", colorCode: "text-blue-300" },
      { icon: "google", url: "www.google.com", colorCode: "text-red-100" },
      {
        icon: "instagram",
        url: "www.instagram.com",
        colorCode: "text-blue-400",
      },
      { icon: "Email", url: "www.email.com", colorCode: "text-blue-500" },
    ],
  },
  {
    id: 2,
    name: "design",
    title: "Project Title 2",
    img: "/images/portfolio/3.jpg",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    clientName: "Jonn Cena",
    industry: "Puzzle Game",
    technologies: "IOS, HTML5, CSS3, PHP, Java",
    date: new Date().toLocaleDateString(),
    productURL: "www.example.com",
    socialLinks: [
      {
        icon: "facebook",
        url: "www.facebook.com",
        colorCode: "text-blue-600",
      },
      { icon: "twitter", url: "www.twitter.com", colorCode: "text-blue-300" },
      { icon: "google", url: "www.google.com", colorCode: "text-red-100" },
      {
        icon: "instagram",
        url: "www.instagram.com",
        colorCode: "text-blue-400",
      },
      { icon: "Email", url: "www.email.com", colorCode: "text-blue-500" },
    ],
  },
  {
    id: 3,
    name: "brands",
    title: "Project Title 3",
    img: "/images/portfolio/2.jpg",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    clientName: "Jonn Cena",
    industry: "Puzzle Game",
    technologies: "IOS, HTML5, CSS3, PHP, Java",
    date: new Date().toLocaleDateString(),
    productURL: "www.example.com",
    socialLinks: [
      {
        icon: "facebook",
        url: "www.facebook.com",
        colorCode: "text-blue-600",
      },
      { icon: "twitter", url: "www.twitter.com", colorCode: "text-blue-300" },
      { icon: "google", url: "www.google.com", colorCode: "text-red-100" },
      {
        icon: "instagram",
        url: "www.instagram.com",
        colorCode: "text-blue-400",
      },
      { icon: "Email", url: "www.email.com", colorCode: "text-blue-500" },
    ],
  },
  {
    id: 4,
    name: "brands",
    title: "Project Title 4",
    img: "/images/portfolio/4.jpg",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    clientName: "Jonn Cena",
    industry: "Puzzle Game",
    technologies: "IOS, HTML5, CSS3, PHP, Java",
    date: new Date().toLocaleDateString(),
    productURL: "www.example.com",
    socialLinks: [
      {
        icon: "facebook",
        url: "www.facebook.com",
        colorCode: "text-blue-600",
      },
      { icon: "twitter", url: "www.twitter.com", colorCode: "text-blue-300" },
      { icon: "google", url: "www.google.com", colorCode: "text-red-100" },
      {
        icon: "instagram",
        url: "www.instagram.com",
        colorCode: "text-blue-400",
      },
      { icon: "Email", url: "www.email.com", colorCode: "text-blue-500" },
    ],
  },
  {
    id: 5,
    name: "photos",
    title: "Project Title 5",
    img: "/images/portfolio/3.jpg",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    clientName: "Jonn Cena",
    industry: "Puzzle Game",
    technologies: "IOS, HTML5, CSS3, PHP, Java",
    date: new Date().toLocaleDateString(),
    productURL: "www.example.com",
    socialLinks: [
      {
        icon: "facebook",
        url: "www.facebook.com",
        colorCode: "text-blue-600",
      },
      { icon: "twitter", url: "www.twitter.com", colorCode: "text-blue-300" },
      { icon: "google", url: "www.google.com", colorCode: "text-red-100" },
      {
        icon: "instagram",
        url: "www.instagram.com",
        colorCode: "text-blue-400",
      },
      { icon: "Email", url: "www.email.com", colorCode: "text-blue-500" },
    ],
  },
  {
    id: 6,
    name: "design",
    title: "Project Title 6",
    img: "/images/portfolio/4.jpg",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    clientName: "Jonn Cena",
    industry: "Puzzle Game",
    technologies: "IOS, HTML5, CSS3, PHP, Java",
    date: new Date().toLocaleDateString(),
    productURL: "www.example.com",
    socialLinks: [
      {
        icon: "facebook",
        url: "www.facebook.com",
        colorCode: "text-blue-600",
      },
      { icon: "twitter", url: "www.twitter.com", colorCode: "text-blue-300" },
      { icon: "google", url: "www.google.com", colorCode: "text-red-100" },
      {
        icon: "instagram",
        url: "www.instagram.com",
        colorCode: "text-blue-400",
      },
      { icon: "Email", url: "www.email.com", colorCode: "text-blue-500" },
    ],
  },
  {
    id: 7,
    name: "brands",
    title: "Project Title 7",
    img: "/images/portfolio/5.jpg",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    clientName: "Jonn Cena",
    industry: "Puzzle Game",
    technologies: "IOS, HTML5, CSS3, PHP, Java",
    date: new Date().toLocaleDateString(),
    productURL: "www.example.com",
    socialLinks: [
      {
        icon: "facebook",
        url: "www.facebook.com",
        colorCode: "text-blue-600",
      },
      { icon: "twitter", url: "www.twitter.com", colorCode: "text-blue-300" },
      { icon: "google", url: "www.google.com", colorCode: "text-red-100" },
      {
        icon: "instagram",
        url: "www.instagram.com",
        colorCode: "text-blue-400",
      },
      { icon: "Email", url: "www.email.com", colorCode: "text-blue-500" },
    ],
  },
  {
    id: 8,
    name: "photos",
    title: "Project Title 8",
    img: "/images/portfolio/6.jpg",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    clientName: "Jonn Cena",
    industry: "Puzzle Game",
    technologies: "IOS, HTML5, CSS3, PHP, Java",
    date: new Date().toLocaleDateString(),
    productURL: "www.example.com",
    socialLinks: [
      {
        icon: "facebook",
        url: "www.facebook.com",
        colorCode: "text-blue-600",
      },
      { icon: "twitter", url: "www.twitter.com", colorCode: "text-blue-300" },
      { icon: "google", url: "www.google.com", colorCode: "text-red-100" },
      {
        icon: "instagram",
        url: "www.instagram.com",
        colorCode: "text-blue-400",
      },
      { icon: "Email", url: "www.email.com", colorCode: "text-blue-500" },
    ],
  },
  {
    id: 9,
    name: "photos",
    title: "Project Title 9",
    img: "/images/portfolio/7.jpg",
    description:
      "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    clientName: "Jonn Cena",
    industry: "Puzzle Game",
    technologies: "IOS, HTML5, CSS3, PHP, Java",
    date: new Date().toLocaleDateString(),
    productURL: "www.example.com",
    socialLinks: [
      {
        icon: "facebook",
        url: "www.facebook.com",
        colorCode: "text-blue-600",
      },
      { icon: "twitter", url: "www.twitter.com", colorCode: "text-blue-300" },
      { icon: "google", url: "www.google.com", colorCode: "text-red-100" },
      {
        icon: "instagram",
        url: "www.instagram.com",
        colorCode: "text-blue-400",
      },
      { icon: "Email", url: "www.email.com", colorCode: "text-blue-500" },
    ],
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
    <section className="bg-black-200 text-white" id="portfolio">
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
          {filterProducts.map((product) => (
            <PortfolioCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
