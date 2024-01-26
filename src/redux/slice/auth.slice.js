import { createSlice } from "@reduxjs/toolkit"
import { login } from "../actions/auth.action"

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

export const { setCurrentUser } = authSlice.actions

export default authSlice.reducer