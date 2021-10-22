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
  "& textarea": {
    fontFamily: theme.typography.fontFamily,
  },
}));

function CustomTextField({
  label,
  variant,
  fullWidth,
  required,
  size,
  ...props
}) {
  return (
    <>
      <CustomComponent
        label={label}
        variant={variant}
        fullWidth={fullWidth}
        required={required}
        size={size}
        {...props}
      />
    </>
  );
}

export default CustomTextField;
