import React from "react";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Search from "./home/Search";

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <h1>Weather</h1>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </Container>
  );
};

export default Home;
