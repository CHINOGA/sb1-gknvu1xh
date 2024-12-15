import React from 'react';
import { MetricsGrid } from '@/components/dashboard/MetricsGrid';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <MetricsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          {/* Recent orders list will go here */}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Table Status</h2>
          {/* Table status overview will go here */}
        </div>
      </div>
    </div>
  );
};