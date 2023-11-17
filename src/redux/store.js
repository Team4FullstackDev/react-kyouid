import { configureStore } from "@reduxjs/toolkit";
import itemDetailReducer from "./slice/itemdetail.slice"
import userReducer from "./slice/user.slice"

export const store = configureStore({
    reducer: {
        itemDetail: itemDetailReducer,
        user: userReducer
    }
})

