import { createSlice } from "@reduxjs/toolkit";
import { setAllActions } from "../asyncThunk/bandActions";
import { Band } from "../../types/band.type";

type BandSlice = {
  band: Band[];
  loading: boolean;
  error: string | null;
};

const initialState: BandSlice = {
  band: [],
  loading: false,
  error: null,
};

const bandSlice = createSlice({
  name: "band",
  initialState: initialState,
  reducers: {
    /*    setAll: (state, action) => {
      state.band = action.payload;
    },*/
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAllActions.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.band = action.payload;
      })
      .addCase(setAllActions.pending, (state) => {
        state.loading = true;
      })
      .addCase(setAllActions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? null;
      });
  },
});

//export const { setAll } = bandSlice.actions;

export default bandSlice.reducer;
