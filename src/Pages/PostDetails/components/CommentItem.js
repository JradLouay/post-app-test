import React from "react";
import { Avatar, Typography } from "@mui/material";

const CommentItem = ({ comment, index }) => {
  return (
    <div
      key={index}
      style={{
        display: "flex",
        alignItems: "center",
        height: "74px",
        marginBottom: 10,
        borderRadius: "3px",
        backgroundColor: "#FFF",
        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: 15,
        }}
      >
        <Avatar src={comment.owner.picture} />
      </div>
      <Typography>{comment.message}</Typography>
    </div>
  );
};

export default CommentItem;
