import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const CustomComponent = styled(TextField)(({ theme }) => ({
  color: theme.palette.primary.main,
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

function CustomTextField({ label, variant, fullWidth, required, size }) {
  return (
    <>
      <CustomComponent
        label={label}
        variant={variant}
        fullWidth={fullWidth}
        required={required}
        size={size}
      />
    </>
  );
}

export default CustomTextField;
