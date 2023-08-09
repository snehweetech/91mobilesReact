import React, { useState } from "react";
import { Container, Box, Button, Link } from "@mui/material";
import Logo from "../../Assets/Images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import HeaderSearch from "./headerSearch";
import SearchModal from "../Modal/searchModal";
import { ROUTE } from "../../Interface/commonIterface";

const Header = (props: { page: string }) => {
  const headerMenu = [
    { id: 1, menutitle: "home", menuURL: "" },
    { id: 2, menutitle: "mobile phones", menuURL: `${ROUTE.MOBILE_PHONES}` },
    {
      id: 3,
      menutitle: "trending phones",
      menuURL: `${ROUTE.TRENDING_PHONES}`,
    },
    {
      id: 4,
      menutitle: "featured phones",
      menuURL: `${ROUTE.FEATURED_PHONES}`,
    },
    {
      id: 5,
      menutitle: "upcoming technologies",
      menuURL: `${ROUTE.UPCOMING_TECHNOLOGIES}`,
    },
    { id: 6, menutitle: "blogs", menuURL: `${ROUTE.BLOGS}` },
  ];

  const [searchToggle, setSearchToggle] = useState(false);

  const [menuShow, setMenuShow] = useState(false);
  return (
    <Box className="header">
      <Container>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={{ sm: 3, xs: "21px" }}
        >
          <Box>
            <Link href="/">
              <img src={Logo} alt="" />
            </Link>
          </Box>
          <Box className="d-flex align-items-center">
            <Box className="header-search d-md-block d-none">
              <HeaderSearch />
            </Box>
            <Button
              className="menu-toggle cursor-pointer text-black d-block d-md-none position-relative"
              onClick={() => setMenuShow(true)}
            >
              <span></span>
            </Button>
            <Box
              className="search-toggle cursor-pointer d-block d-md-none"
              onClick={() => setSearchToggle(true)}
            >
              <SearchIcon />
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        className={` header-nav nav ${menuShow ? "menu-open" : ""}`}
        onClick={() => setMenuShow(false)}
      >
        <Box className="header-nav-wrapper bg-blue" pt={1.88} pb={1.8}>
          <Button
            className="menu-close-toggle text-white cursor-pointer d-block d-md-none"
            onClick={() => setMenuShow(false)}
          >
            <CloseIcon />
          </Button>

          <ul className="list-unstyled container d-md-flex d-block">
            {headerMenu.map((data, i) => {
              return (
                <li
                  key={i}
                  className={`menu-item ${
                    props.page === `${data.menuURL}` ? "active" : ""
                  }`}
                >
                  <Link
                    href={`/${data.menuURL}`}
                    underline="none"
                    className="text-white text-uppercase font-semibold position-relative"
                  >
                    {data.menutitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Box>
      </Box>
      <SearchModal open={searchToggle} setOpen={setSearchToggle} />
    </Box>
  );
};

export default Header;
