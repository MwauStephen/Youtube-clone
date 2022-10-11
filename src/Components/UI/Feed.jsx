import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";

import SideBar from "../Layout/SideBar";
import Videos from "../Videos/Videos";
import fetchFromApi from "../../Utilities/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos,setVideos]=useState([]);

  useEffect(() => {
    fetchFromApi(`search?=part=snippet&q=${selectedCategory}`).then((data)=>{setVideos(data.items)});
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "2px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright Stephen Mwau
        </Typography>
      </Box>

      {/*vidoes feed  */}
      <Box
        sx={{
          flex: 2,
          height: "90vh",
          overflowY: "auto",
        }}
        p={2}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "white" }}
          mb={2}
        >
          {selectedCategory}&nbsp;
          <span style={{ color: "#fc1503" }}>Vidoes</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
