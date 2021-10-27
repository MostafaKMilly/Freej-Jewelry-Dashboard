import { Breadcrumbs, Chip } from "@mui/material";
import { Box, emphasize, styled } from "@mui/system";
import React from "react";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

function CustomBreadcrumbs({ nextPage, navs, activePage }) {
  return (
    <Box sx={{ mt: 0.5, mb: 2 }}>
      <Breadcrumbs aria-label="breadcrumb">
        {navs.map((nav) => (
          <StyledBreadcrumb
            component="a"
            label={nav.name}
            icon={nav.icon}
            onClick={() => nextPage(nav.link)}
          />
        ))}
        <StyledBreadcrumb
          component="p"
          sx={{ backgroundColor: "secondary.light" }}
          label={activePage.name}
        />
      </Breadcrumbs>
    </Box>
  );
}

export default CustomBreadcrumbs;
