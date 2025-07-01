import React, { useRef } from "react";
import "./CategoryCarousel.css";
import {
  FaMobileAlt,
  FaTv,
  FaSnowflake,
  FaFan,
  FaLaptop,
  FaHeadphones,
  FaTint,
  FaIceCream,
  FaUsb,
  FaSoap,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const categories = [
  { name: "Mobiles", icon: <FaMobileAlt /> },
  { name: "Televisions", icon: <FaTv /> },
  { name: "Air Conditioners", icon: <FaSnowflake /> },
  { name: "Coolers", icon: <FaFan /> },
  { name: "Laptops", icon: <FaLaptop /> },
  { name: "Headphones & Earphones", icon: <FaHeadphones /> },
  { name: "Water Purifiers", icon: <FaTint /> },
  { name: "Refrigerators", icon: <FaIceCream /> },
  { name: "Accessories", icon: <FaUsb /> },
  { name: "Washing Machines", icon: <FaSoap /> },
];

const CategoryCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="nav-button left" onClick={() => scroll("left")}>
        <FaChevronLeft />
      </button>

      <div className="carousel" ref={carouselRef}>
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="icon">{category.icon}</div>
            <div className="label">{category.name}</div>
          </div>
        ))}
      </div>

      <button className="nav-button right" onClick={() => scroll("right")}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CategoryCarousel;
