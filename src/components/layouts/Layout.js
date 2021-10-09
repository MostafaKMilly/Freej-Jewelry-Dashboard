import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  AppBar,
  Avatar,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Notifications, Menu, Add } from "@mui/icons-material";
import DrawerBody from "../UI/Drawer";
import { CssBaseline } from "@mui/material";
import { useLocation } from "react-router";
const drawerWidth = 280;

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getToolBarContent = () => {
    if (location.pathname === "/dashboard/dealers") {
      return (
        <>
          <Typography variant="h5" color="textSecondary">
            التجار
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton aria-label="notification" sx={{ mr: { sm: 2 } }}>
            <Avatar sx={{ backgroundColor: "primary.main" }}>
              <Add color="#fff"></Add>
            </Avatar>
          </IconButton>
        </>
      );
    } else {
      return (
        <>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton aria-label="notification">
            <Notifications color="primary"></Notifications>
          </IconButton>
        </>
      );
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        elevation={0}
        sx={{
          width: {
            md: `calc(100% - ${drawerWidth}px)`,
          },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar component={Container} maxWidth="lg">
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <Menu />
          </IconButton>
          {getToolBarContent()}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              right: "unset",
              left: 0,
            },

            display: { xs: "block", sm: "block", md: "none" },
          }}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          edge="end"
          anchor="right"
        >
          <DrawerBody />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <DrawerBody />
        </Drawer>
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Toolbar></Toolbar>
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </Box>
  );
}

export default Layout;
