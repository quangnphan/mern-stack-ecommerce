import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    subTotal: 0,
    tax: 0,
    shipping: 7.99,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.subTotal += action.payload.price * action.payload.quantity;
      state.tax = state.subTotal*8.25/100;
      state.total = (state.subTotal + state.tax + state.shipping).toFixed(2);
    },
    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex(p => p.id === action.payload.id);

      if (productIndex === -1) return;

      state.quantity -= 1;
      state.subTotal -= state.products[productIndex].price * state.products[productIndex].quantity;
      state.tax = state.subTotal*8.25/100;
      state.total = (state.subTotal + state.tax + state.shipping).toFixed(2);
      state.products.splice(productIndex, 1);
      
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      state.subTotal = 0;
      state.tax = 0;
    }
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
