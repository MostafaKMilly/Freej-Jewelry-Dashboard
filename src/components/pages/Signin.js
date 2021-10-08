import { Button, Grid, Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import { Lock } from "@mui/icons-material";
import { useHistory } from "react-router";
import { useTheme } from "@emotion/react";
import { Login as LoginLayout } from "../layouts/Login";

function Signin(props) {
  const theme = useTheme();
  const history = useHistory();

  function handleLogin() {
    localStorage.setItem("token", "mostafa");
    history.push("/dashboard");
  }
  function handleDontHaveAcc() {
    history.push("/signup");
  }
  return (
    <LoginLayout>
      <Avatar sx={{ mb: 1, bgcolor: "gray" }}>
        <Lock />
      </Avatar>
      <Typography component="h1" variant="h6" color="textSecondary">
        تسجيل الدخول
      </Typography>
      <Box
        component="form"
        onSubmit={handleLogin}
        width="100%"
        noValidate
        sx={{ mt: 3 }}
      >
        <TextField
          margin="normal"
          label="البريد الالكتروني"
          fullWidth
          sx={{
            display: "block",
            borderRadius: "6px 6px 6px 6px",
            color: theme.palette.primary.main,
          }}
          variant="filled"
          color="primary"
          required
          id="email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          color={"primary"}
          margin="normal"
          label="كلمة السر"
          type="password"
          fullWidth
          sx={{
            display: "block",
            color: theme.palette.primary.main,
          }}
          variant="filled"
          required
          id="password"
          autoComplete="current-password"
        />
        <Box sx={{ mt: 2, mb: 1 }}>
          <Button variant="text" sx={{ color: "#2196f3", p: 0 }}>
            هل نسيت كلمة السر ؟
          </Button>
        </Box>

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
          Sign in
        </Button>

        <Box textAlign="center" sx={{ mt: 2, mb: 3 }}>
          <Button
            sx={{ color: "#2196f3", p: 0 }}
            variant="body2"
            type="button"
            onClick={handleDontHaveAcc}
          >
            ليس لديك حساب ؟ انشأ حساب هنا
          </Button>
        </Box>
        <Grid container>
          <Grid item xs></Grid>
        </Grid>
      </Box>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ alignItems: "center", mt: 5 }}
      >
        {"Copyright © Freej Jewelry " + new Date().getFullYear()}
      </Typography>
    </LoginLayout>
  );
}

export default Signin;
