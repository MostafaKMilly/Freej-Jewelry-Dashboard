import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomTextField from "../UI/CustomTextField";
import { useDispatch } from "react-redux";
import { editGoldsKarats } from "../../redux/slices/goldsKaratsSlice";
import { useForm, Controller } from "react-hook-form";

const EditKaratsTextField = ({ field }) => {
  return (
    <CustomTextField size="small" label="عيار 21" {...field}></CustomTextField>
  );
};

function EditPricesForm(props) {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(editGoldsKarats(data.karat21));
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
        component="form"
        sx={{ display: "flex", gap: 1, mb: 2 }}
        justifyContent="center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="karat21"
          render={EditKaratsTextField}
        ></Controller>
        <Button variant="text" type="submit">
          ادخل
        </Button>
      </Box>
    </Box>
  );
}

export default EditPricesForm;
