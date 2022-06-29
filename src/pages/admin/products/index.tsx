import { Box, Icon, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Table from '../../../components/atoms/Table';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/RegisterButton';
import { getRestaurantsByPartner } from '../../../core-logic/usecases/restaurant/restaurantUseCase';
import { selecteRestaurantWithout } from '../../../view-model-generation/generateRestaurantModel';
import { createRestaurantInformation } from '../../../core-logic/usecases/restaurant/restaurantUseCase';
import { useDispatch, useSelector } from 'react-redux';
import { IAddress } from '../../../appState';

import { retrieveMyUserFromCookie } from '../../../core-logic/usecases/my-profil/myUserUseCase';

import { useCookies } from 'react-cookie';

import { selectMyProfilReducer } from '../../../view-model-generation/generateMyProfilModel';

import AdminHomeRoot from '../../../components/organisms/AdminHomeRoot';

const INITIAL_STATE = {
  name: '',
  products: [],
  rate: 0,
  deliveryPrice: 0,
  address: '',
  city: '',
  zipCode: '',
  price: 0,
  cookType: '',
  isAvailable: true,
  uuid: '',
};

/**
 * Implement dashboard element that display
 * command history by days, months, years
 * @returns {JSX.Element}
 */
const ProductIndex = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selecteRestaurantWithout);
  const [restaurantData, setRestaurantData] = React.useState(INITIAL_STATE);
  const [selected, setSelected] = React.useState<string[]>([]);
  const myUser = useSelector(selectMyProfilReducer);
  const cookie: any = useCookies(['FREEZE_JWT']);
  const navigate = useNavigate();

  const redirection = (id: string) => {
    navigate('/admin/create-product/' + id);
  };

  React.useEffect(() => {
    dispatch(retrieveMyUserFromCookie(cookie[0].FREEZE_JWT));
  }, []);

  useEffect(() => {
    myUser.data?.uuid && dispatch(getRestaurantsByPartner(myUser.data?.uuid));
  }, [myUser]);

  console.log(restaurants);

  return (
    <AdminHomeRoot>
      <div className="grid grid-cols-12 px-20 mt-8">
        <div className="col-span-12 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-2">
            <h2 className="px-8 py-4 text-lg font-medium">
              Création des produits
            </h2>
          </div>
          <div className="px-8">
            {restaurants !== null && (
              <Table
                rowLabels={[
                  'Nom du restaurant',
                  'Note',
                  'Prix de livraison',
                  'Adresse',
                  'Ville',
                  'Code Postal',
                  'Prix',
                  'Category',
                  'Disponible',
                ]}
                datas={restaurants}
                redirection={redirection}
                setSelected={setSelected}
                selected={selected}
                showSelects={false}
              />
            )}
          </div>
        </div>
      </div>
    </AdminHomeRoot>
  );
};

export default ProductIndex;
