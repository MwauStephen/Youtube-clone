import axios from "axios";

const options = {
  method: "GET",
  url: "https://youtube-v31.p.rapidapi.com/search",
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "63a99cba99mshf78883e03c717b7p1808aejsnc2918390d6d5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
