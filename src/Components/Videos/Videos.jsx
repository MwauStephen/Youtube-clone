import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { Stack, Box } from "@mui/material";

const Videos = (props) => {
  // console.log(props.videos);

  if (!props.videos?.length) return "Loading....";
  return (
    <Stack
      direction={props.direction || "row"}
      flexWrap="wrap"
      gap={2}
      justifyContent="spaceBetween"
    >
      {props.videos.map((item, id) => {
        // console.log(item);
        return (
          <Box key={id}>
            {item.id.videoId && <VideoCard video={item} />}

            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
