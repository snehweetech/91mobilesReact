import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { productDataInterface } from "../Interface/productInterface";
import { ProductData, searchData } from "../Units/array";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<productDataInterface[]>(
    []
  );
  const [error, setError] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (value.trim() === "") {
      setError("Please enter a search term.");
      setSearchResults([]);
      return;
    }

    const results = ProductData.filter((productDataInterface) => {
      for (const key in productDataInterface) {
        const property =
          productDataInterface[key as keyof productDataInterface]; // Type assertion
        if (
          property &&
          typeof property === "string" &&
          property.toLowerCase().includes(value.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });

    if (results.length === 0) {
      setError("No results found.");
    } else {
      setError("");
    }

    setSearchResults(results);
  };

  return (
    <Box>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      {error && <p>{error}</p>}
      <ul>
        {searchResults.map((product, id) => (
          <li key={id}>
            <img src={product.productImage} alt={product.productName} />
            <p>{product.productName}</p>
            <p>{product.scoreTag}</p>
            <p>{product.price}</p>
            {/*  <p>{product.brand}</p> */}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default SearchPage;
