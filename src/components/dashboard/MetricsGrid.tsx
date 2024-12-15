import React from 'react';
import { Clock, Users, UtensilsCrossed, DollarSign } from 'lucide-react';
import { DashboardMetric } from './DashboardMetric';
import { useStore } from '@/store';

export const MetricsGrid = () => {
  const { orders, tables } = useStore();
  
  const activeOrders = orders.filter(order => 
    ['pending', 'preparing', 'ready'].includes(order.status)
  ).length;
  
  const occupiedTables = tables.filter(table => 
    table.status === 'occupied'
  ).length;

  const todayRevenue = orders
    .filter(order => order.status === 'paid')
    .reduce((sum, order) => sum + order.totalAmount, 0);

  const metrics = [
    {
      title: 'Active Orders',
      value: activeOrders,
      Icon: Clock
    },
    {
      title: 'Occupied Tables',
      value: occupiedTables,
      Icon: Users
    },
    {
      title: "Today's Revenue",
      value: `$${todayRevenue.toFixed(2)}`,
      Icon: DollarSign
    },
    {
      title: 'Total Tables',
      value: tables.length,
      Icon: UtensilsCrossed
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <DashboardMetric key={index} {...metric} />
      ))}
    </div>
  );
};