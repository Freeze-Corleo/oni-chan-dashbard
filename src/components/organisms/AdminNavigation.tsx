import React, { useState } from 'react';

import AnalyticsNavigation from '../molecules/nav/admin/analyticSection';
import ContentNavigation from '../molecules/nav/admin/contentSection';
import SettingNavigation from '../molecules/nav/admin/settingSection';

import { retrieveMyUserFromCookie } from '../../core-logic/usecases/my-profil/myUserUseCase';

import { useCookies } from 'react-cookie';

import { useSelector, useDispatch } from 'react-redux';

import { selectMyProfilReducer } from '../../view-model-generation/generateMyProfilModel';

import { logoutUser } from '../../core-logic/usecases/my-profil/myUserUseCase';
import { useNavigate } from 'react-router-dom';
const AdminNavigation = () => {
  const dispatch = useDispatch();
  const myUser = useSelector(selectMyProfilReducer);
  const cookie: any = useCookies(['FREEZE_JWT']);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate({
      pathname: '/home',
    });
  };

  React.useEffect(() => {
    dispatch(retrieveMyUserFromCookie(cookie[0].FREEZE_JWT));
  }, []);
  return (
    <div className="grid h-screen px-8 py-8 shadow-xl bg-dark-main grid-row-5">
      <div>
        <div className="flex items-center">
          <div className="">
            {myUser?.data?.profilUrl?.length !== 0 ? (
              <img
                src={myUser.data?.profilUrl}
                className="object-cover w-16 h-16 rounded-full"
                alt="profil of a specific user"
              />
            ) : (
              <div className="flex items-center justify-center object-cover w-16 h-16 text-xl font-medium text-white bg-black rounded-full">
                N
              </div>
            )}
          </div>
          <div className="pl-2">
            <p className="text-xs font-medium tracking-wide text-white-grayish">
              Have a good day ! &#129304;
            </p>
            <p className="text-lg font-medium tracking-wide text-white-grayish">
              {myUser.data?.firstname} {myUser.data?.lastname}
            </p>
          </div>
        </div>
      </div>
      <AnalyticsNavigation />
      <ContentNavigation />
      <SettingNavigation />
      <div className="w-full place-self-end">
        <div className="flex items-center px-2 py-2 mb-2 transition duration-200 rounded-lg cursor-pointer hover:bg-dark-hover text-white-grayish hover:text-white linear">
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
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <h3 className="pl-3 text-sm tracking-wide" onClick={handleLogout}>
            Log out
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation;
