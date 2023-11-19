import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const data = response.data;
      const { username, password } = body;

      const isUserFound = data.find(
        (user) => user.username == username && user.password == password
      );

      if (!isUserFound) {
        // Handle rejection with a specific value
        return rejectWithValue("User not found");
      }

      return isUserFound;
    } catch (error) {
      // Handle other errors, e.g., network issues
      return rejectWithValue("An error occurred");
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/users", body);
      return response.data;
    } catch (error) {
      // Handle other errors, e.g., network issues
      return rejectWithValue("An error occurred");
    }
  }
)