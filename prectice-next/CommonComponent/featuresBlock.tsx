import { Box, Grid, Typography } from "@mui/material";
import { productFeatures } from "../Configuration/array";
import Image from "next/image";

const FeaturesBlock = () => {
  return (
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
                  <Image src={res.image} alt="" />
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
  );
};
export default FeaturesBlock;
