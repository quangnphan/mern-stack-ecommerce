import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const rootReducer = {
    cart: cartSlice,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;