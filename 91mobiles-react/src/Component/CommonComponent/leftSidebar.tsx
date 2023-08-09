import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Typography,
  Checkbox,
  Slider,
} from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { BrandData } from "../../Units/array";

const LeftSidebar = () => {
  const minDistance = 10;
  const [value2, setValue2] = useState<number[]>([20, 37]);

  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue as number[]);
    }
  };
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
        <Typography className="sidebar-title fs-20 font-semibold text-capitalize">
          Brands
        </Typography>
        <Box className="block-wrap">
          <ul className="list-unstyled ">
            <li className="border-bottom border-color-1 m-0">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Apple"
                className="m-0"
              />
            </li>
            {BrandData.map((data, i) => {
              return (
                <li className="border-bottom border-color-1 m-0" key={i}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={data.brandName}
                    className="m-0"
                  />
                </li>
              );
            })}
          </ul>
        </Box>
      </Box>
      <Box className="sidebar-block" mt={3}>
        <Typography
          className="sidebar-title fs-20 font-semibold text-capitalize"
          mb={2}
        >
          Product categories
        </Typography>
        <Box className="block-wrap">
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ChevronRightIcon />}
            defaultExpandIcon={<ExpandMoreIcon />}
            sx={{ flexGrow: 1, overflowY: "auto" }}
          >
            <TreeItem
              nodeId="1"
              label="INTERNAL STORAGE"
              className="border-bottom border-color-1"
            >
              <FormControlLabel
                control={<Checkbox />}
                label="16 20.9 MP"
                className="m-0 fs-14"
              />
            </TreeItem>
            <TreeItem
              nodeId="3"
              label="BATTERY CAPACITY"
              className="border-bottom border-color-1"
            >
              <FormControlLabel
                control={<Checkbox />}
                label="16 20.9 MP"
                className="m-0"
              />
            </TreeItem>
            <TreeItem
              nodeId="4"
              label="SECONDARY CAMERA"
              className="border-bottom border-color-1"
            >
              <FormControlLabel
                control={<Checkbox />}
                label="16 20.9 MP"
                className="m-0"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="21 MP & Above"
                className="m-0"
              />
            </TreeItem>
          </TreeView>
        </Box>
      </Box>
      <Box className="sidebar-block" mt={3}>
        <Typography className="sidebar-title fs-20 font-semibold text-capitalize">
          Filter by price
        </Typography>
        <Box className="block-wrap" mt={1.5}>
          <Slider
            getAriaLabel={() => "Minimum distance shift"}
            value={value2}
            onChange={handleChange2}
            valueLabelDisplay="auto"
            disableSwap
          />
          <Box
            className="d-flex justify-content-between align-items-center"
            mt={1.5}
          >
            <Typography
              className="bg-black rounded-4 text-white fs-14"
              padding={"3px 15px 1px"}
            >
              Filter
            </Typography>
            <Typography className="fs-14">$0 - $500</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSidebar;
