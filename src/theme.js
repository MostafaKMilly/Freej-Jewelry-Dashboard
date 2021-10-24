import { createTheme, responsiveFontSizes } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});
const theme = createTheme({
  palette: {
    primary: {
      main: "#c2942a",
      light: "#f8c45b",
      dark: "#8e6700",
    },
    secondary: {
      main: "#808385",
      light: "#afb2b5",
      dark: "#545658",
    },
    text: {
      secondary: "#545658",
    },
  },
  typography: {
    fontFamily: "Tajawal",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    body1: {
      fontSize: "1.1rem",
    },
    body2: {
      fontSize: "0.957rem",
    },
  },
  direction: "rtl",
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            fontFamily: "Tajawal",
          },
        },
      },
      variants: [
        {
          props: { variant: "filled" },
          style: {
            "& .MuiInputBase-root:after": {
              borderBottomColor: "#e6a543",
            },
          },
        },
        {
          props: { variant: "standard" },
          style: {
            "& .MuiInputBase-root:after": {
              borderBottomColor: "#e6a543",
            },
            "& .MuiInputBase-root:hover": {
              borderBottomColor: "#e6a543 !important",
            },
          },
        },
      ],
    },
    MuiTable: {
      styleOverrides: {
        root: {
          fontSize: "1.0rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px 7px 7px 7px",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          [breakpoints.up("sm")]: {
            "@media all": {
              minHeight: 100,
            },
          },
          [breakpoints.only("xs")]: {
            "@media all": {
              minHeight: 66,
            },
          },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
