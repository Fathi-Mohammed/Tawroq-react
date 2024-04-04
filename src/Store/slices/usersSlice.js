import { createSlice } from "@reduxjs/toolkit";
import { featchUsers } from "../thunks/featchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder // Featch Users
      .addCase(featchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(featchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(featchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      }) // Add User
      .addCase(addUser.pending, (state) => {
        state.isCreatingUser = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isCreatingUser = false;
        state.data.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isCreatingUser = false;
        state.error = action.error;
      }) // Remove User
      .addCase(removeUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((user) => user.id !== action.payload.id);
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const usersReducer = usersSlice.reducer;
