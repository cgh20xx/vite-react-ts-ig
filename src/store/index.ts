import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  }
});

export default store;
