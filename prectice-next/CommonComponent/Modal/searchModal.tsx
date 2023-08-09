import React, { Dispatch, SetStateAction } from "react";

import { Modal, Box, Drawer } from "@mui/material";
import HeaderSearch from "../headerSearch";

const style = {
  position: "absolute" as "absolute",
  top: "0",
  left: "0",
  right: 0,
  transform: "translateY(72px)",
  width: "100%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: "none",
  padding: "10px",
  transition: "all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1)",
  outline: "none",
  /* top: "85px", */
};

const SearchModal = (props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClose = () => props.setOpen(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="searchmodal"
      >
        <Box className="search-modal-wrap" sx={style}>
          <HeaderSearch />
        </Box>
      </Modal>
      {/*  <Drawer
        open={props.open}
        anchor={"bottom"}
        onClose={handleClose}
        className="searchmodal"
        sx={{
          "& .MuiDrawer-paper": {
            top: "75px",
          },
        }}
      >
        <Box className="search-modal-wrap" sx={style}>
          <HeaderSearch />
        </Box>
      </Drawer> */}
    </div>
  );
};

export default SearchModal;
