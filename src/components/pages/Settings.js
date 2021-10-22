import { History, Person } from "@mui/icons-material";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import EditPersonalForm from "../Settings/EditPersonalForm";

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderLeft: `2px solid ${theme.palette.primary.main}`,
}));

function Settings(props) {
  const list = [
    {
      name: "معلوماتي الشخصية",
      icon: <Person color="primary"></Person>,
    },
    {
      name: "النشاط",
      icon: <History color="primary"></History>,
    },
  ];
  return (
    <Grid container spacing={7}>
      <Grid item xs={12} sm={3.3}>
        <Box textAlign="-webkit-center">
          <List>
            {list.map((item, index) => (
              <ListItem>
                <CustomListItemButton
                  dense
                  sx={{ backgroundColor: index === 0 ? "#e6a54326" : "none" }}
                >
                  <ListItemIcon>
                    <Avatar sx={{ backgroundColor: "white" }}>
                      {item.icon}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      fontWeight="500"
                    >
                      {item.name}
                    </Typography>
                  </ListItemText>
                </CustomListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
          <EditPersonalForm />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Settings;
