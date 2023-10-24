import { configureStore } from '@reduxjs/toolkit';
import { homeApi } from 'services/homeServices';
import friendReducer from 'slices/friendSlice';

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    friendReducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(homeApi.middleware);
  }
});

export default store;
