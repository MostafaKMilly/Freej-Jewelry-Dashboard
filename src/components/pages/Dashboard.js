import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../layouts/Layout";
import { ReactComponent as WorkProgress } from "./workProgress.svg";

function Dashboard(props) {
  return (
    <Layout>
      <Box textAlign="center" position="relative">
        <WorkProgress
          style={{
            maxWidth: "335px",
            marginBottom: "-177px",
          }}
        />
        <Typography variant="h5" color="textSecondary">
          الموفع قيد الإنشاء
        </Typography>
      </Box>
    </Layout>
  );
}

export default Dashboard;
