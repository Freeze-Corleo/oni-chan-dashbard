import React from 'react';

import AdminHomeRoot from '../../components/organisms/AdminHomeRoot';

import DashboardHistoryCommands from '../../components/organisms/admin/dashboard';
import DashboardDisplayFastData from '../../components/organisms/admin/dashboard-fast-data';
import DashboardCustomers from '../../components/organisms/admin/dashboard-third';

const IndexAdminDashboard = () => {
  return (
    <AdminHomeRoot>
      <div className="bg-gray-100 h-screen">
        <div className="w-full rounded-md shadow-lg py-4 px-8">yolo</div>
        <DashboardDisplayFastData />
        <DashboardCustomers />
        <DashboardHistoryCommands />
      </div>
    </AdminHomeRoot>
  );
};

export default IndexAdminDashboard;
