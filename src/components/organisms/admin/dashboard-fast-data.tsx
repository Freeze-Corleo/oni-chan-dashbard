import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardCard from '../../molecules/admin/dashboard-card';
import { getStatisticsByRestaurantId } from '../../../core-logic/usecases/restaurant/restaurantUseCase';
import { getStatisticsById } from '../../../secondary-adapters/services/restaurant/restaurant.service';
import { selectMyProfilReducer } from '../../../view-model-generation/generateMyProfilModel';

const DashboardDisplayFastData = (stat: any) => {
  console.log(stat);
  return (
    <div className="flex justify-between px-20 pt-8 space-x-10">
      <DashboardCard displayedData={stat?.stat?.totalPrice +' €' ?? '-'} title={'Revenu de toutes les commandes'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      </DashboardCard>
      <DashboardCard
        displayedData={stat?.stat?.totalCommandCount ?? '-'}
        title={'Total de commande passé chez vous'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      </DashboardCard>
      <DashboardCard displayedData={stat?.stat?.totalRestaurantCount ?? '-'} title={'Votre nombre de restaurant'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      </DashboardCard>
    </div>
  );
};

export default DashboardDisplayFastData;
