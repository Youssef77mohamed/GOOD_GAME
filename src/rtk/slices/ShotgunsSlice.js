import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "ShotgunsSlice";

const getShotguns = () => {
  return axios.get("http://localhost:9000/Shotguns");
};

export const fetchShotguns = createAsyncThunk(
  `${sliceName}/fetchShotguns`,
  async () => {
    try {
      const Shotguns = await getShotguns();
      return Shotguns.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const ShotgunsSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShotguns.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const ShotgunsReducer = ShotgunsSlice.reducer;
