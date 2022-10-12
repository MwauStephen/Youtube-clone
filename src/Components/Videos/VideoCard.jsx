import React from 'react'
import { Link } from 'react-router-dom'
import {Typography,Card,CardContent,CardMedia} from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import {defaultThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from "../../Utilities/Constants";

const VideoCard = ({video:{id:{videoId},snippet}})=>{

console.log(snippet)


  
  return (
    <Card>

      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
     <CardMedia  image={snippet.thumbnails.high.url} alt={snippet.title} sx={{width:358, height:180}}></CardMedia>
     </Link>
     
     <CardContent sx={{backgroundColor:"#1e1e1e", height:"106px"}}>


      <Link to={videoId ? `/video/${videoId}`:demoVideoTitle}>
      <Typography variant="subtitle1" fontWeight="bold" color="#fff">{snippet.title.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
      </Link>


      <Link to={snippet.channelId ? `/channel/${snippet.channelId}`:demoChannelUrl}>
      <Typography variant="subtitle2" fontWeight="bold" color="gray">{snippet.channelTitle || demoChannelTitle}</Typography>
      </Link>


     </CardContent>
    </Card>
  )
}

export default VideoCard