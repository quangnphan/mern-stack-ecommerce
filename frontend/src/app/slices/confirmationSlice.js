import { createSlice } from "@reduxjs/toolkit";

const confirmationSlice = createSlice({
  name: "update_purchaser_data",
  initialState: { purchaserData: {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  },
  },
  reducers: {
    updateInfo: (state, action) => {
      
      state.purchaserData = action.payload;
      console.log(action.payload);
    },    
  },
});

export const { updateInfo } = confirmationSlice.actions;
export default confirmationSlice.reducer;
