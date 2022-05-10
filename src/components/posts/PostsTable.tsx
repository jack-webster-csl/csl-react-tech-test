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
import {Post} from "../../models/api";
import { useAppSelector } from "../../app/hooks";

const PostsTable: React.FC = () => {
  const posts: Post[] = useAppSelector(
    (state) => state.data.posts
  );

  const headers = ["ID", "Title", "Body"];

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
          {posts.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>
                {row.title}
              </TableCell>
              <TableCell>{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostsTable;
