import React from 'react';

import AdminHomeRoot from '../../components/organisms/AdminHomeRoot';

import DashboardHistoryCommands from '../../components/organisms/admin/dashboard';
import DashboardDisplayFastData from '../../components/organisms/admin/dashboard-fast-data';
import DashboardCustomers from '../../components/organisms/admin/dashboard-third';

const IndexAdminDashboard = () => {
  return (
    <AdminHomeRoot>
      <div className="bg-gray-100 h-screen">
        <DashboardDisplayFastData />
        <DashboardCustomers />
        <DashboardHistoryCommands />
      </div>
    </AdminHomeRoot>
  );
};

export default IndexAdminDashboard;
