import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createBreakpoints } from "@mui/system";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

function App() {
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
        variants: [
          {
            props: { variant: "filled" },
            style: {
              "& .MuiInputBase-root:after": {
                borderBottomColor: "#e6a543",
              },
            },
          },
        ],
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "7px 7px 7px 7px",
          },
        },
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
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <BrowserRouter>
        <CacheProvider value={cacheRtl}>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/login">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Redirect to="/login" />
          </Switch>
        </CacheProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
