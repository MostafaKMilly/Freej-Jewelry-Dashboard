import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import Layout from "../layouts/Layout";
import Dealers from "./Dealers";
import Settings from "./Settings";

function Dashboard(props) {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route exact path={`${path}/settings`}>
          <Settings />
        </Route>
        <Route exact path={`${path}/dealers`}>
          <Dealers />
        </Route>
        <Redirect to={`${path}`} />
      </Switch>
    </Layout>
  );
}

export default Dashboard;
