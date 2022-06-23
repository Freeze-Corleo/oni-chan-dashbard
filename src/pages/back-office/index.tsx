import React from 'react';

import AdminHomeRoot from '../../components/organisms/AdminHomeRoot';

import DashboardPartners from '../../components/organisms/back-office/Partner';

const BackOffice = () => {
  return (
    <AdminHomeRoot>
      <div className="h-screen bg-gray-100">
        <DashboardPartners />
      </div>
    </AdminHomeRoot>
  );
};

export default BackOffice;
