import React from "react";
import { Favorite } from "@mui/icons-material";
import { Typography } from "@mui/material";

const Likes = () => {
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
        {`${"25"} likes`}
      </Typography>
    </div>
  );
};

export default Likes;
