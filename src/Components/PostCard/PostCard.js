import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { CardActionArea } from "@mui/material";
import Tags from "../Tags/Tags";
import { useNavigate } from "react-router-dom";
import Likes from "../Likes/Likes";

export default function PostCard({ post }) {
  const navigate = useNavigate();

  const postDetails = () => {
    navigate(`../posts/${post.id}`);
  };
  return (
    <Card elevation={0} style={{ width: 345 }}>
      <CardActionArea onClick={postDetails}>
        <CardHeader
          avatar={
            <Avatar>
              {`${post.owner.firstName.charAt(0)} ${post.owner.lastName.charAt(
                0
              )}`}
            </Avatar>
          }
          title={post.text}
          subheader={new Date(post.publishDate).toLocaleDateString(undefined)}
        />
        <CardMedia
          component="img"
          height="194"
          image={post.image}
          alt={post.text}
        />
        <CardContent>
          <Likes likes={post.likes} />
          <Tags tags={post.tags} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
