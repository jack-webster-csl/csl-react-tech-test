import React, { useEffect, useState } from "react";
import SearchResultsTable from "../../components/search/SearchResultsTable";
import { Stack, TextField } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { useSearchLocationsQuery } from "../../app/services/api";
import {
  clearSearchResults,
  setSearchResults,
} from "../../store/weatherSlice";

const Search: React.FC = () => {
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
  }, [searchQuery]);

  return (
    <Stack>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        style={{ marginBottom: "2rem" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchResultsTable />
    </Stack>
  );
};

export default Search;
