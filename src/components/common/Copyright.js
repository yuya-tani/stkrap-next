import * as React from "react";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © stk rap "}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default Copyright;
