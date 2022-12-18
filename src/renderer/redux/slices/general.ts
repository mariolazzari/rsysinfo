import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "renderer/redux/store";
import { GeneralArgs } from "main/si/types";
import { sendMessage } from "renderer/utils/ipc";

interface GeneralState {
  data: GeneralArgs | null;
  loading: boolean;
  error: string;
}

const initialState: GeneralState = {
  data: null,
  loading: false,
  error: "",
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    getGeneral: (state) => {
      state.loading = true;
      state.error = "";
      sendMessage("general", []);
    },
    setGeneral: (state, action: PayloadAction<GeneralArgs>) => {
      state.data = action.payload;
      state.error = "";
      state.loading = false;
    },
    setError: (state, acton: PayloadAction<string>) => {
      state.error = acton.payload;
      state.loading = false;
    },
  },
});

export const selectTime = (state: RootState) => state.general.data?.time;
export const selectVersion = (state: RootState) => state.general.data?.version;
export const selectError = (state: RootState) => state.general.error;
export const selectLoading = (state: RootState) => state.general.loading;

export const { getGeneral, setGeneral, setError } = generalSlice.actions;

export default generalSlice.reducer;
