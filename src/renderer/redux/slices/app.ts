import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AppState {
  battery: {
    interval: number;
  };
}

const initialState: AppState = {
  battery: {
    interval: 60000,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const selectBatteryInterval = (state: RootState) =>
  state.app.battery.interval;

export default appSlice.reducer;
