import React, { useState } from "react";
import { Box } from "@mui/system";
import { AppBar, Container, Drawer, IconButton, Toolbar } from "@mui/material";
import { Notifications, Menu } from "@mui/icons-material";
import DrawerBody from "../Drawer";
import { CssBaseline } from "@mui/material";
const drawerWidth = 280;

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        color="transparent"
        position="fixed"
        elevation={0}
        sx={{
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
          },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton aria-label="notification" sx={{ mr: { sm: 2 } }}>
            <Notifications color="primary"></Notifications>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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

            display: { xs: "block", sm: "none" },
          }}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          edge="end"
          anchor="right"
        >
          <DrawerBody />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
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
        <Container maxWidth>{children}</Container>
      </Box>
    </Box>
  );
}

export default Layout;
