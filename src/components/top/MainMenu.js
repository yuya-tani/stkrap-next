import * as React from "react";
import { Box, Button, Card, CardContent, CardMedia, CardActionArea, Grid, Typography } from "@mui/material";

import Link from "../../Link";

const MainMenu = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={10}>
      <Grid item md={4} xs={12}>
        <Card elevation={6}>
          <CardActionArea component={Link} href="/discography">
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Discography
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card elevation={6}>
          <CardActionArea component={Link} href="/biography">
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Biography
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card elevation={6}>
          <CardActionArea component={Link} href="/contact">
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Contact
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card elevation={6}>
          <CardActionArea component={Link} href="/special">
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Special
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MainMenu;
