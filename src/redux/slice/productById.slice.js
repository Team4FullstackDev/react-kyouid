import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const initialState = {
  productById: [],
};

export const getProductById = createAsyncThunk("productById", async (id) => {
  const response = await axios.get(`${baseUrl}/products/${id}`);
  return response.data;
});

const productByIdSlice = createSlice({
  name: "productById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.productById = action.payload;
    });
  },
});

export default productByIdSlice.reducer;
