import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "../Videos/Videos";
import { channelCard } from "../Videos/ChannelCard";

const ChannelDetail = (props) => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default ChannelDetail;
