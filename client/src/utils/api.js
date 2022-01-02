import axios from "axios";

export const shortenLink = (long_url) => {
  const headers = {
    Authorization: `Bearer ${process.env.API_KEY}`,
    "Content-Type": "application/json",
  };

  const dataString = { long_url: long_url };

  return axios.post("https://api-ssl.bitly.com/v4/shorten", dataString, {
    headers: headers,
  });
};
