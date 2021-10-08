import { Button, Grid, Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Lock } from "@mui/icons-material";
import { useHistory } from "react-router";
import { Login as LoginLayout } from "../layouts/Login";
import CustomTextField from "../UI/CustomTextField";

function Signup(props) {
  const history = useHistory();
  function handleSignUp() {
    localStorage.setItem("token", "mostafa");
    history.push("/dashboard");
  }

  return (
    <LoginLayout type="signup">
      <Avatar sx={{ mb: 1, bgcolor: "gray" }}>
        <Lock />
      </Avatar>
      <Typography component="h1" variant="h6" color="textSecondary">
        انشاء حساب
      </Typography>
      <Box
        component="form"
        onSubmit={handleSignUp}
        width="100%"
        noValidate
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="الاسم"
              variant="outlined"
              fullWidth={true}
              required={true}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTextField
              label="الكنية"
              variant="outlined"
              fullWidth={true}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              label="البريد الالكتروني"
              variant="outlined"
              fullWidth={true}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              label="كلمة السر"
              variant="outlined"
              fullWidth={true}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              label="اسم المركز"
              variant="outlined"
              fullWidth={true}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              label="العنوان"
              variant="outlined"
              fullWidth={true}
              required={true}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              label="رمز الامان"
              variant="outlined"
              fullWidth={true}
              required={true}
            />
          </Grid>
        </Grid>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            padding: "12px",
            mt: 2,
            mb: 2,
            color: "#ffffff",
          }}
        >
          Sign up
        </Button>

        <Box textAlign="center" sx={{ mt: 2, mb: 3 }}>
          <Button
            sx={{ color: "#2196f3", p: 0 }}
            variant="body2"
            type="button"
            onClick={() => history.push("/login")}
          >
            لديك حساب ؟ سجل دخول هنا
          </Button>
        </Box>
        <Grid container>
          <Grid item xs></Grid>
        </Grid>
      </Box>
    </LoginLayout>
  );
}

export default Signup;
