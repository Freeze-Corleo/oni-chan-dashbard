import React from 'react';
import { useDispatch } from 'react-redux';
import HomeRoot from '../components/organisms/HomeRoot';

const RestaurantFeed = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="h-screen">
        <HomeRoot>
          <div>leo</div>
        </HomeRoot>
      </div>
    </div>
  );
};

export default RestaurantFeed;
