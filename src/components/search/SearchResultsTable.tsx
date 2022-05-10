import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LocationSearch } from "../../models/api/weather";
import { useAppSelector } from "../../app/hooks";

const SearchResultsTable: React.FC = () => {
  const searchResults: LocationSearch[] = useAppSelector(
    (state) => state.weather.searchResults
  );

  const headers = ["Title", "Location Type", "World ID"];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item, index) => {
              return <TableCell key={index}>{item}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {searchResults.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.location_type}</TableCell>
              <TableCell>{row.woeid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SearchResultsTable;
