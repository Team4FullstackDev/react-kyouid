import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from "../actions/carts.action";

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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.carts = action.payload;
    })  
  }
});

export default userSlice.reducer;
