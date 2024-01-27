import { createSlice } from "@reduxjs/toolkit";
import { register } from "../actions/auth.action";

const initialState = {
  error: false,
  message: "",
  loading: false,
  formFill: {
    fullName: "",
    username: "",
    email: "",
    password: "",
    birthDate: "",
  },
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setFormFill: (state, action) => {
      state.formFill[action.payload.name] = action.payload.value;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.message = "Register success";
    });
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.message = "Register failed";
    });
  },
});

export const { setFormFill, setMessage } = registerSlice.actions;

export default registerSlice.reducer;
