import React from "react";
import { Box, Grid } from "@mui/material";
import ProductBlock from "./productBlock";
import { ProductData } from "../../Units/array";

const PrimaryContent = () => {
  return (
    <Box className="primary-content">
      <Box className="product-list-wrap text-center ">
        <Grid container spacing={2}>
          <ProductBlock
            productDataArray={ProductData}
            columnCount={false}
            sectionTitle=""
            viewMoreLink={false}
            pagination={true}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default PrimaryContent;
