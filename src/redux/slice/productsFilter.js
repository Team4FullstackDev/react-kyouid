import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

// Define an initial filter state
const initialFilterState = {
  status: [],
  category: [],
  character: [],
  series: [],
};

// Define the initial state
const initialState = {
  productsFilter: [],
  loading: false,
  error: "",
  filter: initialFilterState,
};

// Modify getProducts to accept filter parameters
export const getProductsByFilter = createAsyncThunk(
  "products/filter",
  async (filterParams) => {
    const response = await axios.get(`${baseUrl}/products`, {
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
const productFilterSlice = createSlice({
  name: "productsFilter",
  initialState,
  reducers: {
    resetFilter: (state) => {
      state.filter = initialFilterState;
    },
    updateFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsByFilter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductsByFilter.fulfilled, (state, action) => {
      state.loading = false;
      state.productsFilter = action.payload;
      state.error = "";
    });
    builder.addCase(getProductsByFilter.rejected, (state, action) => {
      state.loading = false;
      state.productsFilter = [];
      state.error = action.error.message;
    });
  },
});

// Export the resetFilter action
export const { resetFilter, updateFilter } = productFilterSlice.actions;

// Export the reducer
export default productFilterSlice.reducer;
