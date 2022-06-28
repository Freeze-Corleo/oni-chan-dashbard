import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { IRestaurant } from '../appState';
import Card from '../components/atoms/Card';
import HomeRoot from '../components/organisms/HomeRoot';
import { retrieveRestaurantsInformations } from '../core-logic/usecases/restaurant/restaurantUseCase';
import { selectRestaurantReducer } from '../view-model-generation/generateRestaurantModel';

const RestaurantFeed = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //searchParams.get('search');

  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantReducer);
  const restaurantData: any = restaurants;
  const url = window.location.href;
  const isParameter = url.split("=");
  const last = url.split("=").pop();
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
                {isParameter.length > 1 ? (
                  <> <div className="grid grid-cols-3 mt-20 gap-x-6 gap-y-8 mb-28 place-items-center">
                    {restaurantData.restaurants?.data?.filter((resto: any) => resto.cookType === last).map((restaurant: any) => {
                      return (
                        <>
                          <Link to={`/restaurant/${restaurant._id}`} replace>
                            <Card
                              img="/img/burger.jpg"
                              label={
                                restaurant.name ? restaurant.name : 'Sans nom'
                              }
                            ></Card>
                          </Link>
                        </>
                      );
                    })}
                    ;
                  </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-3 mt-20 gap-x-6 gap-y-8 mb-28 place-items-center">
                      {restaurantData.restaurants?.data?.map((restaurant: any) => {
                        return (
                          <>
                            <Link to={`/restaurant/${restaurant._id}`} replace>
                              <Card
                                img="/img/burger.jpg"
                                label={
                                  restaurant.name ? restaurant.name : 'Sans nom'
                                }
                              ></Card>
                            </Link>
                          </>
                        );
                      })}
                      ;
                    </div>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </>
        </HomeRoot>
      </div>
    </div>
  );
};

export default RestaurantFeed;
