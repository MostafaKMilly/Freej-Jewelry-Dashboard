import { Home } from "@mui/icons-material";
import React from "react";
import { useHistory } from "react-router-dom";
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
  return (
    <div>
      <ReciptsBreadcurmbs />
      <ReceiptsTable />
    </div>
  );
}

export default Receipts;
