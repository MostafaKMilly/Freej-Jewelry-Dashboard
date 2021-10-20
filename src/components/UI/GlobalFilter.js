import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomTextField from "./CustomTextField";

function GlobalFilter({ filter, setFilter }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="baseline"
      sx={{
        mb: 3,
        mt: {
          xs: 2,
          md: 1,
        },
      }}
    >
      <Typography variant="body1" color="textSecondary" sx={{ mr: 2 }}>
        بحث :
      </Typography>
      <CustomTextField
        size="small"
        variant="outlined"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ flexGrow: 0.08 }}
      ></CustomTextField>
    </Box>
  );
}

export default GlobalFilter;
