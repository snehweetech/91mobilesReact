import React from "react";
import { Container, Box } from "@mui/material";
import MobilePhons from "../mobilePhons";
import TrendingPhones from "../trendingPhones";
import Home from "../home";
import UpcomingTechnologies from "../upcomingTechnologies";
import FeaturedPhones from "../featuredPhones";
import Header from "./header";
import Footer from "./footer";
import PageNotFound404 from "../pageNotFound404";
import Breadcrumbs from "./breadcrumbs";
import Compare from "../compare";
import { ROUTE } from "../../Interface/commonIterface";
import SearchPage from "../searchPage";

const MainContent = (props: { page: string }) => {
  return (
    <>
      <Header page={props.page} />
      {props.page === "/" ? "" : <Breadcrumbs />}
      <Box className="main-content section-bottom-gapping" minHeight={400}>
        <Container>
          {props.page === `${ROUTE.MOBILE_PHONES}` ? (
            <MobilePhons />
          ) : props.page === `${ROUTE.TRENDING_PHONES}` ? (
            <TrendingPhones />
          ) : props.page === `${ROUTE.FEATURED_PHONES}` ? (
            <FeaturedPhones />
          ) : props.page === `${ROUTE.UPCOMING_TECHNOLOGIES}` ? (
            <UpcomingTechnologies />
          ) : props.page === `${ROUTE.COMPARE}` ? (
            <Compare />
          ) : props.page === `${ROUTE.SEARCH}` ? (
            <SearchPage />
          ) : props.page === "/" ? (
            <Home />
          ) : (
            <PageNotFound404 />
          )}
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default MainContent;
