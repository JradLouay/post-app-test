import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { CardActionArea, Typography } from "@mui/material";
import Tags from "../Tags/Tags";
import { useNavigate } from "react-router-dom";

const post = {
  id: "60d21b4667d0d8992e610c85",
  image: "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
  likes: 43,
  tags: ["animal", "dog", "golden retriever"],
  text: "adult Labrador retriever",
  publishDate: "2020-05-24T14:53:17.598Z",
  owner: {
    id: "60d0fe4f5311236168a109ca",
    title: "ms",
    firstName: "Sara",
    lastName: "Andersen",
    picture: "https://randomuser.me/api/portraits/women/58.jpg",
  },
};
export default function PostCard() {
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
          action={<>{post.likes}</>}
          title={post.text}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={post.image}
          alt={post.text}
        />
        <CardContent>
          <Tags tags={post.tags} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
