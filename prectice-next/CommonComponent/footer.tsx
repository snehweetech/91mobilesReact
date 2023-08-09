import React from "react";
import LatestBlogs from "./latestBlogs";
import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import FooterLogo from "../Assets/Images/logo.png";
import FacebookIcon from "../Assets/Images/facebook.svg";
import TwitterIcon from "../Assets/Images/twitter.svg";
import InstagramIcon from "../Assets/Images/instagram.svg";
import LinkedInIcon from "../Assets/Images/linkedin.svg";
import mailIcon from "../Assets/Images/envelop.svg";

const Footer = () => {
  return (
    <>
      <LatestBlogs />
      <Box className="footer section-top-gapping">
        <Box
          className="footer-top bg-lightgray"
          pt={3.125}
          pb={0.625}
          borderBottom={"1px solid #EBEBEB"}
        >
          <Grid container className="container">
            <Grid item xs={12} sm={6} className="">
              <Box className="" mb={1.875}>
                <Link href="/">
                  <Image src={FooterLogo} alt="footer-logo" />
                </Link>
              </Box>
              <Typography
                className="text-black fs-14"
                maxWidth={{ xs: "100%", sm: 440 }}
                mb={1.875}
              >
                Smart Mobile Solution is the place where people go to discover
                information of New Featured Mobile. Helps you to solve mobile
                related queries. Smart Mobile Solution provides you the details
                of new App Features, Android features, IOS features very easily.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className="justify-content-center justify-content-sm-end"
              display={"flex"}
              mb={2.5}
            >
              <Box className="" mr={0.375}>
                <Box className="d-flex align-items-center mail-link" mb={1.2}>
                  <Image src={mailIcon} alt="email-icon" />
                  <Link
                    href="mailto:info@weetechsolution.com"
                    className="text-decoration-none text-black ml-1"
                  >
                    info@weetechsolution.com
                  </Link>
                </Box>
                <Typography
                  className="fs-20"
                  component="h3"
                  fontWeight={600}
                  mb={1.25}
                >
                  Follow Us
                </Typography>

                <ul className="social-links list-unstyled d-flex m-0 p-0">
                  <li className="item">
                    <Link
                      href="https://www.facebook.com/WeeTech-Solution-Pvt-Ltd-430951933632983/"
                      target="_blank"
                      aria-label="Facebook"
                      className="social-link d-block text-center rounded-1"
                    >
                      <Image src={FacebookIcon} alt="" />
                    </Link>
                  </li>
                  <li className="item">
                    <Link
                      href="https://twitter.com/WeetechSolution"
                      target="_blank"
                      aria-label="Twitter"
                      className="social-link d-block text-center rounded-1"
                    >
                      <Image src={TwitterIcon} alt="" />
                    </Link>
                  </li>
                  <li className="item">
                    <Link
                      href="https://www.instagram.com/weetechsolution/"
                      target="_blank"
                      aria-label="Instagram"
                      className="social-link d-block text-center rounded-1"
                    >
                      <Image src={InstagramIcon} alt="" />
                    </Link>
                  </li>
                  <li className="item">
                    <Link
                      href="http://in.linkedin.com/company/weetech-solution-pvt-ltd"
                      target="_blank"
                      aria-label="Linkedin"
                      className="social-link d-block text-center rounded-1"
                    >
                      <Image src={LinkedInIcon} alt="" />
                    </Link>
                  </li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="site-info" py={3}>
          <Grid container className="container align-items-center">
            <Grid
              item
              xs={12}
              sm={6}
              className="copy-write text-sm-start text-center"
              fontWeight={500}
            >
              © 2023 91mobiles
            </Grid>
            <Grid item xs={12} sm={6} className="footer-links">
              <ul className="list-unstyled d-flex justify-content-center justify-content-sm-end m-0">
                <li className="items">
                  <Link
                    className="text-decoration-none text-black font-thin"
                    href="/"
                  >
                    Privacy
                  </Link>
                </li>
                <li className="items">
                  <Link
                    className="text-decoration-none text-black font-thin"
                    href="/"
                  >
                    term &amp; conditions
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
