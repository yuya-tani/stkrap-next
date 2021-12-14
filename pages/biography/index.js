import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import ProTip from "../../src/ProTip";
import Link from "../../src/Link";
import Copyright from "../../src/components/Common/Copyright";

const Biography = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Biography;
