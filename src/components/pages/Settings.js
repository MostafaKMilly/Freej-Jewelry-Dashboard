import { Person } from "@mui/icons-material";
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Settings(props) {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} sm={4}>
        <Box textAlign="-webkit-center">
          <Avatar
            alt="person"
            sx={{
              backgroundColor: "primary.main",
              width: "130px",
              height: "130px",
              opacity: "0.89",
            }}
          >
            <Person
              sx={{
                color: "#ffffff",
                width: "79px",
                height: "79px",
              }}
            />
          </Avatar>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" fontWeight="500" color="textSecondary">
              Mostafa Milly
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Admin
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper></Paper>
      </Grid>
    </Grid>
  );
}

export default Settings;
