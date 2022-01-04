import * as React from "react";
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Parallax, Background } from "react-parallax";
import ProTip from "../../src/ProTip";
import Link from "../../src/Link";
import Copyright from "../../src/components/Common/Copyright";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Biography = () => {
  return (
    <Box>
      <Parallax bgImage="https://i1.sndcdn.com/visuals-000114819441-QmqbdY-t1240x260.jpg" strength={800}>
        <Container maxWidth="md" sx={{ margin: "5em" }}>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item md={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image="https://i1.sndcdn.com/avatars-000446043141-wtmk63-t200x200.jpg"
                  alt="green iguana"
                />
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card sx={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    stk a.k.a. situke
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    2005年からネット上でラップ音源を公開
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Parallax>
    </Box>
  );
};

export default Biography;
