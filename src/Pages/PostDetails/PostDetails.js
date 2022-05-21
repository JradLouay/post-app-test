import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import OwnerDetails from "./components/OwnerDetails";
import { ArrowBack, Instagram } from "@mui/icons-material";
import Tags from "../../Components/Tags/Tags";
import Likes from "./components/Likes";
import { useNavigate } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();

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
          <OwnerDetails />
          <Button disableElevation variant="contained" endIcon={<Instagram />}>
            View post
          </Button>
        </div>
        <img
          src="https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg"
          alt=""
          style={{
            height: 300,
            borderRadius: 4,
            display: "block",
            objectFit: "cover",
            marginBottom: 15,
          }}
        ></img>
        <Likes />
        <Tags
          tags={["louay", "jrad", "nixs", "maradonna"]}
          style={{
            padding: 10,
            fontFamily: "Roboto",
            fontSize: "16px",
          }}
        />
        {/* comments section  */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: 252,
            marginTop: 20,
            marginBottom: 20,
            overflowY: "auto",
          }}
        >
          {Array.from(Array(18)).map((_, index) => (
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
        </div>
        <TextField
          fullWidth
          id="comment-input"
          label="Comment"
          multiline
          rows={3}
        />
      </div>
    </Grid>
  );
};

export default PostDetails;
