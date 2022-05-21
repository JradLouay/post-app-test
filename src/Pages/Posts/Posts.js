import React from "react";
import PostCard from "../../Components/PostCard/PostCard";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 20, // padding
          height: "calc(100vh - 183px)", //
          overflow: "auto",
        }}
      >
        <Grid container spacing={{ xs: 2 }} style={{}}>
          {Array.from(Array(5)).map((_, index) => (
            <Grid
              item
              // xs={2} sm={4} md={4}
              key={index}
            >
              <PostCard />
            </Grid>
          ))}
        </Grid>
      </div>
    </Grid>
  );
};

export default Posts;
