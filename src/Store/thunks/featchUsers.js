import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const featchUsers = createAsyncThunk("users/featchUsers", async ()=>{
  const ressponse = await axios.get("http://localhost:3005/users");

  // DEV Only !!!
  await pause(1000);
  
  return ressponse.data
});

// DEV Only !!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}