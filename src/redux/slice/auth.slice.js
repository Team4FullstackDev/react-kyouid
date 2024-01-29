import { createSlice } from "@reduxjs/toolkit"
import { login, logout } from "../actions/auth.action"

const initialState = {
  currentUser: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  isLoggedIn: JSON.parse(localStorage.getItem("user"))?.user ? true : false,
  error: false,
  loading: false,
  message: "",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.message = 'Login success'
            state.isLoggedIn = true
        })
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.error = true
            state.loading = false
            state.message = action.payload
        })
        builder.addCase(logout.fulfilled, (state) => {
            state.currentUser = null
            state.loading = false
            state.message = 'Logout success'
        })
        builder.addCase(logout.pending, (state) => {
            state.loading = true
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.error = true
            state.loading = false
            state.message = action.payload
        })
    }
})

export const { setCurrentUser, setMessage, setIsLoggedIn } = authSlice.actions

export default authSlice.reducer