import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailProducts: {},
};

const itemDetailSlice = createSlice({
  name: "itemDetail",
  initialState,
  reducers: {
    getProductDetail: (state, action) => {
      state.detailProducts = action.payload;
    },
  },
});

export const { getProductDetail } = itemDetailSlice.actions;

export default itemDetailSlice.reducer;
