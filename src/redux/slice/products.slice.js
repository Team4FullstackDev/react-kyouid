import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an initial filter state
const initialFilterState = {
  status: "",
  category: "",
  character: "",
  series: "",
};

// Define the initial state
const initialState = {
  products: [],
  loading: false,
  error: "",
  filter: initialFilterState,
};

// Modify getProducts to accept filter parameters
export const getProducts = createAsyncThunk(
  "products/",
  async (filterParams) => {
    const response = await axios.get("http://localhost:9001/products", {
      params: filterParams,
    });
    const data = response.data.data.map((product) => ({
      ...product,
      createdAt: formatDate(product.createdAt),
    }));
    return data;
  }
);
const formatDate = function formatDate(dateString) {
  const options = { year: "numeric", month: "long" };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

// Create the product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Add a reducer to reset the filter
    resetFilter: (state) => {
      state.filter = initialFilterState;
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
