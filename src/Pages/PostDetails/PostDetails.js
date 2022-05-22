import React, { useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import OwnerDetails from "./components/OwnerDetails";
import { ArrowBack, Instagram } from "@mui/icons-material";
import Tags from "../../Components/Tags/Tags";
import Likes from "./components/Likes";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../customHooks/fetchHook";
import Comments from "./components/Comment";

const PostDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  // this the most readable way of sending httpRequests utilising custom hooks for a cleaner code
  const [data, error, loading] = useFetch(`/post/${id}`);
  const goBack = () => {
    navigate(-1);
  };
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
          Post details
        </Typography>
        <Button
          variant="contained"
          disableElevation
          startIcon={<ArrowBack />}
          style={{
            backgroundColor: "inherit",
            color: "#6C6D70",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: "500",
            letterSpacing: "0",
            lineHeight: "18px",
            paddingLeft: 0,
          }}
          onClick={goBack}
        >
          Posts
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "3px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 1px 4px 0 rgba(0,0,0,0.1)",
          padding: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <OwnerDetails owner={data?.owner} pubDate={data?.publishDate} />
          <Button disableElevation variant="contained" endIcon={<Instagram />}>
            View post
          </Button>
        </div>
        <img
          src={data?.image}
          alt=""
          style={{
            height: 300,
            borderRadius: 4,
            display: "block",
            objectFit: "cover",
            marginBottom: 15,
          }}
        ></img>
        <Likes likes={data?.likes} />
        <Tags
          tags={data?.tags}
          style={{
            padding: 10,
            fontFamily: "Roboto",
            fontSize: "16px",
          }}
        />
      </div>
      <Comments />
    </Grid>
  );
};

export default PostDetails;
