import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
const themeCSS = {
  bodyFontFamily: "var(--fontFamily)",
  bodyFontWeight: "400",
  baseFont: "var(--baseFont)",
};
const theme = createTheme({
  palette: {
    primary: {
      main: "#0063D1",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: themeCSS.bodyFontFamily,
          fontWeight: themeCSS.bodyFontWeight,
          letterSpacing: "0",
          lineHeight: 1.7,
          "&.MuiLink-root , .MuiLink-root": {
            color: "var(--black)",
            textDecoration: "none",
            "&:hover": {
              color: "var(--blue)",
            },
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "15px",
          paddingRight: "15px",
          "@media (min-width:600px)": {
            paddingLeft: "15px",
            paddingRight: "15px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: themeCSS.baseFont,
          fontFamily: themeCSS.bodyFontFamily,
          boxShadow: "none",
          letterSpacing: 0,
          textTransform: "capitalize",
          fontWeight: 600,
          minWidth: "124px",
          padding: "8px 25px",
          borderRadius: "8px",
          "&:hover": {
            opacity: 0.8,
            boxShadow: "none",
          },
          "&.MuiButton-contained": {
            background: "var(--blue)",
            color: "var(--white)",
            border: "1px solid var(--blue)",
            "&:hover": {
              background: "var(--blue)",
            },
          },
          "&.MuiButton-outlined": {
            borderColor: "var(--blue)",
            color: "var(--blue)",
          },
          "@media (max-width:599px)": {
            minWidth: "105px",
            padding: "6px 10px",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: themeCSS.baseFont,
          fontFamily: themeCSS.bodyFontFamily,
          letterSpacing: 0,
          "& input::placeholder": {
            opacity: "0.6",
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPagination-ul": {
            justifyContent: "center",
            "& .MuiButtonBase-root": {
              background: "#F1F1F1",
              fontSize: themeCSS.baseFont,
              fontFamily: themeCSS.bodyFontFamily,
            },
            "& .MuiButtonBase-root.Mui-selected": {
              background: "var(--blue)",
              color: "var(--white)",
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          "& .MuiSlider-thumb": {
            background: "var(--white)",
            border: "5px solid var(--blue)",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          fontSize: themeCSS.baseFont,
          fontFamily: themeCSS.bodyFontFamily,
          "& .MuiTableCell-root": {
            padding: "8px 25px",
            "@media (max-width:600px)": {
              padding: "8px 15px",
            },
          },
          "& .MuiTableRow-root:last-child td": {
            borderBottom: "none",
          },
          "& .MuiTableRow-root:nth-of-type(even)": {
            backgroundColor: "#F6F6F6",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 0,
        },
      },
    },
  },
});
export default theme;
