import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthState, CarsState } from "../types"; // Update with your actual types

import authReducer from "./reducers/authReducer";
import carsReducer from "./reducers/carsReducer";

export interface RootState {
  auth: AuthState;
  cars: CarsState;
}

const rootReducer: any = combineReducers({
  auth: authReducer,
  cars: carsReducer,
});


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
