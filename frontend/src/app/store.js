import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import confirmationSlice from "./slices/confirmationSlice";

const rootReducer = {
    cart: cartSlice,
    update_purchaser_data: confirmationSlice,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;