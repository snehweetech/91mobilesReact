import { Box, Typography } from "@mui/material";
import React from "react";
import BlogImg1 from "../Assets/Images/blog1.jpg";
import BlogImg2 from "../Assets/Images/blog2.jpg";
import BlogImg3 from "../Assets/Images/blog3.jpg";
import BlogImg4 from "../Assets/Images/blog4.jpg";
import Image from "next/image";
import Link from "next/link";

const LatestBlogs = () => {
  const blogData = [
    {
      blogTime: "3 Hours Ago",
      title: "iQ00 Z7 5G review: a solid option priced south of Rs 20k",
      image: BlogImg1,
    },
    {
      blogTime: "4 Hours Ago",
      title: "Vivo S17 Pro camera specs tipped: 50MP Sony IMX766V expected",
      image: BlogImg2,
    },
    {
      blogTime: "1 Day Ago",
      title:
        "Xiaomi 12 Pro available for as low as Rs 45,999: should you buy the phone?",
      image: BlogImg3,
    },
    {
      blogTime: "1 Day Ago",
      title:
        "Ace unveils new high-performance laptops: Predator Triton 17 X, Helios Neo 16, Swift X 16 and more",
      image: BlogImg4,
    },
  ];
  return (
    <Box
      className="latest-blogs section-top-gapping"
      borderTop={"1px solid #E0E0E0"}
    >
      <Box className="container">
        <Typography
          component={"h2"}
          variant="h2"
          className="block-title fs-24 font-semibold"
          mb={1}
        >
          Latest Blog
        </Typography>
        <Box className="blog-items-wrap d-inline-block">
          {blogData.map((data, i) => {
            return (
              <Box
                key={i}
                className="blog-card float-none float-md-start w-100 w-md-50"
              >
                <Box
                  className="blog-card-inner d-flex flex-wrap rounded-4 border border-color-2"
                  p={1.25}
                >
                  <Box className="img-wrap">
                    <Image src={data.image} alt="blog-img" className="w-100" />
                  </Box>
                  <Box className="blog-detail">
                    <Typography
                      className="fs-14 font-semibold"
                      color={"#8a8a98"}
                    >
                      {data.blogTime}
                    </Typography>
                    <Link
                      href="/"
                      className="font-semibold fs-18 text-decoration-none blog-title"
                    >
                      {data.title}
                    </Link>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box className="text-center" mt={3}>
          <Link
            className="font-semibold text-decoration-underline text-blue"
            href=""
          >
            View More
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LatestBlogs;
