import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import clientsReduser from "./clientsSlice";

export const store = configureStore({
  reducer: {
    clients: clientsReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
