import { createSlice } from "@reduxjs/toolkit";
import { getProductDetail, addToCart, addWishlist } from "../actions/itemdetail.action";
const initialState = {
  detailProducts: {},
  error: false,
  message: '',
  loadingGetDetail: false,
  loadingAddCart: false,
  loadingAddWishlist: false
};

const itemDetailSlice = createSlice({
  name: "itemDetail",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.detailProducts = action.payload;
      state.loadingGetDetail = false
    })
    builder.addCase(getProductDetail.pending, (state) => {
      state.loadingGetDetail = true
    })
    builder.addCase(getProductDetail.rejected, (state) => {
      state.loadingGetDetail = false
      state.error = true
      state.message = 'Failed to get product detail'
    })
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.detailProducts = action.payload
      state.loadingAddCart = false
    })
    builder.addCase(addToCart.pending, (state) => {
      state.loadingAddCart = true
    })
    builder.addCase(addToCart.rejected, (state) => {
      state.loadingAddCart = false
      state.error = true
      state.message = 'Failed to add to cart'
    })
    builder.addCase(addWishlist.fulfilled, (state, action) => {
      state.detailProducts = action.payload
      state.loadingAddWishlist = false
    })
    builder.addCase(addWishlist.pending, (state) => {
      state.loadingAddWishlist = true
    })
    builder.addCase(addWishlist.rejected, (state) => {
      state.loadingAddWishlist = false
      state.error = true
      state.message = 'Failed to add to wishlist'
    })
  },
});

export default itemDetailSlice.reducer;
