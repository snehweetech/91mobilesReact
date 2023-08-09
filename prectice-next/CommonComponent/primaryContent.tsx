import React from "react";
import { Box, Grid } from "@mui/material";
import { ProductData } from "../Configuration/array";
import ProductBlock from "./productBlock";
import { useRouter } from "next/router";
import { ROUTE } from "@/Interface/interface";
import PageNotFound404 from "@/pages/pageNotFound404";

const PrimaryContent = () => {
  const filteredData = ProductData.filter(
    (product) => product.category === "popular"
  );
  const upCommingData = ProductData.filter(
    (product) => product.category === "Upcoming"
  );
  const router = useRouter();

  return (
    <Box className="primary-content">
      <Box className="product-list-wrap text-center ">
        <Grid>
          {router.pathname === `/${ROUTE.MOBILE_PHONES}` ? (
            <ProductBlock
              productDataArray={ProductData}
              columnCount={false}
              sectionTitle=""
              viewMoreLink={false}
              pagination={true}
              category=""
              path=""
            />
          ) : router.pathname === `/${ROUTE.TRENDING_PHONES}` ? (
            <ProductBlock
              productDataArray={filteredData}
              sectionTitle=""
              columnCount={false}
              viewMoreLink={false}
              pagination={true}
              category="popular"
              path=""
            />
          ) : router.pathname === `/${ROUTE.UPCOMING_TECHNOLOGIES}` ? (
            <ProductBlock
              productDataArray={upCommingData}
              sectionTitle=""
              columnCount={false}
              viewMoreLink={false}
              pagination={true}
              category="Upcoming"
              path=""
            />
          ) : (
            <PageNotFound404 />
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default PrimaryContent;
