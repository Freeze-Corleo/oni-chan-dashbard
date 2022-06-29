import { Box, Modal } from '@mui/material';
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
 * command history by days, months, years
 * @returns {JSX.Element}
 */
const CreateRestaurantAdmin = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selecteRestaurantWithout);
  const [restaurantData, setRestaurantData] = React.useState(INITIAL_STATE);
  const [selected, setSelected] = React.useState<string[]>([]);
  const myUser = useSelector(selectMyProfilReducer);
  const cookie: any = useCookies(['FREEZE_JWT']);
  const navigate = useNavigate();

  const redirection = (id: string) => {
    navigate('/admin/restaurant/' + id);
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
              Création du restaurant
            </h2>
            <button className="p-5 place-self-end">
              <AddCircleIcon color="primary" onClick={handleOpen} />
            </button>
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
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="space-y-6">
                <div className="flex space-x-4">
                  <div className="py-4">
                    <p className="pb-2 pl-2 font-medium">Image du restaurant</p>
                    <div className="flex items-center space-x-5">
                      {restaurantData?.imageUrl ? (
                        <img
                          src={restaurantData.imageUrl}
                          className="object-cover w-12 h-12 rounded-full"
                          alt="profil of a specific user"
                        />
                      ) : (
                        <div className="flex items-center justify-center object-cover w-12 h-12 text-xl font-medium text-white bg-black rounded-full">
                          N
                        </div>
                      )}
                      <label className="inline-flex items-center px-10 py-3 text-sm font-medium text-center text-white transition duration-300 bg-black rounded-full shadow-2xl cursor-pointer hover:bg-gray-800 linear">
                        Changer de photo
                      </label>
                      <input
                        type="file"
                        className="absolute opacity-0 cursor-pointer"
                        onChange={onPreviewImage}
                      />
                    </div>
                  </div>
                </div>
                <Input
                  type="text"
                  nameInput="name"
                  placeholder="Nom du restaurant"
                  onChangeFunction={onChangeInputRestaurant}
                />
                <Input
                  type="text"
                  nameInput="address"
                  placeholder="Adresse du restaurant"
                  onChangeFunction={onChangeInputRestaurant}
                />
                <Input
                  type="text"
                  nameInput="zipCode"
                  placeholder="Code postal du restaurant"
                  onChangeFunction={onChangeInputRestaurant}
                />
                <Input
                  type="text"
                  nameInput="city"
                  placeholder="Ville du restaurant"
                  onChangeFunction={onChangeInputRestaurant}
                />
                <Input
                  type="text"
                  nameInput="cookType"
                  placeholder="Catégorie du restaurant"
                  onChangeFunction={onChangeInputRestaurant}
                />
                <Button
                  label="Ajouter le restaurant"
                  onClick={() => {
                    onValidate();
                  }}
                />
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </AdminHomeRoot>
  );
};

export default CreateRestaurantAdmin;
