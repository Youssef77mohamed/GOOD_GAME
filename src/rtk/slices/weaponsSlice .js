import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "AssaultRiflesSlice";

const getAssaultRifles = () => {
  return axios.get("http://localhost:9000/AssaultRifles");
};

export const fetchAssaultRifles = createAsyncThunk(
  `${sliceName}/fetchAssaultRifles`,
  async () => {
    try {
      const AssaultRifles = await getAssaultRifles();
      return AssaultRifles.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const AssaultRiflesSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAssaultRifles.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const AssaultRiflesReducer = AssaultRiflesSlice.reducer;
