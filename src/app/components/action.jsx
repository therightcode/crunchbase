import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("/post/getdata", async ({ text }) => {
  const options = {
    method: "POST",
    url: "https://tattoo-image-generator.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php",
    headers: {
      "x-rapidapi-key": "721955d12emsh12900079c7be162p1e7203jsnb805721c4d3d",
      "x-rapidapi-host": "tattoo-image-generator.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      //   prompt: "make Tattoo image one girls head tattoo",
      prompt: text,
      style_id: 32,
      size: "1-1",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
