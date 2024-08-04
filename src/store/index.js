import { createSlice, createStore } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase: (state, action) => {
      state.value++;
    },
    decrease: (state, action) => {
      state.value--;
    },
  },
});

// const initState = { counter: 1, showCounter: true };

// const counterReducer = (state = initState, action) => {
//   if (action.type === "increase") {
//     return { ...state, counter: state.counter + action.payload };
//   }
//   if (action.type === "decrease") {
//     return { ...state, counter: state.counter - action.payload };
//   }
//   if (action.type === "toggle") {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

const store = createStore(counterSlice.reducer);
export const counterActions = counterSlice.actions;

export default store;
