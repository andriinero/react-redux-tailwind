import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: (state) => {
      state.count += 1;
    },
    decremented: (state) => {
      state.count -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;

export default counterSlice;

export const selectCount = (state: RootState) => state.counter.count;
