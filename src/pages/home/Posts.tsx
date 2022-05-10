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
  /*
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const searchLocationsQueryResponse = useSearchLocationsQuery(searchQuery, {
    skip: !searchQuery,
  });

  const isSearchQueryValid = () => searchQuery && searchQuery.length >= 2;
  useEffect(() => {
    if (!isSearchQueryValid() || !searchLocationsQueryResponse.isSuccess)
      return;
    dispatch(setSearchResults(searchLocationsQueryResponse.data));
  }, [searchLocationsQueryResponse.data]);

  useEffect(() => {
    if (isSearchQueryValid()) return;
    dispatch(clearSearchResults());
  }, [searchQuery])*/

  return (
    <Stack>
      {/*<TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        style={{ marginBottom: "2rem" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />*/}
      <PostsTable />
    </Stack>
  );
};

export default Posts;
