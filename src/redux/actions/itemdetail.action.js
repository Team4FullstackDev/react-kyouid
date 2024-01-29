import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

export const getProductDetail = createAsyncThunk(
  "itemDetail/getProductDetail",
  async (id) => {
    const response = await axios.get(`${baseUrl}/products/${id}`);
    return response.data;
  }
);

export const addWishlist = createAsyncThunk(
  "itemDetail/addWishlist",
  async (body) => {
    const response = await axios.post(`${baseUrl}/wishlist`, body);
    return response.data;
  }
);

export const addToCart = createAsyncThunk(
  "itemDetail/addToCart",
  async (body) => {
    const userToken = JSON.parse(localStorage.getItem("user")).accessToken;

    if (!userToken) {
      throw new Error("Please login first");
    }

    const response = await axios.post(`${baseUrl}/carts`, body, {
      headers: {
        'Authorization': `Bearer ${userToken}`,
        },
        withCredentials: true
    });
    return response.data;
  }
);
