import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'renderer/redux/store';

interface GeneralState {
  test: number;
}

const initialState: GeneralState = {
  test: 11,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    increment: (state) => {
      state.test += 1;
    },
  },
});

export const selectTest = (state: RootState) => state.general.test;

export const { increment } = generalSlice.actions;

export default generalSlice.reducer;
