import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [
      {
        // id: 1,
        name: "iPhone",
        storage: "128gb",
        color: "Space Gray",
        price: 1099,
        quantity: 1,
      },
      {
        // id: 2,
        name: "Macbook",
        storage: "128gb",
        color: "Space Gray",
        price: 2099,
        quantity: 1,
      },
    ],
    quantity: 2,
    subTotal: 3198,
    tax: 0,
    shipping: 7,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.subTotal += action.payload.price * action.payload.quantity;
      state.tax = (state.subTotal*8.25/100);
      state.total = (state.subTotal + state.tax + state.shipping).toFixed(2);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
