import React from 'react';

import AdminNavigation from '../organisms/AdminNavigation';

export interface IAdminHomeRoot {
  children: React.ReactNode;
}

const AdminHomeRoot: React.FC<IAdminHomeRoot> = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <AdminNavigation />
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default AdminHomeRoot;
