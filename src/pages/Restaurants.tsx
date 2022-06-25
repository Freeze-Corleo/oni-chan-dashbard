import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../components/atoms/Card';
import HomeRoot from '../components/organisms/HomeRoot';
import { retrieveRestaurantsInformations } from '../core-logic/usecases/restaurant/restaurantUseCase';
import { selectRestaurantReducer } from '../view-model-generation/generateRestaurantModel';

const RestaurantFeed = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantReducer);
  const restaurantData: any = restaurants.data;

  useEffect(() => {
    dispatch(retrieveRestaurantsInformations());
  }, []);

  return (
    <div>
      <div className="h-screen">
        <HomeRoot>
          <>
            {restaurantData && restaurantData?.restaurants?.data?.length > 0 ? (
              <>
                <div className='grid grid-cols-3 gap-x-6 gap-y-8 mb-28 mt-20 place-items-center'>
                  {restaurantData.restaurants?.data?.map((restaurant: any) => {
                    return <><Link to={"/restaurant/id"} replace><Card img='/img/burger.jpg' label={restaurant.name ? restaurant.name : "Sans nom"}></Card></Link></>
                  })};
                </div>
              </>
            ) : (
              <>
              </>
            )}
          </>
        </HomeRoot>
      </div>
    </div>
  );
};

export default RestaurantFeed;