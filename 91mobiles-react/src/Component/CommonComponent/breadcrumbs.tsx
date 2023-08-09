/* eslint-disable */
import React from "react";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink, RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import MobilePhons from "../mobilePhons";
import PageNotFound404 from "../pageNotFound404";
import { Box } from "@mui/material";
const Breadcrumbs = () => {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: "",
      children: [
        { index: true, element: <MobilePhons /> },
        /* {
          path: "/courses",
          element: <MobilePhons />,
          children: [
            { index: true, element: "" },
            { path: "/courses/:id", element: <MobilePhons /> },
          ],
        }, */
        { path: "*", element: <PageNotFound404 /> },
      ],
    },
  ];

  let element = useRoutes(routes);
  const breadcrumbs = useBreadcrumbs();

  return (
    <Box className="breadcrumbs section-bottom-gapping">
      <Box
        className="breadcrumbs-wrap bg-lightgray border-bottom border-color-1"
        py={2.2}
      >
        <Box className="container">
          <nav className="breadcrumbs-inner">
            {breadcrumbs.map(({ breadcrumb, match }, index) => (
              <>
                <NavLink
                  className="text-decoration-none"
                  key={match.pathname}
                  to={match.pathname}
                >
                  {breadcrumb}
                </NavLink>
                {index !== breadcrumbs.length - 1 && "/"}
              </>
            ))}
          </nav>
        </Box>
      </Box>
    </Box>
  );
};

export default Breadcrumbs;
