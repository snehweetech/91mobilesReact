import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { ProductData } from "../Configuration/array";

const LeftSidebarBrandBlock = () => {
  // Create a Set to store unique brand categories
  const brandCategories = new Set();
  // Iterate over the ProductData array
  for (const product of ProductData) {
    // Add the brand category to the Set
    brandCategories.add(product.brandName);
  }
  // Convert the Set to an array
  const uniqueBrandCategories = Array.from(brandCategories);

  return (
    <>
      <Typography className="sidebar-title fs-20 font-semibold text-capitalize">
        Brands
      </Typography>
      <Box className="block-wrap">
        <ul className="list-unstyled ">
          {uniqueBrandCategories.map((brandItem: any, i) => {
            return (
              <li className="border-bottom border-color-1 m-0" key={i}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={brandItem}
                  className="m-0"
                />
              </li>
            );
          })}
        </ul>
      </Box>
    </>
  );
};
export default LeftSidebarBrandBlock;
