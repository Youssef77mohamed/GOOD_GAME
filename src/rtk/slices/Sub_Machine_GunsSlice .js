import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "ShotgunsSlice";

const getSub_Machine_Guns = () => {
  return axios.get("http://localhost:9000/Sub_Machine_Guns");
};

export const fetchSub_Machine_Guns = createAsyncThunk(
  `${sliceName}/fetchSub_Machine_Guns`,
  async () => {
    try {
      const Sub_Machine_Guns = await getSub_Machine_Guns();
      return Sub_Machine_Guns.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const Sub_Machine_GunsSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSub_Machine_Guns.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const Sub_Machine_GunsReducer = Sub_Machine_GunsSlice.reducer;
