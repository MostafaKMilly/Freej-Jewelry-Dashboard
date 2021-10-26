import { AttachMoney } from "@mui/icons-material";
import { Button, ButtonGroup, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoldsKarats } from "../../redux/slices/goldsKaratsSlice";
import EditPricesForm from "../Home/EditPricesForm";
import PricesTable from "../Home/PricesTable";

function Home(props) {
  const goldsKarats = useSelector((state) => state.goldsKarats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoldsKarats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (goldsKarats.isLoading) {
    return <Typography>Loading</Typography>;
  }

  const tableHead = ["العيار", "السعر"];
  const tableBody = [12, 14, 18, 21, 22, 24].map((karat) => ({
    name: `عيار ${karat}`,
    price:
      karat === 21 ? goldsKarats[21] : parseInt((karat * goldsKarats[21]) / 21),
  }));
  return (
    <>
      <Grid container sx={{ mb: 6 }}>
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
      <Grid container spacing={5} mb={3}>
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
