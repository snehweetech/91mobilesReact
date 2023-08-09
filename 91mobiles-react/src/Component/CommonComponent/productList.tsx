import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { productDataInterface } from "../../Interface/productInterface";

const ProductList = (props: {
  productDataArray: productDataInterface[];
  columnCount: boolean;
}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        {props?.productDataArray?.map(
          (
            res: {
              productName: string;
              productImage: string;
              price: string;
              scoreTag: string;
            },
            i: number
          ) => {
            return (
              <Grid item md={props.columnCount ? 3 : 4} sm={4} xs={6} key={i}>
                <Box
                  className="inner-wrap"
                  sx={{ py: { sm: 2, xs: 1 }, px: { sm: 1, xs: 0.5 } }}
                >
                  <Box className="product-image">
                    <Link
                      className="image-link d-block position-relative text-center overflow-hidden"
                      href="#"
                    >
                      <img src={res.productImage} alt="" />
                    </Link>
                  </Box>
                  <Box className="product-detail" mt={1.5}>
                    <Typography className="product-name fs-18 " noWrap>
                      <Link
                        href=""
                        className="text-decoration-none"
                        fontWeight={500}
                      >
                        {res.productName}
                      </Link>
                    </Typography>
                    <Typography
                      className="product-score-tag fs-14 text-white rounded-4 text-center d-none"
                      bgcolor={"#72A02B"}
                      sx={{
                        padding: `${res.scoreTag}` === "" ? 0 : "3px 10px",
                        fontWeight: 500,
                      }}
                    >
                      {res.scoreTag}
                    </Typography>
                    <Typography className="product-price text-blue font-semibold d-none">
                      {res.price}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default ProductList;
