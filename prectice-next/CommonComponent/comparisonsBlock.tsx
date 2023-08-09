import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Img1 from "../Assets/Images/productImage/product_img1.jpg";
import Img2 from "../Assets/Images/productImage/product_img3.jpg";
import Slider from "react-slick";
import Image from "next/image";

const ComparisonsBlock = () => {
  const comparSliderData = [
    {
      id: 1,
      product1Img: Img1,
      product1: "Asus ROG Phone 7 Ultimate Specs",
      product2Img: Img2,
      product2: "Samsung Galaxy S23 Ultra",
    },
    {
      id: 2,
      product1Img: Img1,
      product1: "Asus ROG Phone 7 Ultimate",
      product2Img: Img2,
      product2: "Asus ROG Phone 7",
    },
    {
      id: 3,
      product1Img: Img1,
      product1: "Asus ROG Phone 7 Ultimate",
      product2Img: Img2,
      product2: "Asus ROG Phone 7 Ultimate Specs",
    },
    {
      id: 4,
      product1Img: Img1,
      product1: "Asus ROG Phone 7 Ultimate",
      product2Img: Img1,
      product2: "oppo",
    },
    {
      id: 5,
      product1Img: Img1,
      product1: "Asus ROG Phone 7 Ultimate",
      product2Img: Img1,
      product2: "Google Pixel 7  Pro",
    },
  ];

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <Box className="section-bottom-gapping">
      <Box className="border border-color-1">
        <Typography
          className="block-title border-bottom border-color-1 fs-18 font-semibold"
          px={{ md: 5, xs: 2.4 }}
          py={1}
        >
          Popular Comparisons
        </Typography>
        <Box className="" px={{ md: 5, xs: 2.4 }} py={2}>
          <Typography className="fs-14" mb={2} pr={8}>
            The Asus ROG Phone 7 Ultimate is most commonly compared with these
            phones:
          </Typography>
          <Box className="compare-slider">
            <Slider {...settings}>
              {comparSliderData.map((item, i) => {
                return (
                  <Box
                    className="item slider-item"
                    sx={{ width: "302px" }}
                    key={i}
                  >
                    <Box
                      className="d-flex text-center border border-color-1 rounded-2 h-100 p-2"
                      mx={1.3}
                    >
                      <Grid
                        container
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Grid item className="" xs={4.5}>
                          <Box
                            className="compar-img-wrap position-relative d-block"
                            height={"95px"}
                          >
                            <Image
                              src={item.product1Img}
                              alt={item.product1}
                              className="m-auto"
                            />
                          </Box>
                          <Typography className="text-black fs-12" pt={1}>
                            {item.product2}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          className="vs-wrap d-flex justify-content-center"
                          xs={3}
                        >
                          <Typography
                            className="text-blue font-semibold border rounded-circle fs-12"
                            sx={{
                              height: "38px",
                              width: "38px",
                              lineHeight: "38px",
                            }}
                          >
                            VS
                          </Typography>
                        </Grid>
                        <Grid item className="" xs={4.5}>
                          <Box
                            className="compar-img-wrap position-relative d-block"
                            height={"95px"}
                          >
                            <Image
                              src={item.product2Img}
                              alt={item.product2}
                              className="m-auto"
                            />
                          </Box>
                          <Typography className="text-black fs-12" pt={1}>
                            {item.product2}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ComparisonsBlock;
