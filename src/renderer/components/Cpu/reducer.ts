import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICpu } from 'main/si/types';
import { RootState } from 'renderer/redux/store';

// initial state
interface CpuState {
  data?: ICpu;
  loading: boolean;
  error: string;
}

// initial state
const initialState: CpuState = {
  data: undefined,
  loading: false,
  error: '',
};

// cpu slice
const cpuSlice = createSlice({
  name: 'cpu',
  initialState,
  reducers: {
    getCpu: (state) => {
      state.error = '';
      state.loading = true;
      window.electron.ipcRenderer.sendMessage('cpu', []);
    },
    onCpu: (state, action: PayloadAction<ICpu | undefined>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
      state.data = undefined;
    },
  },
});

// selectors
export const selectCpu = (state: RootState) => state.cpu.data?.cpu;
export const selectTemps = (state: RootState) => state.cpu.data?.temperatures;

// actions
export const { getCpu, onCpu, setError } = cpuSlice.actions;

// reducer
export default cpuSlice.reducer;
