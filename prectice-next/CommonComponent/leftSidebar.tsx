import React, { useState } from "react";
import { Box } from "@mui/material";
import LeftSidebarBrandBlock from "./leftSidebarBarndBlock";
import LeftSidebarCategoryFilter from "./leftSidebarCategoryFilter";
import LeftSidebarSliderFilter from "./leftSidebarSliderFilter";

const LeftSidebar = () => {
  return (
    <Box
      className="sidebar bg-lightgray"
      mb={4}
      sx={{
        p: { md: 2.5, xs: 2 },
        "& .block-wrap": {
          "& ul > li": {
            padding: "8px 0",
            "& .MuiButtonBase-root": {
              padding: "0 10px 0 0",
              "& svg": {
                color: "#C3C3C3",
              },
              "&.Mui-checked": {
                "& svg": {
                  color: "var(--blue)",
                },
              },
            },
            "& .MuiTypography-root": {
              fontSize: "var(--baseFont)",
            },
          },
        },
      }}
    >
      <Box className="sidebar-block">
        <LeftSidebarBrandBlock />
      </Box>
      <Box className="sidebar-block" mt={3}>
        <LeftSidebarCategoryFilter />
      </Box>
      <Box className="sidebar-block" mt={3}>
        <LeftSidebarSliderFilter />
      </Box>
    </Box>
  );
};

export default LeftSidebar;
