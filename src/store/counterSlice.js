import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "my_counter",
  initialState: { value: 1000 },
  reducers: {
    high: (state, action) => {
      state.value++;
    },
    low: (state, action) => {
      state.value--;
    },
  },
});
