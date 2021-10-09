import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomTextField from "../UI/CustomTextField";

function EditPricesForm(props) {
  return (
    <Box
      component={Paper}
      elevation={0}
      align="center"
      sx={{
        borderRadius: 3,
        p: 3,
        height: {
          xs: "100%",
          sm: "92%",
        },
      }}
    >
      <Typography variant="h6" fontWeight="500" color="textSecondary">
        تعديل اسعار الذهب
      </Typography>
      <Box
        component="img"
        src="assets\images\edit.svg"
        alt="edit"
        sx={{
          mt: 8.5,
          mb: 6.5,
          width: {
            xs: 200,
            sm: 140,
            md: 140,
            lg: 255,
          },
        }}
      ></Box>
      <Box
        component="form"
        sx={{ display: "flex", gap: 1, mb: 2 }}
        justifyContent="center"
      >
        <CustomTextField size="small" label="عيار 21"></CustomTextField>
        <Button variant="text">ادخل</Button>
      </Box>
    </Box>
  );
}

export default EditPricesForm;
