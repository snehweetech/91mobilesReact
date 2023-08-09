import React, { useEffect, useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductTabs = () => {
  interface TableData {
    [key: string]: any;
  }
  const productTabData: TableData[] = [
    {
      id: 1,
      display: {
        Size: "6.8 inches",
        Resolution: "2448 × 2080 pixels, 20.4:9 ratio, 474 PPI",
        Technology: "AMOLED",
        RefreshRate: "165HZ",
        ScreenToBody: "109.93 %",
        Features:
          "HDR support, Scratch-resistant glass (Corning Gorilla Glass Victus), Ambient light sensor, Proximity sensor",
      },
      hardware: {
        SystemChip: "Qualcomm Snapdragon 8 Gen 2 SM8550 (4 nm)",
        Processor:
          "Octa-core, 1x 3.2GHz Kryo Prime + 4× 2.8GHZ Kryo Gold + 3x 2.0GHz Kryo Silver",
        GPU: "Adreno 740",
        RAM: "16GB LPDDR5",
        InternalStorage: "512GB (UFS 4.0), not expandable",
        DeviceType: "Smartphone",
        OS: "Android (13)",
      },
      battery: {
        Capacity: "6000 mAh",
        Type: "Li Ion, Not user replaceable",
        Charging: "Qualcomm Quick Charge",
        MaxChargeSpeed: "Wired: 65.0W",
      },
      camera: {
        Rear: "Triple camera",
        MainCamera: "50 MP",
        Specifications: "Sensor size: 1/1.56; Pixel size: 1.0 um",
        SecondCamera: "13 MP (Ultra-wide)",
        ThirdCamera: "8 MP (Macro)",
        VideoRecording:
          "7680×4320 (8K UHD) (24 fps), 3840×2160 (4K UHD) (120 fps), 1920×1080 (Full HD) (240 fps)",
        Front: "32 MP ",
      },
      design: {
        Dimensions: "6.81 × 3.03 × 0.41 inches (173 77 × 10.3 mm)",
        Weight: "8.43 oz (239.0 g)",
        Materials: "Back: Glass (Corning Gorilla Glass 3)",
        Resistance: "Yes; P54",
        Biometrics: "In-screen fingerprint",
        Features: "Touch sensitive control keys, Dedicated game buttons",
        Keys: "Right: Volume control, Lock/Unlock key",
        Colors: "Storm White",
      },
      cellular: {
        FiveG: "5G Ready",
        DataSpeed: "LTE-A, HSDPA+ (4G) 42.2 Mbit/s",
        SIMType: "Dual Nano SIM",
      },
      multimedia: {
        Headphones: "3.5mm jack",
        Speakers: "Earpiece, Multiple speakers",
        Features: "aptX, aptX-HD",
        ScreenMirroring: "Wireless screen share  Additional",
        microphones: "for Noise cancellation",
      },
      CONNECTIVITYandFEATURES: {
        Bluetooth: "5.3",
        WiFi: "802.11 a, b, g, n, ac, ax, Wi-Fi 6E, Wi-Fi 7; Wi-Fi Direct, Hotspot",
        USB: "Type-C (reversible), USB 3.1",
        Features: "Charging",
        Location:
          "GPS, A-GPS, Glonass, Galileo, BeiDou, QZSS, NavIC, Cell ID Wi-Fi positioning",
        Sensors: "Accelerometer, Gyroscope, Compass, Hall (for flip covers)",
        Other: "NFC",
      },
    },
  ];
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [tableData, setTableData] = useState<TableData[]>([]);

  useEffect(() => {
    const data = productTabData.map((item) => {
      const keys = Object.keys(item);
      const values = Object.values(item);
      return keys.reduce((acc: TableData, key: string, index: number) => {
        acc[key] = values[index];
        return acc;
      }, {} as TableData);
    });
    setTableData(data);
    // eslint-disable-next-line
  }, []);

  return (
    <Box className="border border-color-1" sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="Specs"
            {...a11yProps(0)}
            className="font-semibold text-capitalize "
          />
          <Tab
            label="Expert Review"
            {...a11yProps(1)}
            className="font-semibold text-capitalize "
          />
          <Tab
            label="Gallery"
            {...a11yProps(2)}
            className="font-semibold text-capitalize "
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TableContainer component={Paper}>
          <Table className="product-space-table w-100">
            <TableBody>
              {tableData.map((item, index) => (
                <React.Fragment key={index}>
                  {Object.entries(item).map(([key, value], i) => (
                    <React.Fragment key={i}>
                      {i === 0 ? (
                        <TableRow className="d-none">
                          <TableCell className="border-color-1">
                            {key}
                          </TableCell>
                        </TableRow>
                      ) : (
                        <React.Fragment>
                          <TableRow className="bg-blue text-white">
                            <TableCell
                              className="text-uppercase font-bold text-white space-title border-color-1"
                              colSpan={2}
                            >
                              {key}
                            </TableCell>
                          </TableRow>
                          {typeof value === "object" &&
                          !Array.isArray(value) ? (
                            Object.entries(value).map(
                              ([nestedKey, nestedValue], j) => (
                                <TableRow key={j}>
                                  <TableCell className="font-bold border-color-1">
                                    {nestedKey}
                                  </TableCell>
                                  <TableCell className="border-color-1">
                                    {nestedValue as React.ReactNode}
                                  </TableCell>
                                  {/* Cast to React.ReactNode */}
                                </TableRow>
                              )
                            )
                          ) : (
                            <TableRow>
                              <TableCell>{value}</TableCell>
                            </TableRow>
                          )}
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Expert Review
      </TabPanel>
      <TabPanel value={value} index={2}>
        Gallery
      </TabPanel>
    </Box>
  );
};

export default ProductTabs;
