import { AttachMoney } from "@mui/icons-material";
import { Button, ButtonGroup, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EditPricesForm from "../Home/EditPricesForm";
import PricesTable from "../Home/PricesTable";

function Home(props) {
  const tableHead = ["العيار", "السعر"];
  const tableBody = [
    {
      name: "عيار 12",
      price: "1000",
    },
    {
      name: "عيار 14",
      price: "1000",
    },
    {
      name: "عيار 18",
      price: "1000",
    },
    {
      name: "عيار 22",
      price: "1000",
    },
    {
      name: "عيار 24",
      price: "1000",
    },
  ];
  return (
    <>
      <Grid container sx={{ mb: 5 }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: {
              xs: "center",
              sm: "left",
            },
          }}
        >
          <Box sx={{ mt: { xs: 1, sm: 0 } }}>
            <Typography variant="h5" fontWeight="600" color="textSecondary">
              مرحباً Mostafa
            </Typography>
            <Typography variant="h6" fontWeight="400" color="textSecondary">
              اهلاً بعودتك !
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            textAlign: {
              xs: "center",
              sm: "right",
            },
          }}
        >
          <ButtonGroup
            variant="text"
            size="medium"
            sx={{
              "& .MuiButton-root": {
                color: "primary.dark",
              },
              mt: {
                xs: 3,
                sm: 0,
              },
            }}
          >
            <Button>اضافة فاتورة</Button>
            <Button>اضافة تاجر</Button>
            <Button>عرض المبيعات</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item elevation={0} xs={12} md={4}>
          <EditPricesForm />
        </Grid>
        <Grid item elevation={0} xs={12} md={8}>
          <Box
            component={Paper}
            elevation={0}
            align="center"
            sx={{
              borderRadius: 3,
              p: 3,
              mb: 5,
            }}
          >
            <Box display="inline-flex" alignItems="center">
              <Typography variant="h6" fontWeight="500" color="textSecondary">
                اسعار الذهب
              </Typography>
              <AttachMoney
                sx={{ height: 25, width: 25 }}
                color="primary"
              ></AttachMoney>
            </Box>
            <PricesTable tableBody={tableBody} tableHead={tableHead} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
