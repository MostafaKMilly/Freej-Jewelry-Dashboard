import {
  ExitToApp,
  HomeOutlined,
  PeopleOutlineOutlined,
  PointOfSaleOutlined,
  ReceiptOutlined,
  Settings,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory, useLocation } from "react-router";

function DrawerBody(props) {
  const history = useHistory();
  const location = useLocation();
  const menuItemsTop = [
    {
      text: "الرئيسية",
      icon: <HomeOutlined color="primary" />,
      path: "/dashboard",
    },
    {
      text: "الفواتير",
      icon: <ReceiptOutlined color="primary" />,
      path: "/dashboard/receipts",
    },
    {
      text: "التجار",
      icon: <PeopleOutlineOutlined color="primary" />,
      path: "/dashboard/dealers",
    },
    {
      text: "المبيعات",
      icon: <PointOfSaleOutlined color="primary" />,
      path: "/dashboard/sales",
    },
    {
      text: "المشتريات",
      icon: <ShoppingCartOutlined color="primary" />,
      path: "/dashboard/purchases",
    },
  ];
  const menuItemsBottom = [
    {
      text: "الإعدادات",
      icon: <Settings color="primary" />,
      path: "/dashboard/settings",
    },
    {
      text: "تسجيل الخروج",
      icon: <ExitToApp color="primary" />,
      path: "/login",
    },
  ];
  return (
    <>
      <Toolbar
        sx={{
          alignSelf: "center",
        }}
      >
        <Box>
          <Typography variant="h6" color="textSecondary">
            فريج للمجوهرات
          </Typography>
        </Box>
      </Toolbar>

      <List sx={{ p: 2, pt: 0 }}>
        {menuItemsTop.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => /* history.push(item.path) */ {}}
            sx={{
              background:
                location.pathname === item.path ? "#e6a54326" : "#none",
              p: 2,
              borderRadius: "15px 15px 15px 15px",
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <Typography variant="body1">{item.text}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }}></Box>
      <List sx={{ p: 2, pt: 0 }}>
        {menuItemsBottom.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            sx={{
              background:
                location.pathname === item.path ? "#e6a54326" : "#none",
              p: 2,
              borderRadius: "15px 15px 15px 15px",
            }}
          >
            <ListItemIcon>
              <Avatar sx={{ backgroundColor: "#eceff1" }}>{item.icon}</Avatar>
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">{item.text}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default DrawerBody;
