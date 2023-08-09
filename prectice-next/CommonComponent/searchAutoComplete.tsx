import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import productImage from "../Assets/Images/productImage/product_img1.jpg";
import Image from "next/image";

const SearchAutoComplete = () => {
  const searchdata = [
    {
      id: 1,
      name: "Asus ROG Phone 7 Ultimate Specs",
      price: "$70.00",
      image: productImage,
    },
    { id: 2, name: "Samsung Galaxy S9", price: "$70.00", image: productImage },
    {
      id: 3,
      name: "OnePlus Nord CE 3 Lite 5G",
      price: "$70.00",
      image: productImage,
    },
    {
      id: 4,
      name: "Blackview Tab 11 SE",
      price: "$70.00",
      image: productImage,
    },
  ];

  const handleOnSearch = (string: any, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result: any) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item: any) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item: any) => {
    return (
      <Box className="d-flex ">
        <Box className="position-relative d-block searchBlock-image">
          <Image src={item.image} alt="" />
        </Box>
        <Box className="searchBlock-detail">
          <Typography className=" fs-12" noWrap>
            {item.name}
          </Typography>
          <Typography className="fs-12" noWrap>
            {item.price}
          </Typography>
        </Box>
      </Box>
    );
  };
  return (
    <Box className="autocomplete-search-box">
      <ReactSearchAutocomplete
        items={searchdata}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
        showIcon={false}
        className="search-field"
      />
    </Box>
  );
};

export default SearchAutoComplete;
