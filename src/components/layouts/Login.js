import { Grid, Paper, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export function Login(props) {
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
          backgroundImage:
            props.type === "signup"
              ? "url(./assets/images/signUpPhoto.svg)"
              : "url(./assets/images/signInPhoto.svg)",
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
          height: props.type === "signup" ? "auto" : "100%",
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{ mt: { sm: props.type === "signup" ? 7 : 16, xs: 8 }, mb: 4 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {props.children}
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}
