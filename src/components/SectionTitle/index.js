import React from "react";
import { Grid, Typography } from "@material-ui/core";
const SectionTitle = ({ title, subtitle }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Grid>
    </Grid>
  );
};

export default SectionTitle;
