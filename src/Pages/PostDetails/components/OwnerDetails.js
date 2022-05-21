import React, { useState } from "react";
import { Avatar, Typography } from "@mui/material";

const OwnerDetails = ({ owner, loading }) => {
  //   const [loading, setLoading] = useState();
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src=""
        style={{
          width: 60,
          height: 60,
          fontFamily: "Roboto",
          fontSize: 23,
        }}
      >
        {`L J`}
      </Avatar>
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
          {`louay jrad`}
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
          {loading
            ? // <Skeleton width={200} />
              `${"louay"}`
            : `${"louay"}`}
        </Typography>
      </div>
    </div>
  );
};

export default OwnerDetails;
