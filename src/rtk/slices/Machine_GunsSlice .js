import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "Machine_GunsSlice";

const getMachine_Guns = () => {
  return axios.get("http://localhost:9000/Machine_Guns");
};

export const fetchMachine_Guns = createAsyncThunk(
  `${sliceName}/fetchMachine_Guns`,
  async () => {
    try {
      const Machine_Guns = await getMachine_Guns();
      return Machine_Guns.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const Machine_GunsSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMachine_Guns.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const Machine_GunsReducer = Machine_GunsSlice.reducer;
