import React from "react";
import { AppBar, Box, Button, Stack, Toolbar, Typography, useScrollTrigger } from "@mui/material";

import Link from "../../Link";

const HeaderItems = [
  { name: "Discography", link: "/discography" },
  { name: "Biography", link: "/biography" },
  { name: "Contact", link: "/contact" },
];

const Header = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return (
    <>
      <AppBar elevation={trigger ? 4 : 0} sx={{ backgroundColor: "rgba(250,250,250,0.8)" }}>
        <Toolbar sx={{ color: "#333333" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              variant="text"
              component={Link}
              href="/"
              sx={{ paddingTop: "10px", paddingBottom: "10px", "&:hover": { borderRadius: "0" } }}
            >
              <Typography variant="h6">STK RAP</Typography>
            </Button>
          </Box>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={0}>
            {HeaderItems.map((item) => (
              <HeaderMenu key={item.name} item={item} />
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
};

const HeaderMenu = (props) => {
  const item = props.item;

  return (
    <Button
      variant="text"
      component={Link}
      href={item.link}
      sx={{ textTransform: "none", padding: "10px 20px;", "&:hover": { borderRadius: "0" } }}
    >
      <Typography variant="h6">{item.name}</Typography>
    </Button>
  );
};

export default Header;
