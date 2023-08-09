import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import featureIcon1 from "../Assets/Images/singleProduct/feature1.svg";
import featureIcon2 from "../Assets/Images/singleProduct/feature2.svg";
import featureIcon3 from "../Assets/Images/singleProduct/feature3.svg";
import featureIcon4 from "../Assets/Images/singleProduct/feature4.svg";
import featureIcon5 from "../Assets/Images/singleProduct/feature5.svg";
import featureIcon6 from "../Assets/Images/singleProduct/feature6.svg";
import colorOption1 from "../Assets/Images/singleProduct/color-option1.svg";
import colorOption2 from "../Assets/Images/singleProduct/color-option2.svg";
import colorOption3 from "../Assets/Images/singleProduct/color-option3.svg";
import colorOption4 from "../Assets/Images/singleProduct/color-option4.svg";
import ProductImage from "../Assets/Images/productImage/product_img1.jpg";
import ProductImage1 from "../Assets/Images/productImage/product_img2.jpg";
import ProductImage2 from "../Assets/Images/productImage/product_img3.jpg";
import ProductImage3 from "../Assets/Images/productImage/product_img4.jpg";
import ProductImage4 from "../Assets/Images/productImage/product_img5.jpg";
import ProductImage5 from "../Assets/Images/productImage/product_blog.jpg";
import AddIcon from "@mui/icons-material/Add";
import ComparisonsBlock from "./CommonComponent/comparisonsBlock";
import ProductTabs from "./CommonComponent/productTabs";
import CompareModal from "./Modal/compareModal";
import Slider from "react-slick";

const SingleProduct = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const productFeatures = [
    {
      id: 1,
      image: featureIcon1,
      name: "Display",
      details: "6.8 inches 2448 x 2080 pixels 165Hz Refresh rate",
    },
    {
      id: 2,
      image: featureIcon2,
      name: "Hardware",
      details: "Qualcomm Snapdragon 8 Gen 2 16GB RAM",
    },
    {
      id: 3,
      image: featureIcon3,
      name: "Camera",
      details: "50 MP (Triple camera) 32 MP front",
    },
    {
      id: 4,
      image: featureIcon4,
      name: "Storage",
      details: "512GB, not expandable",
    },
    { id: 5, image: featureIcon5, name: "Battery", details: "6000 mAh" },
    { id: 6, image: featureIcon6, name: "OS", details: "Android 13" },
  ];

  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();

  const settings = {
    dots: false,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          vertical: false,
          slidesToShow: 3,
        },
      },
    ],
  };

  const sliderData = [
    { id: 1, image: ProductImage, name: "product1" },
    { id: 2, image: ProductImage1, name: "product2" },
    { id: 3, image: ProductImage2, name: "product3" },
    { id: 4, image: ProductImage3, name: "product4" },
    { id: 5, image: ProductImage4, name: "product5" },
    { id: 6, image: ProductImage5, name: "product6" },
  ];

  return (
    <Box>
      <Box className="">
        <Grid container className="section-bottom-gapping">
          <Grid item xs={12} md={4.5}>
            <Grid
              container
              className="single-product-img-wrap border border-color-1 p-2 d-flex align-items-center"
            >
              <Grid item xs={12} sm={2.2} className="vertical-image-slider">
                <Slider
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  {...settings}
                >
                  {sliderData.map((item, i) => {
                    return (
                      <Box
                        className="border border-color-1 p-1 text-center slider-item"
                        key={i}
                        height={70}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="m-auto"
                        />
                      </Box>
                    );
                  })}
                </Slider>
              </Grid>
              <Grid item xs={12} sm={9.8} className="product-single-image">
                <Box className="position-relative product-single-image-slider h-100">
                  <Slider
                    arrows={false}
                    fade={true}
                    asNavFor={nav2}
                    ref={(slider1) => setNav1(slider1)}
                  >
                    {sliderData.map((res, index) => {
                      return (
                        <Box
                          className="position-relative slider-item"
                          key={index}
                        >
                          <img
                            src={res.image}
                            alt={res.name}
                            className="m-auto"
                          />
                        </Box>
                      );
                    })}
                  </Slider>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={7.5}
            pl={{ md: 5, xs: 0 }}
            pt={{ xs: 3, md: 0 }}
          >
            <Box className="d-sm-flex d-block justify-content-between" mb={1}>
              <Typography className="fs-24 font-bold">
                Asus ROG Phone 7 Ultimate Specs
              </Typography>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => setCompareModalOpen(true)}
                sx={{ height: "40px", padding: "5px 15px" }}
              >
                Compare
              </Button>
            </Box>

            <Typography
              className="product-score-tag fs-14 text-white rounded-4 text-center d-inline-block"
              bgcolor={"#72A02B"}
              fontWeight={500}
              sx={{
                padding: "3px 10px",
              }}
            >
              95% SPEC SCORE
            </Typography>
            <Typography className="fs-24 font-bold text-blue" my={1}>
              $70.00
            </Typography>
            <Divider sx={{ mt: 2, mb: 1 }} />
            <Box className="color-option" my={2}>
              <Typography className="option-label fs-14 font-semibold" mb={1}>
                Color
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="Black"
                    control={<Radio />}
                    label={<img src={colorOption1} alt="black" />}
                    className="position-relative p-0"
                  />
                  <FormControlLabel
                    value="Gray"
                    control={<Radio />}
                    label={<img src={colorOption2} alt="gray" />}
                    className="position-relative p-0"
                  />
                  <FormControlLabel
                    value="Red"
                    control={<Radio />}
                    label={<img src={colorOption3} alt="red" />}
                    className="position-relative p-0"
                  />
                  <FormControlLabel
                    value="Yellow"
                    control={<Radio />}
                    label={<img src={colorOption4} alt="yellow" />}
                    className="position-relative p-0"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box className="Variants-option" my={2}>
              <Typography className="option-label fs-14 font-semibold" mb={1}>
                Variants
              </Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="128GB"
                  control={<Radio />}
                  label="8 GB RAM, 128 GB"
                  className="position-relative"
                />
                <FormControlLabel
                  value="256GB"
                  control={<Radio />}
                  label="8 GB RAM, 256 GB"
                  className="position-relative"
                />
              </RadioGroup>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="features-block section-bottom-gapping">
        <Box
          className="features-block-inner border border-color-1"
          padding={{ sm: 2, xs: 1 }}
        >
          <Grid container className="align-items-center">
            {productFeatures.map((res, i) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={2}
                  className="d-flex justify-content-sm-center justify-content-start features-context position-relative"
                  key={i}
                >
                  <Box className="d-flex align-items-center" px={1} py={1}>
                    <img src={res.image} alt="" />
                    <Box className="" ml={1.5}>
                      <Typography className="fs-14 font-semibold">
                        {res.name}
                      </Typography>
                      <Typography
                        className="fs-12"
                        lineHeight={1.5}
                        maxWidth={125}
                      >
                        {res.details}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <ComparisonsBlock />
      <ProductTabs />
      <CompareModal open={compareModalOpen} setOpen={setCompareModalOpen} />
    </Box>
  );
};

export default SingleProduct;
