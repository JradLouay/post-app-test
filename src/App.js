import React from "react";
import Posts from "./Pages/Posts/Posts";
import { Route, Routes, Navigate } from "react-router-dom";
import PostDetails from "./Pages/PostDetails/PostDetails";
import "./App.css";
import Layout from "./Layouts/Layout";
function App() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/posts" replace={true} />} />
      <Route path="/" element={<Layout />}>
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
