import { configureStore } from '@reduxjs/toolkit';
import { homeApi } from 'services/homeServices';

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(homeApi.middleware);
  }
});

export default store;
