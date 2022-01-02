import axios from "axios";

export const shortenLink = (long_url) => {
  const headers = {
    Authorization: "Bearer 50bc82c5c13f54c2fea69c29255e8ffcf9cb5476",
    "Content-Type": "application/json",
  };

  const dataString = { long_url: long_url };

  return axios.post("https://api-ssl.bitly.com/v4/shorten", dataString, {
    headers: headers,
  });
};
