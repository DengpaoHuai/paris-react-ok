import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBands } from "../../service/band.service";

export const setAllActions = createAsyncThunk("vousvoulez", async () => {
  const data = await getBands();
  return data;
});
