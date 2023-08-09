import { Box, Typography, Slider } from "@mui/material";
import { useState } from "react";

const LeftSidebarSliderFilter = () => {
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
    <>
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
    </>
  );
};
export default LeftSidebarSliderFilter;
