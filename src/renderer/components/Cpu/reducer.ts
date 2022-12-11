import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CpuArgs } from 'main/si/types';
import { RootState } from 'renderer/redux/store';

const { sendMessage } = window.api.ipcRenderer;

// initial state
interface CpuState {
  data: CpuArgs | null;
  loading: boolean;
  error: string;
}

// initial state
const initialState: CpuState = {
  data: null,
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
      sendMessage('cpu', []);
    },
    onCpu: (state, action: PayloadAction<CpuArgs>) => {
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
export const selectCpu = (state: RootState) => state.cpu.data?.cpu;
export const selectTemps = (state: RootState) => state.cpu.data?.temperatures;

// actions
export const { getCpu, onCpu, setError } = cpuSlice.actions;

// reducer
export default cpuSlice.reducer;
