import React from "react";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import {
  receiptsTableData,
  receiptsTableColumns,
} from "../../shared/ReceiptsTableData";
import EnhancedTable from "../UI/EnhancedTable";

function ReceiptsTable(props) {
  const columns = receiptsTableColumns;
  const data = receiptsTableData;
  return (
    <Box sx={{ width: "100%", height: "400px" }}>
      <CssBaseline />
      <EnhancedTable columns={columns} data={data} />
    </Box>
  );
}

export default ReceiptsTable;
