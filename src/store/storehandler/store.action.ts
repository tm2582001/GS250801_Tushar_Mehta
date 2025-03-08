import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { storesData, StoreData } from './store.type';

interface StoreState {
  stores: StoreData[];
}

const initialState: StoreState = {
  stores: storesData,
};

const storeSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    addStore(state, action: PayloadAction<Omit<StoreData, 'index'>>) {
      const newindex =
        state.stores.length > 0
          ? Math.max(...state.stores.map((s: { index: number; }) => s.index)) + 1
          : 1;
      state.stores.push({ index: newindex, ...action.payload });
    },
    updateStore(state, action: PayloadAction<StoreData>) {
      const indexx = state.stores.findIndex((s: { index: number; }) => s.index === action.payload.index);
      if (indexx !== -1) {
        state.stores[indexx] = action.payload;
      }
    },
    deleteStore(state, action: PayloadAction<number>) {
      state.stores = state.stores.filter((s: { index: number; }) => s.index !== action.payload);
    },
    reorderStoreUp(state, action: PayloadAction<number>) {
      const index = state.stores.findIndex((s: { index: number; }) => s.index === action.payload);
      if (index > 0) {
        const temp = state.stores[index];
        state.stores[index] = state.stores[index - 1];
        state.stores[index - 1] = temp;
      }
    },
    reorderStoreDown(state, action: PayloadAction<number>) {
      const index = state.stores.findIndex((s: { index: number; }) => s.index === action.payload);
      if (index >= 0 && index < state.stores.length - 1) {
        const temp = state.stores[index];
        state.stores[index] = state.stores[index + 1];
        state.stores[index + 1] = temp;
      }
    },
  },
});

export const {
  addStore,
  updateStore,
  deleteStore,
  reorderStoreUp,
  reorderStoreDown,
} = storeSlice.actions;
export default storeSlice.reducer;
