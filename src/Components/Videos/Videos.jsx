import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import {Stack,Box} from "@mui/material"

const Videos = (props) => {
    return <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="start" sx={{backgroundColor:"orangered"}}>
        {props.videos.map((item,id)=>{
          return <Box key={id} sx={{backgroundColor:"green", color:"white"}}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        })}
    </Stack>
};

export default Videos;
