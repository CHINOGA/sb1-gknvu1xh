import { Table } from '@/types/table';

export interface TableSlice {
  tables: Table[];
  updateTable: (tableId: number, updates: Partial<Table>) => void;
}

export const createTableSlice = (set: any): TableSlice => ({
  tables: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    seats: i % 3 === 0 ? 6 : i % 2 === 0 ? 4 : 2,
    status: 'available'
  })),
  updateTable: (tableId, updates) => set((state: any) => ({
    tables: state.tables.map((table: Table) =>
      table.id === tableId ? { ...table, ...updates } : table
    )
  })),
});