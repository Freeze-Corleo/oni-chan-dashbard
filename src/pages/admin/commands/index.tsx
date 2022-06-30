import { Box, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/atoms/Table';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/RegisterButton';
import { getRestaurantsByPartner } from '../../../core-logic/usecases/restaurant/restaurantUseCase';
import { selecteRestaurantWithout } from '../../../view-model-generation/generateRestaurantModel';
import { createRestaurantInformation } from '../../../core-logic/usecases/restaurant/restaurantUseCase';
import { useDispatch, useSelector } from 'react-redux';

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
  imageUrl: '',
};

/**
 * Implement dashboard element that display
 * command by days, months, years
 * @returns {JSX.Element}
 */
const MyCommandsAdmin = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selecteRestaurantWithout);
  const [restaurantData, setRestaurantData] = React.useState(INITIAL_STATE);
  const [selected, setSelected] = React.useState<string[]>([]);
  const myUser = useSelector(selectMyProfilReducer);
  const cookie: any = useCookies(['FREEZE_JWT']);
  const navigate = useNavigate();
  console.log(restaurants);
  const redirection = (id: string) => {
    navigate('/admin/mes-commandes/' + id);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setRestaurantData(INITIAL_STATE);
    setOpen(true);
  };

  React.useEffect(() => {
    dispatch(retrieveMyUserFromCookie(cookie[0].FREEZE_JWT));
  }, []);

  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 6,
    boxShadow: 24,
    borderRadius: '69px',
  };

  const onChangeInputRestaurant = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setRestaurantData({
      ...restaurantData,
      [_event.target.name]: _event.target.value,
    });
  };

  const onValidate = () => {
    dispatch(
      createRestaurantInformation(
        {
          name: restaurantData.name,
          rate: restaurantData.rate,
          deliveryPrice: restaurantData.deliveryPrice,
          price: restaurantData.price,
          cookType: restaurantData.cookType,
          isAvailable: restaurantData.isAvailable,
          address: '',
          _id: '',
          imageUrl: restaurantData.imageUrl,
        },
        {
          city: restaurantData.city,
          street: restaurantData.address,
          zipCode: restaurantData.zipCode,
          number: '',
        },
        myUser.data?.uuid
      )
    );
  };

  const onPreviewImage = async (event: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e: any) => {
      setRestaurantData({ ...restaurantData, imageUrl: e.target.result });
    };
  };

  useEffect(() => {
    myUser.data?.uuid && dispatch(getRestaurantsByPartner(myUser.data?.uuid));
  }, [myUser]);

  return (
    <AdminHomeRoot>
      <div className="grid grid-cols-12 px-20 mt-8">
        <div className="col-span-12 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-2">
            <h2 className="px-8 py-4 text-lg font-medium">
              Mes commandes par restaurant
            </h2>
          </div>
          <div className="px-8">
            {restaurants && (
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

export default MyCommandsAdmin;
