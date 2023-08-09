import React from "react";
import { Box, Grid } from "@mui/material";
import LeftSidebar from "./CommonComponent/leftSidebar";
import PrimaryContent from "./CommonComponent/primaryContent";

function MobilePhons() {
  return (
    <Box className="product-list-page">
      <Grid container className="" spacing={3}>
        <Grid item xs={12} md={3.5} lg={3}>
          <LeftSidebar />
        </Grid>
        <Grid item xs={12} md={8.5} lg={9}>
          <PrimaryContent />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MobilePhons;
