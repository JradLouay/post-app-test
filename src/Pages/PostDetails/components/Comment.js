import React from "react";
import { TextField } from "@mui/material";

import InfiniteScroll from "react-infinite-scroll-component";

const Comments = () => {
  return (
    <>
      <div
        id="scrollablePart"
        style={{
          display: "flex",
          flexDirection: "column",
          height: 252,
          marginTop: 20,
          marginBottom: 20,
          overflowY: "auto",
        }}
      >
        <InfiniteScroll
          dataLength={5}
          loader={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <h4>Loading...</h4>{" "}
            </div>
          }
          scrollableTarget="scrollablePart"
        >
          {[...Array(5)].map((_, index) => (
            <div
              style={{
                height: "74px",
                marginBottom: 10,
                borderRadius: "3px",
                backgroundColor: "#FFF",
                boxShadow: "0 1px 4px 0 rgba(0,0,0,0.1)",
              }}
            >
              comment{" "}
            </div>
          ))}
        </InfiniteScroll>
      </div>
      <TextField
        fullWidth
        id="comment-input"
        label="Comment"
        multiline
        rows={3}
      />
    </>
  );
};

export default Comments;
