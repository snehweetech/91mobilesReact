import React, { Dispatch, SetStateAction } from "react";
import { Modal, Box, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import productImg1 from "../../Assets/Images/productImage/product_img2.jpg";
import SearchAutoComplete from "../CommonComponent/searchAutoComplete";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 590,
  bgcolor: "background.paper",
  border: "1px solid var(--blue)",
  boxShadow: "none",
  p: 0.5,
  overflowY: "auto",
  maxHeight: "90%",
};

const CompareModal = (props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClose = () => props.setOpen(false);
  let navigator = useNavigate();

  const modalDataSize = 2;
  const modalData = [
    {
      id: 1,
      name: "Asus ROG Phone 7 Ultimate Specs",
      price: "$70.00",
      image: productImg1,
    },
    { id: 2, name: "Samsung Galaxy S9", price: "$70.00", image: productImg1 },
    {
      id: 3,
      name: "OnePlus Nord CE 3 Lite 5G",
      price: "$70.00",
      image: productImg1,
    },
    { id: 4, name: "Blackview Tab 11 SE", price: "$70.00", image: productImg1 },
  ];
  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="compareModal"
      >
        <Box className="compare-modal-wrap" sx={style}>
          <Typography
            className="text-white bg-blue text-center font-semibold fs-20 rounded-1"
            p={0.75}
          >
            Add to Compare
          </Typography>
          <Box className="" py={3}>
            <Box className="compare-image-box">
              <Box
                className="border border-color-1 rounded-2 text-center m-auto p-1"
                maxWidth={150}
              >
                <Box className="compare-modal-product-img position-relative m-auto">
                  <img src={productImg1} alt="" />
                </Box>
                <Box className="w-100 text-start" pt={1}>
                  <Typography className="text-center fs-12">
                    Asus ROG Phone 7 Ultimate Specs
                  </Typography>
                  <Typography className="fs-14 text-blue font-semibold text-center">
                    $70.00
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="compare-items-box" my={2} px={2}>
              <Grid container className="" spacing={2}>
                <Grid item xs={6} sm={4}>
                  <Box className="border border-color-1 rounded-2 text-center h-100 p-1">
                    <SearchAutoComplete />
                    <Box
                      className="d-flex align-items-center"
                      minHeight={75}
                      my={1.5}
                    >
                      <Typography className="font-bold">
                        Add a phone to compare
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      className="remove-btn rounded-1 fs-12 border-none"
                    >
                      Remove
                    </Button>
                  </Box>
                </Grid>
                {modalData.slice(0, modalDataSize).map((res, i) => {
                  return (
                    <Grid item xs={6} sm={4} key={i}>
                      <Box className="border border-color-1 rounded-2 text-center p-1">
                        <SearchAutoComplete />
                        <Box className="d-sm-flex d-block " my={1.5}>
                          <Box className="compare-modal-product-img position-relative m-sm-0 m-auto">
                            <img src={res.image} alt={res.image} />
                          </Box>
                          <Box className="w-100 text-sm-start text-center detail-wrap">
                            <Typography className="fs-12" noWrap>
                              {res.name}
                            </Typography>
                            <Typography className="fs-14 text-blue font-semibold">
                              {res.price}
                            </Typography>
                          </Box>
                        </Box>
                        <Button
                          variant="contained"
                          className="remove-btn rounded-1 fs-12 border-none"
                        >
                          Remove
                        </Button>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            <Box className="btn-wrap text-center">
              <Button variant="outlined" onClick={() => props.setOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  navigator(`/compare`);
                }}
              >
                Compare
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CompareModal;
