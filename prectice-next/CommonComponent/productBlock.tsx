import React, { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import ProductList from "./productList";
import { productDataInterface } from "../Interface/interface";
import PaginationBlock from "../CommonComponent/pagination";

const ProductBlock = (props: {
  productDataArray: any;
  columnCount: boolean;
  sectionTitle: string;
  viewMoreLink: boolean;
  pagination: Boolean;
  category: string;
  path: String;
}) => {
  const firstIndex = 0;
  const [pageSize, setPageSize] = useState(12);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(
    props.productDataArray?.slice(firstIndex, pageSize)
  );

  useEffect(() => {
    setData(props.productDataArray?.slice(0, pageSize));
  }, [pageSize]);

  const handleChange = (event: any, value: any) => {
    setPage(value);
    setData(
      props.productDataArray?.slice(
        firstIndex + pageSize * (value - 1),
        pageSize * value
      )
    );
  };

  return (
    <Box className="product-list ">
      <Typography
        className="home-section-title fs-24 font-semibold text-center"
        py={1.5}
        mb={5}
        display={props.sectionTitle === "" ? "none" : "block"}
      >
        {props.sectionTitle}
      </Typography>
      <Box className="product-list-wrap text-center">
        <ProductList
          productDataArray={props.pagination ? data : props.productDataArray}
          columnCount={props.columnCount}
          category={props.category}
          viewMoreLink={props.viewMoreLink}
        />
      </Box>
      <Box
        className="text-center"
        mt={5}
        display={props.viewMoreLink ? "block" : "none"}
      >
        <Link
          href={`/${props.path}`}
          className="text-blue font-semibold text-decoration-underline"
        >
          View More
        </Link>
      </Box>
      <PaginationBlock
        array={props.productDataArray}
        pageSize={pageSize}
        page={page}
        handleChange={handleChange}
        pagination={props.pagination}
      />
    </Box>
  );
};

export default ProductBlock;
