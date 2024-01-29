import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("carts/add", async (body) => {
  const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/carts`, body);
  return response.data;
});

export const getProductsCart = createAsyncThunk("carts/all", async () => {
  try {
    const userId = JSON.parse(localStorage.getItem("user")).user.id;
    const response = await axios(`${import.meta.env.VITE_BACKEND_BASE_URL}/carts/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteCart = createAsyncThunk("carts/delete", async (id) => {
  await axios.delete(`http://localhost:3000/carts/${id}`);
  return id;
});
