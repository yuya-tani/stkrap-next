import * as React from "react";
import { Box, Button, Container, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import Link from "../../src/Link";
import LatestSoundList from "../../src/components/top/LatestSoundList";

const Discography = () => {
  return (
    <Container maxWidth="xl">
      {" "}
      <ImageList
        sx={{
          width: "100%",
          height: "100%",
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        variant="masonry"
        cols={3}
        gap={20}
      >
        {LatestSoundList.map((item) => {
          const cols = 3;
          const rows = 5;

          return (
            <ImageListItem key={item.imgPath} cols={cols}>
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " + "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position="bottom"
                actionPosition="left"
              />

              <Link href={`./discography/${item.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                <img {...srcset(item.imgPath, 100, 200, rows, cols)} alt={item.title} loading="lazy" />
              </Link>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
};

const srcset = (image, width, height, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
};

export default Discography;
