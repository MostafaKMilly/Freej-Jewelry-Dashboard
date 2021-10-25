import React, { useState } from "react";
import { alpha, Box, styled } from "@mui/system";
import {
  AppBar,
  Avatar,
  Container,
  Drawer,
  IconButton,
  InputBase,
  Toolbar,
} from "@mui/material";
import { Notifications, Menu, Add } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import DrawerBody from "../UI/Drawer";
import { CssBaseline } from "@mui/material";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { selectGlobalFilter } from "../../redux/slices/globalFilterSlice";
const drawerWidth = 280;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    fontFamily: theme.typography.fontFamily,
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { filter, setFilter } = useSelector(selectGlobalFilter);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getToolBarContent = () => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/settings"
    ) {
      return (
        <>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton aria-label="notification">
            <Notifications color="primary"></Notifications>
          </IconButton>
        </>
      );
    } else {
      return (
        <>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="ابحث .."
              inputProps={{ "aria-label": "search" }}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton aria-label="notification" sx={{ mr: { sm: 2 } }}>
            <Avatar sx={{ backgroundColor: "primary.main" }}>
              <Add color="#fff"></Add>
            </Avatar>
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
