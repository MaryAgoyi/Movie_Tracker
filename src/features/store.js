import { configureStore } from '@reduxjs/toolkit';

import authReducer from "./auth/AuthSlice"
import tvShowReducer from "./tvShow/TvSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tvShow:tvShowReducer
  },
});
