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
    width: 120,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "fullName",
    headerName: "Full name",
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "address",
    headerName: "Address",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "amount",
    headerName: "Amount",
    headerClassName: "super-app-theme--header",
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
            style={{
              border: "none",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DealersTable;
