import React from "react";
import { Box, TextField, Button } from "@mui/material";

const HeaderSearch = () => {
  return (
    <>
      <Box className="search-form" display={"flex"} alignItems={"center"}>
        <TextField
          id="filled-search"
          placeholder="Search …"
          type="search"
          sx={{
            borderRadius: "5px 0px 0px 5px",
            border: "2px solid #EBEBEB !important",
            "& input": {
              padding: "13px 20px",
              borderRadius: "5px 0px 0px 5px",
            },
            "& fieldset": {
              opacity: 0,
            },
          }}
        />

        <Button
          variant="contained"
          className=""
          sx={{
            borderRadius: "0 5px 5px 0",
            padding: "11.5px 32px !important",
            minWidth: "auto",
          }}
        >
          search
        </Button>
      </Box>
    </>
  );
};

export default HeaderSearch;
