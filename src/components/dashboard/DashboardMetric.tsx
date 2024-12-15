import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardMetricProps {
  title: string;
  value: string | number;
  Icon: LucideIcon;
}

export const DashboardMetric: React.FC<DashboardMetricProps> = ({
  title,
  value,
  Icon
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <Icon className="h-8 w-8 text-emerald-600" />
      </div>
    </div>
  );
};