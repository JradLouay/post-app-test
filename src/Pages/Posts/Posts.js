import React, { useState, useEffect } from "react";
import PostCard from "../../Components/PostCard/PostCard";
import Grid from "@mui/material/Grid";
import Filters from "./components/Filters";
import { Skeleton, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPosts } from "./postsApi";
const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await getPosts(currentPage);
        setTotalPosts(data.total);
        setPosts(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
    return () => {};
  }, []);
  const loadMorePosts = async () => {
    // put limit as a global var
    // here we can use two way loading (up and down) to reduce state size
    // or react query hooks to handle all the data fetching
    if (currentPage <= Math.ceil(totalPosts / 10)) {
      try {
        const { data } = await getPosts(currentPage + 1);
        setTotalPosts(data.total);
        setPosts((prev) => [...prev, ...data.data]);
        setCurrentPage(data.page);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Grid
      container
      xs={10}
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <div style={{ marginBottom: 20 }}>
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
          Posts
        </Typography>
      </div>
      <Filters />
      <div
        id="scrollablePart"
        style={{
          marginTop: 20,
          height: "calc(100vh - 183px)",
          overflow: "auto",
        }}
      >
        {" "}
        {loading ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <Skeleton variant="rectangular" width={345} height={366} />
            <Skeleton variant="rectangular" width={345} height={366} />
          </div>
        ) : (
          posts && (
            <InfiniteScroll
              dataLength={posts.length}
              next={loadMorePosts}
              hasMore={currentPage < Math.ceil(totalPosts / 10)}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
              }}
              loader={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Roboto",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  <h4>Loading...</h4>{" "}
                </div>
              }
              scrollableTarget="scrollablePart"
            >
              {posts?.map((post, index) => (
                <PostCard post={post} />
              ))}
            </InfiniteScroll>
          )
        )}
      </div>
    </Grid>
  );
};

export default Posts;
