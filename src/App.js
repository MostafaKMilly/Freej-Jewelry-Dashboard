import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import theme from "./theme";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CacheProvider value={cacheRtl}>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/login">
              <Signin />
            </Route>
            <Route path="/signup">
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
