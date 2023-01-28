import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [
      {
        id: 1,
        name: "iPhone",
        storage: "128gb",
        color: "Space Gray",
        price: "1099",
        quantity: "1",
      },
      {
        id: 2,
        name: "Macbook",
        storage: "128gb",
        color: "Space Gray",
        price: "2099",
        quantity: "1",
      },
    ],
    quantity: 2,
    total: 4000,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
