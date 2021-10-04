import React from "react";
import faker from "faker";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

const rows = [];
for (let i = 1; i <= 14; i++) {
  rows[i] = {
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address: faker.address.cityName(),
    amount: Math.floor(Math.random() * 120),
  };
}

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
  {
    field: "address",
    headerName: "Address",
    width: 110,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 90,
  },
];

function DealersTable(props) {
  return (
    <Box sx={{ width: "100%", height: "400px" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableColumnMenu
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DealersTable;
