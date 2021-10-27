import React from "react";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import EnhancedTable from "../UI/EnhancedTable";

function ReceiptsTable({ data }) {
  const columns = [
    {
      Header: "رقم الفاتورة",
      accessor: "id",
    },
    {
      Header: "تاريخ البيع",
      accessor: "date",
    },
    {
      Header: "مجموع الاجرة",
      accessor: "totalRent",
    },
    {
      Header: "القيمة الإجمالية",
      accessor: "totalValue",
    },
  ];
  return (
    <Box sx={{ width: "100%", height: "400px" }}>
      <CssBaseline />
      <EnhancedTable columns={columns} data={data} />
    </Box>
  );
}

export default ReceiptsTable;
