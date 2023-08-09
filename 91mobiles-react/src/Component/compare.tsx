import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";
import img1 from "../Assets/Images/productImage/product_img1.jpg";
import img2 from "../Assets/Images/productImage/product_img2.jpg";

const Compare = () => {
  interface TableData {
    [key: string]: any;
  }
  const compareData: TableData[] = [
    {
      id: 1,
      productImage: img1,
      productName: "Asus ROG Phone 7 Ultimate",
      price: "$70.00",
      dispaly: {
        size: "6.8 inches",
        resolution: "2448 x 2080 pixels, 20.4:9 ratio",
      },
      hardwere: {
        systemChip: "Qualcomm Snapdragon 8 Gen 2",
        processor: "Octa-core, 1x 3.2GHz Kryo Prime + 4x 2.8GHz Kryo Gold",
      },
      battery: { Capacity: "6000 mAh", type: "Li - Ion, Not user replaceable" },
      camera: { rear: "Triple camera", mainCamera: "50 MP" },
      design: {
        dimensions: "6.81 x 3.03 x 0.41 inches (173 x 77 x 10.3 mm)",
        Weight: "8.43 oz (239.0 g)",
      },
    },
    {
      id: 2,
      productImage: img2,
      productName: "Apple iPhone 13",
      price: "$70.00",
      dispaly: {
        size: "6.1 inches",
        resolution: "2532 x 1170 pixels, 19.5:9 ratio",
      },
      hardwere: {
        systemChip: "Apple A15 Bionic (5 nm)",
        processor: "Hexa-core, 2x3.23 GHz Avalanche GHz Blizzard, 64-bit",
      },
      battery: { Capacity: "3227 mAh", type: "Li - Ion, Not user replaceable" },
      camera: {
        rear: "Dual camera",
        mainCamera: "50 12 MP (Sensor-shift OIS, PDAF)",
      },
      design: {
        dimensions:
          "X X 5.78 × 2.81 × 0.30 inches (146.7 × 71.5 x 7.65 mm ) , thickness with camera 0.40",
        Weight: "6.14 oz (174.0 g)",
      },
    },
  ];

  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
    const data = compareData.map((item) => {
      const keys = Object.keys(item);
      const values = Object.values(item);
      return keys.reduce((acc: TableData, key: string, index: number) => {
        acc[key] = values[index];
        return acc;
      }, {} as TableData);
    });
    setTableData(data);
  }, []);

  return (
    <Box className="compare-page">
      <Box className="border border-color-1">
        <Box className="title-box border-bottom border-color-1 p-2">
          <Typography className="fs-24 font-semibold">
            Compare Mobile Phones
          </Typography>
          <Typography className="">
            Compare phone and tablet specifications of up to three devices at
            once.
          </Typography>
        </Box>
        <Box className="compare-box p-2">
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell></TableCell>
                  {tableData.map((item, index) => (
                    <TableCell key={index} className="text-center">
                      <Box className="position-relative d-block compare-table-img-wrap">
                        <img src={item.productImage} alt="" />
                      </Box>
                      <Box className="font-semibold">{item.productName}</Box>
                      <Box className="text-blue font-semibold">
                        {item.price}
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>
                {tableData.length > 0 &&
                  Object.entries(tableData[0]).map(([key, value], i) => (
                    <React.Fragment key={i}>
                      <TableRow>
                        <TableCell className="font-semibold">{key}</TableCell>
                        {tableData.map((item, index) => (
                          <TableCell key={index}>
                            {typeof item[key] === "object" &&
                            !Array.isArray(item[key])
                              ? Object.entries(item[key]).map(
                                  ([nestedKey, nestedValue], j) => (
                                    <div key={j}>
                                      <div>{nestedKey}</div>
                                      <div>
                                        {nestedValue as React.ReactNode}
                                      </div>
                                    </div>
                                  )
                                )
                              : item[key]}
                          </TableCell>
                        ))}
                      </TableRow>
                      {typeof value === "object" && Array.isArray(value) && (
                        <React.Fragment>
                          {value.map((nestedItem, nestedIndex) => (
                            <React.Fragment key={nestedIndex}>
                              <TableRow>
                                <TableCell></TableCell>
                                {tableData.map((item, index) => (
                                  <TableCell key={index}>
                                    {nestedItem[key] ? nestedItem[key] : "-"}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </React.Fragment>
                          ))}
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Compare;
