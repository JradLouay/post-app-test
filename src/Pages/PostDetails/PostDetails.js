import React from "react";
import { Grid, Typography } from "@mui/material";

const PostDetails = () => {
  
  return (
    <Grid
      container
      xs={10}
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <div style={{ marginBottom: 30 }}>
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
          Post name
        </Typography>
      </div>
    </Grid>
  );
};

export default PostDetails;
