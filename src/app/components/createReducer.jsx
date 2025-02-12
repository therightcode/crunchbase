import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./action";

const initialState = {
  status: "idle",
  error: null,
  data: [],
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, error) => {
        state.status = "rejected";
        state.error = error.error.message;
      });
  },
});

export default createReducer;
