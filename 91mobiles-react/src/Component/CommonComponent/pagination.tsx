import React from "react";
import { Pagination } from "@mui/material";
import { ProductData } from "../../Units/array";

const PaginationBlock = (props: any) => {
  return (
    <>
      <Pagination
        count={Math.ceil(ProductData.length / props.pageSize)}
        page={props.page}
        onChange={props.handleChange}
        shape="rounded"
        className="pagination-block text-center border border-color-1 p-1"
        sx={{
          display: ProductData.length >= 12 && props.pagination ? "" : "none",
          //display: ProductData.length <= 8 ? "none" : "block",
          marginTop: 3,
        }}
      />
    </>
  );
};

export default PaginationBlock;
