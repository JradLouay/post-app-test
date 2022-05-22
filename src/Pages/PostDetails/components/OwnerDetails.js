import React from "react";
import { Avatar, Skeleton, Typography } from "@mui/material";

const OwnerDetails = ({ owner, pubDate, loading }) => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {loading ? (
        <Skeleton variant="circular" width={60} height={60} />
      ) : (
        <Avatar
          alt={`${owner?.firstName} ${owner?.lastName}`}
          src={owner?.picture}
          style={{
            width: 60,
            height: 60,
            fontFamily: "Roboto",
            fontSize: 23,
          }}
        >
          {`${owner?.firstName.charAt(0)} ${owner?.lastName.charAt(0)}`}
        </Avatar>
      )}
      <div
        style={{
          marginLeft: 20,
        }}
      >
        <Typography
          style={{
            color: "#021846",
            fontSize: "18px",
            fontWeight: "500",
            fontFamily: "Roboto",
            letterSpacing: "0",
            lineHeight: "28px",
            marginBottom: 7,
          }}
        >
          {loading ? (
            <Skeleton variant="rectangular" width={90} height={25} />
          ) : (
            `${owner?.firstName} ${owner?.lastName}`
          )}
        </Typography>
        <Typography
          style={{
            color: "#6C6D70",
            fontFamily: "Roboto",
            fontSize: "18px",
            letterSpacing: "0",
            lineHeight: "18px",
          }}
        >
          {loading ? (
            <Skeleton variant="rectangular" width={90} height={25} />
          ) : (
            new Date(pubDate).toLocaleDateString(undefined)
          )}
        </Typography>
      </div>
    </div>
  );
};

export default OwnerDetails;
