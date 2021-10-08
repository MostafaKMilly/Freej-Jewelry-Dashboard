import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Container,
  Avatar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import { Lock } from "@mui/icons-material";
import { useHistory } from "react-router";
import { useTheme } from "@emotion/react";

function Login(props) {
  const history = useHistory();
  const theme = useTheme();

  function handleLogin() {
    localStorage.setItem("token", "mostafa");
    history.push("/dashboard");
  }
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh" }}
      direction="row-reverse"
    >
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(./assets/images/signinPhoto.svg)",
          backgroundRepeat: "no-repeat",
          bgcolor: "#eceff1",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        square
        elevation={0}
        alignSelf="center"
        sx={{
          height: "100%",
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{ mt: { sm: 16, xs: 8 }, mb: 4 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
                <Link
                  variant="body2"
                  color="#2196f3"
                  type="button"
                  href="#"
                  underline="none"
                >
                  هل نسيت كلمة السر ؟
                </Link>
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
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Login;
