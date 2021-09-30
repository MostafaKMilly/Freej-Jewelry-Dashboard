import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createBreakpoints } from "@mui/system";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

function App() {
  const breakpoints = createBreakpoints({});
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e6a543",
        light: "#ffd672",
        dark: "#b0760e",
      },
      text: {
        secondary: blueGrey[800],
      },
    },
    typography: {
      fontFamily: "Tajawal",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
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
                minHeight: 94,
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
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </CacheProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
