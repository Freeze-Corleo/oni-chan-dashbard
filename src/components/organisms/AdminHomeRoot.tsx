import React from 'react';
import Toasts from '../molecules/notification';

import AdminNavigation from '../organisms/AdminNavigation';

import { Helmet } from 'react-helmet';

export interface IAdminHomeRoot {
  children: React.ReactNode;
}

const AdminHomeRoot: React.FC<IAdminHomeRoot> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>MatR</title>
        <meta name="keywords" content="HTML,CSS,JavaScript" />
        <meta
          name="description"
          content="Ideas page using react helmet very easy to implement "
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="grid grid-cols-12 font-montserrat">
        <div className="col-span-2">
          <AdminNavigation />
        </div>
        <div className="col-span-10">{children}</div>
      </div>
      <Toasts />
    </>
  );
};

export default AdminHomeRoot;
