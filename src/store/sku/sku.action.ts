import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { skus, Sku } from "./sku.type"

interface SkuState {
  skus: Sku[];
}

const initialState: SkuState = {
  skus: skus,
};

const skuSlice = createSlice({
  name: 'skus',
  initialState,
  reducers: {
    addSKU(state, action: PayloadAction<Omit<Sku, 'index'>>) {
      const newindex = state.skus.length > 0
        ? Math.max(...state.skus.map((sku: { index: number; }) => sku.index)) + 1
        : 1;
      state.skus.push({ index: newindex, ...action.payload });
    },
    updateSKU(state, action: PayloadAction<Sku>) {
      const indexx = state.skus.findIndex((s: { index: number; }) => s.index === action.payload.index);
      if (indexx !== -1) {
        state.skus[indexx] = action.payload;
      }
    },
    deleteSKU(state, action: PayloadAction<number>) {
      state.skus = state.skus.filter((s: { index: number; }) => s.index !== action.payload);
    },
  },
});

export const { addSKU, updateSKU, deleteSKU } = skuSlice.actions;
export default skuSlice.reducer;
