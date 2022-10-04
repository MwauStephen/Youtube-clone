import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SideBar from "../Layout/SideBar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "2px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright Stephen Mwau
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
