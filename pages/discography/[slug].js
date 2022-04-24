import { useRouter } from "next/router";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "../../src/Link";
import LatestSoundList from "../../src/components/top/LatestSoundList";

const SoundDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Container maxWidth="lg">
      <Box>{slug}</Box>
    </Container>
  );
};

export default SoundDetail;
