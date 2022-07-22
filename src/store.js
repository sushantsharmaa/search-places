import { configureStore } from "@reduxjs/toolkit";
import placesReducer from "./features/placesSlice";

export const store = configureStore({
  reducer: {
    cities: placesReducer,
  },
});
