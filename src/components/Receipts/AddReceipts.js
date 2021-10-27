import { Home, Print, Receipt, Save } from "@mui/icons-material";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import { useHistory } from "react-router";
import CustomBreadcrumbs from "../UI/CustomBreadcrumbs";
import AddReceiptsForm from "./AddReceiptsForm";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.text.secondary,
    borderColor: theme.palette.primary.main,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td": {
    border: 0,
  },
}));

function RegisterReceiptsTable(props) {
  return (
    <Box mt={2}>
      <TableContainer>
        <Table aria-label="recipts table">
          <TableHead>
            <StyledTableRow>
              {props.tableHead.map((headName) => (
                <StyledTableCell align="center" key={headName}>
                  {headName}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {props.tableBody.length ? (
              props.tableBody.map((item) => (
                <StyledTableRow key={item}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {item.price}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.description}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.number}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.santem}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.gram}</StyledTableCell>
                  <StyledTableCell align="center">{item.karat}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.karatPrice}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.notes}</StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={9}>
                  <Typography
                    color="primary"
                    variant="h6"
                    textAlign="center"
                    sx={{ mt: 1 }}
                  >
                    الجدول فارغ
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const AddReciptsBreadcurmbs = () => {
  const history = useHistory();
  const nextPage = (next) => history.push(next);
  const navs = [
    {
      name: "الرئيسية",
      link: "/dashboard",
      icon: <Home fontSize="small" />,
    },
    {
      name: "الفواتير",
      link: "/dashboard/receipts",
      icon: <Receipt fontSize="small" />,
    },
  ];
  return (
    <CustomBreadcrumbs
      nextPage={nextPage}
      navs={navs}
      activePage={{ name: "اضافة فواتير" }}
    />
  );
};

function AddReceipts(props) {
  const headers = [
    "ل.س",
    "مواصفات البضاعة ونوعها",
    "عدد",
    "سانتيم",
    "غرام",
    "عيار",
    "سعر الغرام",
    "ملاحظات",
  ];
  const [registerReceiptsArr, setRegisterReceiptsArr] = useState([]);
  const calcGoldPrice = () => {
    return parseInt(
      registerReceiptsArr.reduce(
        (prev, cur) =>
          prev + cur.karatPrice * parseFloat(cur.gram + "." + cur.santem),
        0
      )
    );
  };

  const calcTotalRent = () => {
    const totalRent = parseInt(
      registerReceiptsArr.reduce((prev, cur) => prev + parseInt(cur.price), 0) -
        calcGoldPrice()
    );
    return totalRent > 0 ? totalRent : 0;
  };

  return (
    <>
      <AddReciptsBreadcurmbs />
      <Container sx={{ mb: 3 }}>
        <Box sx={{ mb: 2, mt: 3 }}>
          <AddReceiptsForm
            registerReceiptsArr={registerReceiptsArr}
            setRegisterReceiptsArr={setRegisterReceiptsArr}
          />
        </Box>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <RegisterReceiptsTable
            tableHead={headers}
            tableBody={registerReceiptsArr}
          />
          {registerReceiptsArr.length ? (
            <Box
              mt={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              gap={2}
            >
              <Box>
                <Typography color="textSecondary" variant="body1">
                  ثمن الذهب : {calcGoldPrice()}
                </Typography>
                <Typography color="textSecondary" variant="body1">
                  مجموع الإجرة : {calcTotalRent()}
                </Typography>
                <Typography color="textSecondary" variant="body1">
                  القيمة الإجمالية : {calcTotalRent() + calcGoldPrice()}
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mr: 1, mb: { xs: 1, md: 0 } }}
                  endIcon={<Print />}
                >
                  حفظ مع طباعة
                </Button>
                <Button variant="contained" color="success" endIcon={<Save />}>
                  حفظ
                </Button>
              </Box>
            </Box>
          ) : (
            <></>
          )}
        </Container>
      </Container>
    </>
  );
}

export default AddReceipts;
