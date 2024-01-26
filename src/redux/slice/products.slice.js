import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const getProducts = createAsyncThunk("products/", async () => {
  const response = await axios.get(`${baseUrl}/products`);
  const data = response.data.data.map((product) => ({
    ...product,
    createdAt: formatDate(product.createdAt),
  }));
  return data;
});

const formatDate = function formatDate(dateString) {
  const options = { year: "numeric", month: "long" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetFilter: (state) => {
      state.products = [];
      state.loading = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

// Export the resetFilter action
export const { resetFilter } = productSlice.actions;

// Export the reducer
export default productSlice.reducer;
