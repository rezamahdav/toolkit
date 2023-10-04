import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { number: 0 };
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: INITIAL_STATE,
  reducers: {
    incrementNumber: (state) => {
      state.number += 10;
    },
    decrementNumber: (state) => {
      state.number -= 10;
    },
    reset: (state) => {
      state.number = 0;
    },
    // customInc: (state, action) => {
    //   state.number += action.payload.number;
    // },
    customInc:(state, {payload})=>{
        state.number += payload.number;
    }
  },
});
export const { incrementNumber, decrementNumber, reset, customInc } =
  counterSlice.actions;
export default counterSlice.reducer;
