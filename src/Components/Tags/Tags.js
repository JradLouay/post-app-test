import React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function Tags({ tags, style = {} }) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {tags.map((data, index) => (
        <ListItem key={index}>
          <Chip label={data} style={style} />
        </ListItem>
      ))}
    </Paper>
  );
}
