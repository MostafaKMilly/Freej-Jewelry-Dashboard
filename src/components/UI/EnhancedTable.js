import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";

import React from "react";
import GlobalFilter from "./GlobalFilter";
import { Box } from "@mui/system";

function MyTablePagination({
  data,
  pageSize,
  pageIndex,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <TablePagination
      rowsPerPageOptions={[7, 10, 25, { label: "All", value: data.length }]}
      colSpan={3}
      count={data.length}
      rowsPerPage={pageSize}
      page={pageIndex}
      SelectProps={{
        inputProps: { "aria-label": "rows per page" },
        native: true,
      }}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      component={Box}
      sx={{
        direction: "rtl",
        flexDirection: "row-reverse",
        padding: "30px",
        display: "flex",
        justifyContent: "right",
        "& .MuiTablePagination-toolbar": {
          padding: 2,
          overflow: "auto",
        },
      }}
    />
  );
}

function EnhancedTable({ columns, data }) {
  const dealersTable = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 7 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    gotoPage,
    setPageSize,
  } = dealersTable;

  const { globalFilter, pageIndex, pageSize } = state;

  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(Number(event.target.value));
  };
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <TableContainer>
        <Table {...getTableProps()} size="medium">
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.id !== "selection" ? (
                        <TableSortLabel
                          active={column.isSorted}
                          direction={column.isSortedDesc ? "desc" : "asc"}
                        />
                      ) : null}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()} hover>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <MyTablePagination
        {...{
          data,
          pageSize,
          pageIndex,
          handleChangePage,
          handleChangeRowsPerPage,
        }}
      />
    </>
  );
}

export default EnhancedTable;
