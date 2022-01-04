import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import Particles from "../src/components/common/Particles";
import LatestSound from "../src/components/top/LatestSound";
import MainMenu from "../src/components/top/MainMenu";

const Index = () => {
  return (
    <>
      {/* メインタイトル */}
      <Box
        sx={{
          background: "linear-gradient(90deg, rgba(38,47,56,1) 0%, rgba(114,139,167,1) 35%, rgba(197,207,224,1) 100%);",
          color: "#ffffff",
        }}
      >
        <Container maxWidth="md">
          <Particles />
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            mt={5}
            sx={{ letterSpacing: 10, textAlign: "left", margin: "0", padding: "40px 0" }}
          >
            STK
            <br />
            Sound
            <br />
            Library
          </Typography>
        </Container>
      </Box>

      {/* 最新曲 */}
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <LatestSound />
      </Grid>

      {/* メインメニュー */}
      <Box sx={{ backgroundColor: "#cfd8dc", color: "#eeeeee", paddingBottom: "40px" }}>
        <Container maxWidth="lg" sx={{ my: 10 }}>
          <MainMenu />
        </Container>
      </Box>
    </>
  );
};

export default Index;
