import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "MeleeSlice";

const getMelee = () => {
  return axios.get("http://localhost:9000/Melee");
};

export const fetchMelee = createAsyncThunk(
  `${sliceName}/fetchMelee`,
  async () => {
    try {
      const Melee = await getMelee();
      return Melee.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const MeleeSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMelee.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const MeleeReducer = MeleeSlice.reducer;
