import { createSlice } from "@reduxjs/toolkit"
import { login } from "../actions/auth.action"
import { setUsername, setPassword } from "./login.slice"

const initialState = {
    currentUser: null,
    error: false,
    loading: false,
    message: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload)
            state.currentUser = action.payload
            state.loading = false
            state.message = 'Login success'
        })
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.error = true
            state.loading = false
            state.message = action.payload
        })
    }
})

export const { setCurrentUser, setMessage } = authSlice.actions

export default authSlice.reducer