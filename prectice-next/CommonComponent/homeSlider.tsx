import React from "react";
import Slider from "react-slick";
import SliderImage from "../Assets/Images/home/slider1.jpg";
import { Box } from "@mui/material";
import Image from "next/image";

const HomeSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliderData = [
    { id: 1, image: SliderImage, name: "product1" },
    { id: 2, image: SliderImage, name: "product2" },
    { id: 3, image: SliderImage, name: "product3" },
  ];

  return (
    <Box className="home-slider section-bottom-gapping">
      <Slider {...settings}>
        {sliderData.map((item, i) => {
          return (
            <Box key={i}>
              <Image src={item.image} alt={item.name} />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default HomeSlider;
