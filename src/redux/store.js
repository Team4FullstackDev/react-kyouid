import { configureStore } from "@reduxjs/toolkit";
import itemDetailReducer from "./slice/itemdetail.slice"
import userReducer from "./slice/user.slice"
import loginReducer from "./slice/login.slice"
import authReducer from "./slice/auth.slice"
import registerReducer from "./slice/register.slice"
export const store = configureStore({
    reducer: {
        itemDetail: itemDetailReducer,
        user: userReducer,
        login: loginReducer,
        auth: authReducer,
        register: registerReducer
    }
})

