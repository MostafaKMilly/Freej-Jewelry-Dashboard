import React from "react";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import {
  dealersTableData,
  dealerTableColumns,
} from "../../shared/DealersTableData";
import EnhancedTable from "../UI/EnhancedTable";

function DealersTable(props) {
  const columns = dealerTableColumns;
  const data = dealersTableData;
  return (
    <Box sx={{ width: "100%", height: "400px" }}>
      <CssBaseline />
      <EnhancedTable columns={columns} data={data} />
    </Box>
  );
}

export default DealersTable;
