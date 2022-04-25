import * as React from "react";
import { Box, Button, Card, CardContent, CardMedia, CardActionArea, Grid, Typography } from "@mui/material";

import Link from "../../Link";

const menuConst = [
  {
    href: "/discography",
    imageUrl: "/images/cards/contemplative-reptile.jpg",
    alt: "green iguana",
    title: "Discography",
  },
  { href: "/biography", imageUrl: "/images/cards/contemplative-reptile.jpg", alt: "green iguana", title: "Biography" },
  { href: "/contact", imageUrl: "/images/cards/contemplative-reptile.jpg", alt: "green iguana", title: "Contact" },
  { href: "/special", imageUrl: "/images/cards/contemplative-reptile.jpg", alt: "green iguana", title: "Special" },
];

const MainMenu = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={10}>
      {menuConst.map((m) => (
        <Grid item md={4} xs={12}>
          <MenuCard href={m.href} imageUrl={m.imageUrl} alt={m.alt} title={m.title} />
        </Grid>
      ))}
    </Grid>
  );
};

const MenuCard = ({ href, imageUrl, alt, title }) => {
  return (
    <Card elevation={6}>
      <CardActionArea component={Link} href={href}>
        <CardMedia component="img" height="140" image={imageUrl} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MainMenu;
