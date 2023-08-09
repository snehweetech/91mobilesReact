import "./Assets/CSS/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "@mui/material";
import Theme from "./Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MainContent from "./Component/CommonComponent/mainContent";
import { ROUTE } from "./Interface/commonIterface";
import { appContext } from "./UseContext/appContext";
import { productDataInterface } from "./Interface/productInterface";
import { ProductData } from "./Units/array";

function App() {
  const [searchResults, setSearchResults] = useState<string>("");
  const [filterData, setFilterData] = useState<productDataInterface[]>([]);
  useEffect(() => {
    console.log("filterData", filterData);
  }, [filterData]);
  // useEffect(() => {
  //   let data = ProductData;
  //   const results: any = data.filter((res) =>
  //     res.productName.toLowerCase().includes(searchResults.toLowerCase())
  //   );
  //   setFilterData(results);
  // }, [searchResults, ProductData]);
  return (
    <div className="App">
      <appContext.Provider
        value={{
          searchResults: searchResults,
          setSearchResults,
          setFilterData,
          filterData,
        }}
      >
        <ThemeProvider theme={Theme}>
          <BrowserRouter>
            <Routes>
              <Route
                path={`/${ROUTE.MOBILE_PHONES}`}
                element={<MainContent page={ROUTE.MOBILE_PHONES} />}
              />
              <Route
                path={`/${ROUTE.TRENDING_PHONES}`}
                element={<MainContent page={ROUTE.TRENDING_PHONES} />}
              />
              <Route
                path={`/${ROUTE.FEATURED_PHONES}`}
                element={<MainContent page={ROUTE.FEATURED_PHONES} />}
              />
              <Route
                path={`/${ROUTE.UPCOMING_TECHNOLOGIES}`}
                element={<MainContent page={ROUTE.UPCOMING_TECHNOLOGIES} />}
              />
              <Route
                path={`/${ROUTE.COMPARE}`}
                element={<MainContent page={ROUTE.COMPARE} />}
              />
              <Route
                path={`/${ROUTE.SEARCH}`}
                element={<MainContent page={ROUTE.SEARCH} />}
              />
              <Route path="/" element={<MainContent page={"/"} />} />
              <Route
                path="*"
                element={<MainContent page={"/PageNotFound404"} />}
              />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </appContext.Provider>
    </div>
  );
}

export default App;
export { appContext };
