import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './storehandler/store.action';
import skuReducer from "./sku/sku.action";

const store = configureStore({
  reducer: {
    stores: storeReducer,
    skus: skuReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
