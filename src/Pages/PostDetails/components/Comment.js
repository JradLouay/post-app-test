import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { createComment, getComments } from "../../../postsApi";
import { useForm, Controller } from "react-hook-form";

const Comments = ({ postId }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalComments, setTotalComments] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await getComments(postId, currentPage);
        setTotalComments(data.total);
        setComments(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
    return () => {};
  }, []);
  const loadMoreComments = async () => {
    if (currentPage <= Math.ceil(totalComments / 10)) {
      try {
        const { data } = await getComments(postId, currentPage + 1);
        setTotalComments(data.total);
        setComments((prev) => [...prev, ...data.data]);
        setCurrentPage(data.page);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const onSubmit = async ({ comment }) => {
    try {
      const { status } = createComment(comment, postId);
      if (status === 200) {
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <div
        id="scrollablePart"
        style={{
          display: "flex",
          flexDirection: "column",
          height: 252,
          marginTop: 20,
          marginBottom: 20,
          overflowY: "auto",
        }}
      >
        {" "}
        {comments && (
          <InfiniteScroll
            dataLength={comments.length}
            next={loadMoreComments}
            hasMore={currentPage < Math.ceil(totalComments / 10)}
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
                {" "}
                <h4>Loading...</h4>{" "}
              </div>
            }
            scrollableTarget="scrollablePart"
          >
            {" "}
            {comments?.map((comment, index) => (
              <div
                style={{
                  height: "74px",
                  marginBottom: 10,
                  borderRadius: "3px",
                  backgroundColor: "#FFF",
                  boxShadow: "0 1px 4px 0 rgba(0,0,0,0.1)",
                }}
              >
                {comment.message}
              </div>
            ))}{" "}
          </InfiniteScroll>
        )}{" "}
      </div>{" "}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Controller
          name="comment"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              id="comment-input"
              label="Comment"
              fullWidth
              error={errors.comment?.type === "required"}
              multiline
              rows={3}
            />
          )}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 15,
          }}
        >
          <Button
            id="submitDocRequest"
            type="submit"
            style={{
              fontFamily: "Roboto",
              fontSize: "16px",
            }}
          >
            Post comment
          </Button>
        </div>
      </form>
    </>
  );
};
export default Comments;
