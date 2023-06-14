import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "PistolsSlice";

const getPistols = () => {
  return axios.get("http://localhost:9000/Pistols");
};

export const fetchPistols = createAsyncThunk(
  `${sliceName}/fetchPistols`,
  async () => {
    try {
      const Pistols = await getPistols();
      return Pistols.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const PistolsSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPistols.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const PistolsReducer = PistolsSlice.reducer;
