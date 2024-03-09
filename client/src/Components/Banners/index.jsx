import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banners = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true
  };

  const images = [
    "/images/BannerD.jpeg",
    "/images/BannerC.jpeg",
    "/images/BannerB.jpeg",
    "/images/BannerA.jpeg"
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images?.map((el) => (
          <div className="w-full h-full" key={el}>
            <img className="w-full h-full object-fill" src={el} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banners;
