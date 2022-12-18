import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AppState {
  battery: {
    interval: number;
  };
  general: {
    timeIntervall: number;
  };
}

const initialState: AppState = {
  battery: {
    interval: 60000,
  },
  general: {
    timeIntervall: 1000,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const selectBatteryInterval = (state: RootState) =>
  state.app.battery.interval;
export const selectTimeInterval = (state: RootState) =>
  state.app.general.timeIntervall;

export default appSlice.reducer;
