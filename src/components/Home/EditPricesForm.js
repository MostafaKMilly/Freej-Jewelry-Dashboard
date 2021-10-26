import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomTextField from "../UI/CustomTextField";
import { useDispatch } from "react-redux";
import { Control, LocalForm } from "react-redux-form";
import { editGoldsKarats } from "../../redux/slices/goldsKaratsSlice";

const editKaratsTextField = (props) => {
  return (
    <CustomTextField
      size="small"
      label="عيار 21"
      onChange={props.onChange}
    ></CustomTextField>
  );
};

function EditPricesForm(props) {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    if (values.karat && !isNaN(values.karat)) {
      dispatch(editGoldsKarats(values.karat));
    }
  };
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
          mt: 9.5,
          mb: 7.5,
          width: {
            xs: 200,
            sm: 140,
            md: 140,
            lg: 255,
          },
        }}
      ></Box>
      <Box
        component={LocalForm}
        sx={{ display: "flex", gap: 1, mb: 2 }}
        justifyContent="center"
        onSubmit={handleSubmit}
      >
        <Control model=".karat" name="karat" component={editKaratsTextField} />
        <Button variant="text" type="submit">
          ادخل
        </Button>
      </Box>
    </Box>
  );
}

export default EditPricesForm;
