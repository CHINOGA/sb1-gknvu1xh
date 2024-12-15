import { create } from 'zustand';
import { createMenuSlice, MenuSlice } from './slices/menuSlice';
import { createOrderSlice, OrderSlice } from './slices/orderSlice';
import { createTableSlice, TableSlice } from './slices/tableSlice';

type StoreState = MenuSlice & OrderSlice & TableSlice;

export const useStore = create<StoreState>((set) => ({
  ...createMenuSlice(set),
  ...createOrderSlice(set),
  ...createTableSlice(set),
}));