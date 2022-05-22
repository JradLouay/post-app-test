import React, { useState, useEffect } from "react";
import PostCard from "../../Components/PostCard/PostCard";
import Grid from "@mui/material/Grid";
import Filters from "./components/Filters";
import { Skeleton, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPosts } from "../../postsApi";
import useUpdateEffect from "../../customHooks/useUpdateEffect";

// Observations :
// get posts route doesn't allow the filtering by tags and users at the same time,
// hence developing it needs much more state manipulation "merge state from different routes"
// and figuring out which filter is active and many other cases.
// the filter by tag doesn't accommodate the use of multiple tags,
// instead we can use for each tag a new api call then we merge state which is overkill.

// conclusion only one filter works at a time + i use only one tag

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(null);
  const [loading, setLoading] = useState(null);
  // filters data
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

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

  useUpdateEffect(() => {
    // fires only on component update
    (async function () {
      try {
        setLoading(true);
        const { data } = await getPosts(
          currentPage,
          selectedUser,
          selectedTags
        );
        setTotalPosts(data.total);
        setPosts(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [selectedUser, selectedTags]);

  const loadMorePosts = async () => {
    if (currentPage <= Math.ceil(totalPosts / 10)) {
      try {
        const { data } = await getPosts(
          currentPage + 1,
          selectedUser,
          selectedTags
        );
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
      <div style={{ marginBottom: 10 }}>
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
      <Filters
        selectUser={setSelectedUser}
        selectedUser={selectedUser}
        selectedTags={selectedTags}
        selectTags={setSelectedTags}
      />
      <div
        id="scrollablePart"
        style={{
          marginTop: 20,
          height: "calc(100vh - 210px)",
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
            // here we can use two way loading (up and down) to reduce state size for better performance
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
