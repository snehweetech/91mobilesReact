import { Box, Container, Grid, Typography } from "@mui/material";
import BrandImage1 from "../Assets/Images/home/brand1.jpg";
import BrandImage2 from "../Assets/Images/home/brand2.jpg";
import BrandImage3 from "../Assets/Images/home/brand3.jpg";
import BrandImage4 from "../Assets/Images/home/brand4.jpg";
import BrandImage5 from "../Assets/Images/home/brand5.jpg";
import BrandImage6 from "../Assets/Images/home/brand6.jpg";
import Image from "next/image";
import HomeSlider from "../CommonComponent/homeSlider";
import { ProductData } from "../Configuration/array";
import React, { useEffect, useState } from "react";
import ProductBlock from "@/CommonComponent/productBlock";
import { ROUTE } from "@/Interface/interface";

export default function Home() {
  const BrandData = [
    { id: 1, brandName: "Realme", brandImage: BrandImage1 },
    { id: 2, brandName: "POCO", brandImage: BrandImage2 },
    { id: 3, brandName: "Pixel", brandImage: BrandImage3 },
    { id: 4, brandName: "Oppo", brandImage: BrandImage4 },
    { id: 5, brandName: "Vivo", brandImage: BrandImage5 },
    { id: 6, brandName: "Infinix", brandImage: BrandImage6 },
  ];

  return (
    <Grid className="home-page">
      <Box className="home-brand" py={4.5}>
        <Grid container spacing={1} className="text-center">
          {BrandData.map((data, i) => {
            return (
              <Grid key={i} item xs={4} sm={2}>
                <Image src={data.brandImage} alt={`${data.brandImage}`} />
                <Typography className="fs-18 text-black" mt={0.65}>
                  {data.brandName}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <HomeSlider />

      <Box className="home-product-section section-bottom-gapping">
        <ProductBlock
          productDataArray={ProductData}
          sectionTitle="Popular Mobiles"
          columnCount={true}
          viewMoreLink={true}
          pagination={false}
          category="popular"
          path={ROUTE.TRENDING_PHONES}
        />
      </Box>
      <Box className="home-product-section section-bottom-gapping">
        <ProductBlock
          productDataArray={ProductData}
          sectionTitle="Upcoming Mobiles"
          columnCount={true}
          viewMoreLink={true}
          pagination={false}
          category="Upcoming"
          path={ROUTE.UPCOMING_TECHNOLOGIES}
        />
      </Box>
      <Box className="home-product-section section-bottom-gapping price-filter-product">
        <ProductBlock
          productDataArray={ProductData}
          sectionTitle="Best Phones by Price"
          columnCount={true}
          viewMoreLink={true}
          pagination={false}
          category=""
          path={ROUTE.MOBILE_PHONES}
        />
      </Box>
    </Grid>
  );
}
