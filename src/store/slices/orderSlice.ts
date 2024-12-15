import { Order } from '@/types/order';

export interface OrderSlice {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrder: (orderId: string, updates: Partial<Order>) => void;
}

export const createOrderSlice = (set: any): OrderSlice => ({
  orders: [],
  addOrder: (order) => set((state: any) => ({ 
    orders: [...state.orders, order]
  })),
  updateOrder: (orderId, updates) => set((state: any) => ({
    orders: state.orders.map((order: Order) => 
      order.id === orderId ? { ...order, ...updates } : order
    )
  })),
});