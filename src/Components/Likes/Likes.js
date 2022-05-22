import React from "react";
import { Favorite } from "@mui/icons-material";
import { Skeleton, Typography } from "@mui/material";

const Likes = ({ likes, loading }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Favorite
        style={{
          color: "red",
          marginRight: 5,
        }}
      />
      <Typography
        style={{
          color: "#6C6D70",
          fontFamily: "Roboto",
          fontSize: "17px",
        }}
      >
        {loading ? (
          <Skeleton variant="rectangular" width={50} height={25} />
        ) : (
          `${likes} likes`
        )}
      </Typography>
    </div>
  );
};

export default Likes;
