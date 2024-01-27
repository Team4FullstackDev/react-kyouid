import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
export const login = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const { username, password } = body;
      const response = await axios.post(`${baseUrl}/login`, {
        username,
        password,
      });

      return response.data;
    } catch (error) {
      // Handle other errors, e.g., network issues
      return rejectWithValue("an errro occured");
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    try {
      console.log(body)
      const response = await axios.post(`${baseUrl}/users`, {...body, phoneNumber: '0'});
      console.log(response.data)
      return response.data;
    } catch (error) {
      // Handle other errors, e.g., network issues
      return rejectWithValue(error);
    }
  }
);
