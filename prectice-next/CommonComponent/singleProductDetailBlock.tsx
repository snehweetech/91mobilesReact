import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Image from "next/image";
import colorOption1 from "../Assets/Images/singleProduct/color-option1.svg";
import colorOption2 from "../Assets/Images/singleProduct/color-option2.svg";
import colorOption3 from "../Assets/Images/singleProduct/color-option3.svg";
import colorOption4 from "../Assets/Images/singleProduct/color-option4.svg";
import CompareModal from "./Modal/compareModal";

const SingleProductDetailBlock = () => {
  const [value, setValue] = useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  return (
    <>
      <Box className="d-sm-flex d-block justify-content-between" mb={1}>
        <Typography className="fs-24 font-bold">
          Asus ROG Phone 7 Ultimate Specs
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setCompareModalOpen(true)}
          sx={{ height: "40px", padding: "5px 15px" }}
        >
          Compare
        </Button>
      </Box>

      <Typography
        className="product-score-tag fs-14 text-white rounded-4 text-center d-inline-block"
        bgcolor={"#72A02B"}
        fontWeight={500}
        sx={{
          padding: "3px 10px",
        }}
      >
        95% SPEC SCORE
      </Typography>
      <Typography className="fs-24 font-bold text-blue" my={1}>
        $70.00
      </Typography>
      <Divider sx={{ mt: 2, mb: 1 }} />
      <Box className="color-option" my={2}>
        <Typography className="option-label fs-14 font-semibold" mb={1}>
          Color
        </Typography>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="Black"
              control={<Radio />}
              label={<Image src={colorOption1} alt="black" />}
              className="position-relative p-0"
            />
            <FormControlLabel
              value="Gray"
              control={<Radio />}
              label={<Image src={colorOption2} alt="gray" />}
              className="position-relative p-0"
            />
            <FormControlLabel
              value="Red"
              control={<Radio />}
              label={<Image src={colorOption3} alt="red" />}
              className="position-relative p-0"
            />
            <FormControlLabel
              value="Yellow"
              control={<Radio />}
              label={<Image src={colorOption4} alt="yellow" />}
              className="position-relative p-0"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box className="Variants-option" my={2}>
        <Typography className="option-label fs-14 font-semibold" mb={1}>
          Variants
        </Typography>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            value="128GB"
            control={<Radio />}
            label="8 GB RAM, 128 GB"
            className="position-relative"
          />
          <FormControlLabel
            value="256GB"
            control={<Radio />}
            label="8 GB RAM, 256 GB"
            className="position-relative"
          />
        </RadioGroup>
      </Box>
      <CompareModal open={compareModalOpen} setOpen={setCompareModalOpen} />
    </>
  );
};
export default SingleProductDetailBlock;
