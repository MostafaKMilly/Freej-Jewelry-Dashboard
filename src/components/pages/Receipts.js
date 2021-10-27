import { Home } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchReceitps,
  selectReceipts,
} from "../../redux/slices/receiptsSlice";
import ReceiptsTable from "../Receipts/ReceiptsTable";
import CustomBreadcrumbs from "../UI/CustomBreadcrumbs";

const ReciptsBreadcurmbs = () => {
  const history = useHistory();
  const nextPage = (next) => history.push(next);
  const navs = [
    {
      name: "الرئيسية",
      link: "/dashboard",
      icon: <Home fontSize="small" />,
    },
  ];
  return (
    <CustomBreadcrumbs
      nextPage={nextPage}
      navs={navs}
      activePage={{ name: "الفواتير" }}
    />
  );
};

function Receipts(props) {
  const receiptsIsLoading = useSelector((state) => state.receipts.isLoading);
  const receipts = useSelector(selectReceipts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReceitps());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (receiptsIsLoading) {
    return <Typography>Loading</Typography>;
  }

  return (
    <div>
      <ReciptsBreadcurmbs />
      <ReceiptsTable data={receipts} />
    </div>
  );
}

export default Receipts;
