import React from "react";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "../Videos/Videos";
import { channelCard } from "../Videos/ChannelCard";
import fetchFromApi from "../../Utilities/fetchFromApi";

const ChannelDetail = (props) => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();

  console.log(channelDetail);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
    });
  }, [id]);

  return <div>{id}</div>;
};

export default ChannelDetail;
