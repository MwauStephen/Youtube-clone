import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchFromApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(response);

  const { data} = response;
  console.log(data);

  return data;
};

export default fetchFromApi;
