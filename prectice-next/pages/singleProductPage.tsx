import ComparisonsBlock from "@/CommonComponent/comparisonsBlock";
import FeaturesBlock from "@/CommonComponent/featuresBlock";
import ProductPageSlider from "@/CommonComponent/productPageSlider";
import ProductTabs from "@/CommonComponent/productTabs";
import SingleProductDetailBlock from "@/CommonComponent/singleProductDetailBlock";
import { Box, Grid } from "@mui/material";
import { useState } from "react";

const SingleProductPage = () => {
  return (
    <div>
      <Box className="">
        <Grid container className="section-bottom-gapping">
          <Grid item xs={12} md={4.5}>
            <ProductPageSlider />
          </Grid>
          <Grid
            item
            xs={12}
            md={7.5}
            pl={{ md: 5, xs: 0 }}
            pt={{ xs: 3, md: 0 }}
          >
            <SingleProductDetailBlock />
          </Grid>
        </Grid>
      </Box>
      <FeaturesBlock />
      <ComparisonsBlock />
      <ProductTabs />
    </div>
  );
};
export default SingleProductPage;
