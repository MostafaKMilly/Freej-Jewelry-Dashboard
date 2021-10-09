import {
  Chip,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function PricesTable(props) {
  return (
    <Box mt={2}>
      <TableContainer>
        <Table sx={{ maxWidth: 500 }} aria-label="prices table">
          <TableHead>
            <TableRow>
              {props.tableHead.map((headName) => (
                <StyledTableCell align="center" key={headName}>
                  {headName}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tableBody.map((item) => (
              <StyledTableRow key={item.name}>
                <StyledTableCell align="center" component="th" scope="row">
                  {item.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {item.price}
                  <Chip
                    variant="filled"
                    label="ل.س"
                    size="small"
                    sx={{ ml: 1 }}
                  ></Chip>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PricesTable;
