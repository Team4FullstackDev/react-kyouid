import { createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteCart, getProductsCart } from "../actions/carts.action";

const initialState = {
  user: {
    name: "",
    username: "",
    email: "",
    token: "",
  },
  carts: [],
  wishlist: [],
  orders: [],
  loading: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.carts = action.payload;
      state.loading = false
    }) 
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getProductsCart.fulfilled, (state, action) => {
      state.carts = action.payload;
    })
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      state.carts = state.carts.filter((item) => item.id != action.payload);
    })
  }
});

export default userSlice.reducer;
