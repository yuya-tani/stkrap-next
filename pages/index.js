import * as React from "react";
import { Box, Button, Container, Grid, MobileStepper, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { KeyboardArrowLeft as ArrowLeftIcon, KeyboardArrowRight as ArrowRightIcon } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import Particles from "../src/components/common/Particles";
import LatestSound from "../src/components/top/LatestSound";
import MainMenu from "../src/components/top/MainMenu";
import Link from "../src/Link";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Index = () => {
  return (
    <>
      {/* メインタイトル */}
      <Box sx={{ backgroundColor: "#263238", color: "#eeeeee" }}>
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
