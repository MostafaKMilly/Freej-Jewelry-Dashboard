import { Home } from "@mui/icons-material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";
import DealersTable from "../Dealers/DealersTable";
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
      activePage={{ name: "التجار" }}
    />
  );
};

function Dealers(props) {
  return (
    <Box>
      <ReciptsBreadcurmbs />
      <DealersTable />
    </Box>
  );
}

export default Dealers;
