import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("carts/add", async (body) => {
  const response = await axios.post("http://localhost:3000/carts", body);
  return response.data;
});

export const getProductsCart = createAsyncThunk("carts/all", async () => {
  const response = await axios("http://localhost:3000/carts")
  return response.data;
})
