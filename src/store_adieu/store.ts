/*import { createStore } from "redux";
import bandReducer from "./reducers/bandReducer";

export const store = createStore(bandReducer);

export type State = ReturnType<typeof store.getState>;
*/

import { configureStore } from "@reduxjs/toolkit";
import bandSlice from "./slices/bandSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    bandSlice,
  },
});

export type State = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
