import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import Layout from "../layouts/Layout";
import Dealers from "./Dealers";
import Settings from "./Settings";
import { ReactComponent as WorkProgress } from "./workProgress.svg";

const OnProgress = () => {
  return (
    <Box textAlign="center" position="relative">
      <WorkProgress
        style={{
          maxWidth: "335px",
          marginBottom: "-177px",
        }}
      />
      <Typography variant="h5" color="textSecondary">
        الموقع قيد الإنشاء
      </Typography>
    </Box>
  );
};
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
        <Route exact path={`${path}`}>
          <OnProgress />
        </Route>
        <Redirect to={`${path}`} />
      </Switch>
    </Layout>
  );
}

export default Dashboard;
