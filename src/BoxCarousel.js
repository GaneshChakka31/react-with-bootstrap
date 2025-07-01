import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './BoxCarousel.css';

const brandLogos = [
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/13_fbzbpw.png?tr=w-720",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/12_hfsle3.png?tr=w-720",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682983/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/8_dvwyxd.png?tr=w-720",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/7_uvvozm.png?tr=w-720",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/6_cruwwo.png?tr=w-720",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/5_pjm9wd.png?tr=w-720",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/11_tc1idk.png?tr=w-720",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/3_voajbz.png?tr=w-720"
];

const BoxCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -300 : 300,
      });
    }
  };

  return (
    <div className="box-carousel-wrapper">
      <button className="arrow left" onClick={() => scroll('left')}>
        <FaChevronLeft />
      </button>

      <div className="box-carousel" ref={scrollRef}>
        {brandLogos.map((logo, index) => (
          <div className="brand-card" key={index}>
            <img src={logo} alt={`brand-${index}`} className="brand-image" />
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={() => scroll('right')}>
        <FaChevronRight />
      </button>
    </div>
  );
};
export default BoxCarousel;
