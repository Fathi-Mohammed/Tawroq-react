import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const removeUser = createAsyncThunk("users/remove", async ({ id }) => {
  const response = await axios.delete(`http://localhost:3005/users/${id}`);
  return response.data;
});
