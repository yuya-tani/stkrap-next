import React from "react";
import { Box, Container, IconButton, Stack, Tooltip } from "@mui/material";
import { Twitter as TwitterIcon, Instagram as InstagramIcon } from "@mui/icons-material";
import SoundCloudIcon from "../icons/SoundCloudIcon";
import Copyright from "../common/Copyright";

const Footer = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "3em", marginBottom: "3em" }}>
      <Box>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <Tooltip title="Twitter">
            <IconButton size="large" target="_blank" rel="noopener noreferrer" href="https://twitter.com/situke">
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="SoundCloud">
            <IconButton size="large" target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/situke">
              <SoundCloudIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram">
            <IconButton
              size="large"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/situke_p/"
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
      <Box sx={{ margin: "10px 0" }}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;
