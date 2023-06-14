import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "productsSlice";

const getProducts = () => {
  return axios.get("http://localhost:9000/product");
};

export const fetchProducts = createAsyncThunk(
  `${sliceName}/fetchProducts`,
  async () => {
    try {
      const res = await getProducts();
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const productsSlice = createSlice({
  name: sliceName,
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const productsReducer = productsSlice.reducer;
