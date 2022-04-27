import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "../../src/Link";
import LatestSoundList from "../../src/components/top/LatestSoundList";

const Player = dynamic(() => import("../../src/components/common/Player"), {
  ssr: false,
});

const SoundDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Container maxWidth="lg">
      <Box>{slug}</Box>
      <Box>
        <Player />
      </Box>
    </Container>
  );
};

export default SoundDetail;
