import React from "react";
import useFetch from "../../customHooks/fetchHook";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Grid, Skeleton, Typography } from "@mui/material";
import { ArrowBack, Instagram } from "@mui/icons-material";
import Tags from "../../Components/Tags/Tags";
import Likes from "../../Components/Likes/Likes";
import Comments from "./components/Comment";
import OwnerDetails from "./components/OwnerDetails";

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // used a cutom fetch hook for sending httpRequests
  // utilising custom hooks for a more cleaner and understandable code
  const [data, loading] = useFetch(`/post/${id}`);
  const goBack = () => {
    navigate(-1);
  };
  // navigate to post link
  const redirectToInstagram = () => {
    window.location.replace(data.link);
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
          <OwnerDetails
            owner={data?.owner}
            pubDate={data?.publishDate}
            loading={loading}
          />
          <Button
            onClick={redirectToInstagram}
            disableElevation
            variant="contained"
            endIcon={<Instagram />}
          >
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
        <Typography
          style={{
            color: "#021846",
            fontFamily: "Roboto",
            fontSize: "26px",
            fontWeight: "500",
            letterSpacing: "0",
            lineHeight: "28px",
            height: 43,
            marginBottom: 20,
          }}
        >
          {loading ? (
            <Skeleton variant="rectangular" width={100} heigh={40} />
          ) : (
            data?.text
          )}
        </Typography>
        <Likes likes={data?.likes} loading={loading} />
        <Tags
          tags={data?.tags}
          style={{
            padding: 10,
            fontFamily: "Roboto",
            fontSize: "16px",
          }}
        />
        <Comments postId={id} />
      </div>
    </Grid>
  );
};

export default PostDetails;
