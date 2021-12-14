import { Box, Fab, useScrollTrigger, Zoom } from "@mui/material";
import { KeyboardArrowUp as UpIcon } from "@mui/icons-material";

const ScrollTop = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <UpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollTop;
