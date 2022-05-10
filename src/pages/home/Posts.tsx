import React, { useEffect, useState } from "react";
import { Stack, TextField } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import {useGetPostsQuery} from "../../app/services/api";
import {
  setPosts,
} from "../../store/dataSlice";
import PostsTable from "../../components/posts/PostsTable";

const Posts: React.FC = () => {
  const dispatch = useAppDispatch();
  const getPostsQueryResponse = useGetPostsQuery(null);

  useEffect(() => {
    if (!getPostsQueryResponse.isSuccess)
      return;
    dispatch(setPosts(getPostsQueryResponse.data));
  }, [getPostsQueryResponse.data]);


  return (
    <Stack>
      <PostsTable />
    </Stack>
  );
};

export default Posts;
