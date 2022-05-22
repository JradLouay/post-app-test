import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layouts/Layout";
import PostDetails from "./Pages/PostDetails/PostDetails";
import Posts from "./Pages/Posts/Posts";

function App() {
  return (
    <Routes>
      {/* redirect to posts list page */}
      <Route path="" element={<Navigate to="/posts" replace={true} />} />
      {/* inside the app layout render components specific to each route */}
      <Route path="/" element={<Layout />}>
        <Route path="posts" element={<Posts />} />
        {/* pass post id as a param */}
        <Route path="posts/:id" element={<PostDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
