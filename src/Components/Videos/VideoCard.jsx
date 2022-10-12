import React from 'react'
import { Link } from 'react-router-dom'
import {Typography,Card,CardContent,CardMedia} from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import {defaultThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from "../../Utilities/Constants";

const VideoCard = ({video:{id:{videoId},snippet}})=>{

console.log(snippet)


  
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}></Link>
     <CardMedia  image={snippet.thumbnails.high.url} alt={snippet.title} sx={{width:358, height:180}}></CardMedia>
    </Card>
  )
}

export default VideoCard