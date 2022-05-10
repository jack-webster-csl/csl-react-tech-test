import React from "react";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Posts from "./home/Posts";

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <h1>Test App</h1>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </Container>
  );
};

export default Home;
