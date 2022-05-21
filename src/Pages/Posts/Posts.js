import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Posts = () => {
  return (
    <Grid
      container
      xs={10}
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: 20 }}>
        <Typography
          style={{
            color: "#021846",
            fontFamily: "Roboto",
            fontSize: "26px",
            fontWeight: "500",
            letterSpacing: "0",
            lineHeight: "28px",
            height: 43,
          }}
        >
          Posts
        </Typography>
      </div>
    </Grid>
  );
};

export default Posts;
