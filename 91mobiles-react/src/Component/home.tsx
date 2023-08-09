import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SliderImage from "../Assets/Images/home/slider1.jpg";
import ProductBlock from "./CommonComponent/productBlock";
import Slider from "react-slick";
import { ProductData, BrandData } from "../Units/array";

const Home = () => {
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
  const arrayProductData = ProductData.splice(0, 8);
  return (
    <Box className="home-page">
      <Box className="home-brand" py={4.5}>
        <Grid container spacing={1} className="text-center">
          {BrandData.map((data, i) => {
            return (
              <Grid key={i} item xs={4} sm={2}>
                <img src={data.brandImage} alt={`${data.brandImage}`} />
                <Typography className="fs-18 text-black" mt={0.65}>
                  {data.brandName}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box className="home-slider section-bottom-gapping">
        <Slider {...settings}>
          {sliderData.map((item, i) => {
            return (
              <Box key={i}>
                <img src={item.image} alt={item.name} />
              </Box>
            );
          })}
        </Slider>
      </Box>
      <Box className="home-product-section section-bottom-gapping">
        <ProductBlock
          productDataArray={arrayProductData}
          sectionTitle="Popular Mobiles"
          columnCount={true}
          viewMoreLink={true}
          pagination={false}
        />
      </Box>
      <Box className="home-product-section section-bottom-gapping">
        <ProductBlock
          productDataArray={arrayProductData}
          sectionTitle="Upcoming Mobiles"
          columnCount={true}
          viewMoreLink={true}
          pagination={false}
        />
      </Box>
      <Box className="home-product-section">
        <ProductBlock
          productDataArray={arrayProductData}
          sectionTitle="Best Phones by Price"
          columnCount={true}
          viewMoreLink={true}
          pagination={false}
        />
      </Box>
    </Box>
  );
};

export default Home;
