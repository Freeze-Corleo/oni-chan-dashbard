import React, { useState } from 'react';

import AdminHomeRoot from '../../components/organisms/AdminHomeRoot';

import DashboardHistoryCommands from '../../components/organisms/admin/dashboard';
import DashboardDisplayFastData from '../../components/organisms/admin/dashboard-fast-data';
import DashboardCustomers from '../../components/organisms/admin/dashboard-third';
import { selectMyProfilReducer } from '../../view-model-generation/generateMyProfilModel'; 
import { useDispatch, useSelector } from 'react-redux';
import { getStatisticsById } from '../../secondary-adapters/services/restaurant/restaurant.service';

const IndexAdminDashboard = () => {
  const dispatch = useDispatch();
  const [statistics, setStatistics] = useState<any>([])
  const user = useSelector(selectMyProfilReducer);
  const restaurant = useSelector(selectMyProfilReducer);

  React.useEffect(() => {
    getStatisticsById(user.data?.uuid).then((statistic) => {
      setStatistics(statistic.response);
  });
  }, [user]);

  return (
    <AdminHomeRoot>
      <div className="bg-gray-100 h-screen">
        {
        statistics?.data && (<>
          <DashboardDisplayFastData stat={statistics.data} />
          <DashboardCustomers stat={statistics.data} />
          <DashboardHistoryCommands />
        </>) 
        }
      </div>
    </AdminHomeRoot>
  );
};

export default IndexAdminDashboard;
