import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BatteryArgs } from "main/si/types";
import { RootState } from "renderer/redux/store";
import { sendMessage } from "renderer/utils/ipc";

// initial state
interface BatteryState {
  data: BatteryArgs | null;
  loading: boolean;
  error: string;
}

// initial state
const initialState: BatteryState = {
  data: null,
  loading: false,
  error: "",
};

// cpu slice
const batterySlice = createSlice({
  name: "battery",
  initialState,
  reducers: {
    getData: (state) => {
      state.error = "";
      state.loading = true;
      sendMessage("battery", []);
    },
    setData: (state, action: PayloadAction<BatteryArgs>) => {
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
export const selectBattery = (state: RootState) => ({
  data: state.battery.data,
  loading: state.battery.loading,
  error: state.battery.error,
});

// actions
export const { getData, setData, setError } = batterySlice.actions;

// reducer
export default batterySlice.reducer;
