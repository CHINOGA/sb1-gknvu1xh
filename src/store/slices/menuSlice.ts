import { MenuItem } from '@/types/menu';

export interface MenuSlice {
  menu: MenuItem[];
  setMenu: (menu: MenuItem[]) => void;
}

export const createMenuSlice = (set: any): MenuSlice => ({
  menu: [],
  setMenu: (menu) => set({ menu }),
});