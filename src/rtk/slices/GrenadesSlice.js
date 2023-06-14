import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "GrenadesSlice";

const getGrenades = () => {
  return axios.get("http://localhost:9000/Grenades");
};

export const fetchGrenades = createAsyncThunk(
  `${sliceName}/fetchGrenades`,
  async () => {
    try {
      const Grenades = await getGrenades();
      return Grenades.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const GrenadesSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGrenades.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const GrenadesReducer = GrenadesSlice.reducer;
