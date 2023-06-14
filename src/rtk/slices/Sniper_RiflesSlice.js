import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "Sniper_RiflesSlice";

const getSniper_Rifles = () => {
  return axios.get("http://localhost:9000/Sniper_Rifles");
};

export const fetchSniper_Rifles = createAsyncThunk(
  `${sliceName}/fetchSniper_Rifles`,
  async () => {
    try {
      const Sniper_Rifles = await getSniper_Rifles();
      return Sniper_Rifles.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const Sniper_RiflesSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSniper_Rifles.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const Sniper_RiflesReducer = Sniper_RiflesSlice.reducer;
