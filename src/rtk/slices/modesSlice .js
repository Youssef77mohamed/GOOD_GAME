import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "ModesSlice";

const getModes = () => {
  return axios.get("http://localhost:9000/Modes");
};

export const fetchModes = createAsyncThunk(
  `${sliceName}/fetchModes`,
  async () => {
    try {
      const mode = await getModes();
      return mode.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const ModesSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchModes.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const ModesReducer = ModesSlice.reducer;
