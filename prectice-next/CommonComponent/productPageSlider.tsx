import { useState } from "react";
import ProductImage from "../Assets/Images/productImage/product_img1.jpg";
import ProductImage1 from "../Assets/Images/productImage/product_img2.jpg";
import ProductImage2 from "../Assets/Images/productImage/product_img3.jpg";
import ProductImage3 from "../Assets/Images/productImage/product_img4.jpg";
import ProductImage4 from "../Assets/Images/productImage/product_img5.jpg";
import ProductImage5 from "../Assets/Images/productImage/product_blog.jpg";
import { Box, Grid } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";

const ProductPageSlider = () => {
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
    <>
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
                  <Image src={item.image} alt={item.name} className="m-auto" />
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
                  <Box className="position-relative slider-item" key={index}>
                    <Image src={res.image} alt={res.name} className="m-auto" />
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default ProductPageSlider;
