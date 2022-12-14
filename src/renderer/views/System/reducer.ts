import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SystemArgs } from 'main/si/types';
import { RootState } from 'renderer/redux/store';
import { sendMessage } from 'renderer/utils/ipc';

// initial state
interface SystemState {
  data: SystemArgs | null;
  loading: boolean;
  error: string;
}

// initial state
const initialState: SystemState = {
  data: null,
  loading: false,
  error: '',
};

// slice
const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    getSystem: (state) => {
      state.error = '';
      state.loading = true;
      sendMessage('system', []);
    },
    onSystem: (state, action: PayloadAction<SystemArgs>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
      state.data = null;
    },
  },
});

// selectors
export const selectBaseboard = (state: RootState) =>
  state.system.data?.baseboard;
export const selectBios = (state: RootState) => state.system.data?.bios;
export const selectChassis = (state: RootState) => state.system.data?.chassis;
export const selectSystem = (state: RootState) => state.system.data?.system;
export const selectUuid = (state: RootState) => state.system.data?.uuid;
export const selectError = (state: RootState) => state.system.error;
export const selectLoading = (state: RootState) => state.system.loading;

// actions
export const { getSystem, onSystem, setError } = systemSlice.actions;

// reducer
export default systemSlice.reducer;
