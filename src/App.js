import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./Components";

import { Box } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: `#000` }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} exact></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/channel/:id" element={<ChannelDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
