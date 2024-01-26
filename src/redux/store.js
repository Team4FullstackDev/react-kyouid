import { configureStore } from "@reduxjs/toolkit";
import itemDetailReducer from "./slice/productById.slice";
import userReducer from "./slice/user.slice";
import loginReducer from "./slice/login.slice";
import authReducer from "./slice/auth.slice";
import registerReducer from "./slice/register.slice";
import productReducer from "./slice/products.slice";
import productsFilter from "./slice/productsFilter";
import productById from "./slice/productById.slice";
export const store = configureStore({
  reducer: {
    productById: productById,
    user: userReducer,
    login: loginReducer,
    auth: authReducer,
    register: registerReducer,
    products: productReducer,
    productsFilter: productsFilter,
  },
});
