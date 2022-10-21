import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  defaultThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../Utilities/Constants";
import { border } from "@mui/system";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet);

  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet.thumbnails.high.url}
          alt={snippet.title}
          sx={{ width: 358, height: 180 }}
        ></CardMedia>
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "115px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoTitle}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet.title.slice(0, 50) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet.channelTitle || demoChannelTitle}
          </Typography>
        </Link>
        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
      </CardContent>
    </Card>
  );
};

export default VideoCard;
