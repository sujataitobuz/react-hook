import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./appStore";

interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice ( {
    name: 'counter',
    initialState,

    reducers: {
        increment: (state) => {
      state.value = state.value + 1
    },
    decrement: (state) => {
      state.value = state.value - 1
    },
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer