import { Box, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { productDataInterface } from "../Interface/interface";
import Image from "next/image";

const ProductList = (props: {
  productDataArray: productDataInterface[];
  columnCount: boolean;
  category: string;
  viewMoreLink: boolean;
}) => {
  const [product, setProduct] = useState<productDataInterface[]>();

  const upcommingDataHandle = () => {
    //console.log("ProductData", props.productDataArray);
    const results: any = props.productDataArray.filter((productDataInterface) =>
      productDataInterface.category
        .toLowerCase()
        .includes(props.category.toLowerCase())
    );
    setProduct(results);
    //console.log("resulte", results);
  };

  useEffect(() => {
    upcommingDataHandle();
    //console.log("props:", props.category);
  }, [props]);

  useEffect(() => {
    //console.log(product);
  }, [product]);
  return (
    <Box>
      <Grid container spacing={2}>
        {product?.map(
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
                  sx={{
                    py: { sm: 2, xs: 1 },
                    px: { sm: 1, xs: 0.5 },
                    /* display: i >= 8 && props.category !== "" ? "none" : "", */
                    display: i >= 8 && props.viewMoreLink ? "none" : "",
                  }}
                >
                  <Box className="product-image">
                    <Link
                      className="image-link d-block position-relative text-center overflow-hidden"
                      href="#"
                    >
                      <Image src={res.productImage} alt={res.productName} />
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
