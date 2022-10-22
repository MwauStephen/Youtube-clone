import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import Videos from "../Videos/Videos";
import fetchFromApi from "../../Utilities/fetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q`).then((data) => {
      setVideos(data.items);
    });
  }, []);
  // console.log(videos);

  return (
    <Box
      sx={{
        flex: 2,
        height: "90vh",
        overflowY: "auto",
      }}
      p={2}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }} mb={2}>
        Search results for:
        <span style={{ color: "#fc1503" }}>Videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
