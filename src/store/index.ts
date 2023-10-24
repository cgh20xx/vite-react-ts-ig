import { configureStore } from '@reduxjs/toolkit';
import { homeApi } from 'services/homeServices';
import friendReducer from 'slices/friendSlice';

export const store = configureStore({
  // 補充：RTK 會將 reducer 傳遞給 combineReducers()，不再需要使用 combineReducers 包多個 reducer。
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    friendReducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(homeApi.middleware);
  }
});

// 因使用 typescript hooks.ts 需用到這兩個型別，故導出。
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
