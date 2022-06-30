import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link, useParams, useNavigate } from 'react-router-dom';

import AdminHomeRoot from '../../../components/organisms/AdminHomeRoot';
import { selectRestaurantReducer } from '../../../view-model-generation/generateRestaurantModel';
import { retrieveRestaurantInformation, updateRestaurantInformation } from '../../../core-logic/usecases/restaurant/restaurantUseCase';
import { deleteRestaurantInformation } from '../../../core-logic/usecases/restaurant/restaurantUseCase';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Box, Modal } from '@mui/material';
import Label from '../../../components/atoms/Label';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/RegisterButton';
import { IRestaurant } from '../../../appState';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '12px',
};

/**
 * Retrieve le restaurant by id
 * Possibilité de modifier name, address, cookType isAvailable et imageUrl
 *
 * et création du bouton pour supprimer le restaurant
 */
const RestaurantIdAdmin = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantReducer);
  const rest: any = restaurants;

  React.useEffect(() => {
    dispatch(retrieveRestaurantInformation(params?.id));
  }, []);

  const handleDelete = async () => {
    await dispatch(deleteRestaurantInformation(params?.id));
    await navigate("/admin/create-restaurant");
  }
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true)
  const [restaurantUpdated, setRestaurantUpdated] = React.useState({
    name: '',
    address: '',
    cookType: '',
    isAvailable: false,
    imageUrl: ''
  });

  const onChangeRestaurantFields = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setRestaurantUpdated({
      ...restaurantUpdated,
      [_event.target.name]: _event.target.value,
    });
  };

  const onClickUpdate = () => {
    let restaurant: IRestaurant = {
      name: restaurantUpdated.name,
      rate: rest?.product?.data?.rate,
      deliveryPrice: rest?.product?.data?.deliveryPrice,
      address: restaurantUpdated.address,
      price: rest?.product?.data?.price,
      cookType: restaurantUpdated.cookType,
      isAvailable: restaurantUpdated.isAvailable,
      imageUrl: restaurantUpdated.imageUrl,
      _id: ''
    }
    dispatch(updateRestaurantInformation(params?.id, restaurant))
    console.log("hey",rest?.product?.data);
  }

  return (
    <AdminHomeRoot>
      <div className="grid grid-cols-12 px-20 mt-8">
        <div className="col-span-12 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-2">
            <h2 className="px-8 py-4 text-lg font-medium">
              Restaurant {rest?.product?.data?.name}
            </h2>
            <div className="place-self-end">
              <button>
                <BorderColorIcon color="primary" onClick={handleOpen} />
              </button>
              <button className="p-5 place-self-end">
                <CancelIcon color="error" onClick={handleDelete} />
              </button>
            </div>
          </div>
          <div className="px-8">
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="grid grid-cols-1 place-items-center p-10 gap-y-2">
                  <div className="w-1/2">
                    <Label label="Nom du restaurant :" />
                    <Input
                      type="text"
                      nameInput="name"
                      placeholder="Entrer le nom du restaurant"
                      onChangeFunction={onChangeRestaurantFields}
                    />
                  </div>
                  <div className="w-1/2">
                    <Label label="Adresse :" />
                    <Input
                      type="text"
                      nameInput="address"
                      placeholder="Entrer votre adresse"
                      onChangeFunction={onChangeRestaurantFields}
                    />
                  </div>
                  <div className="w-1/2">
                    <Label label="Catégorie :" />
                    <Input
                      type="text"
                      nameInput="cookType"
                      placeholder="Entrer votre catégorie"
                      onChangeFunction={onChangeRestaurantFields}
                    />
                  </div>
                  <div className="w-1/2">
                    <Label label="Disponibilité du restaurant :" />
                    <Input
                      type="text"
                      nameInput="isAvailable"
                      placeholder="Entrer la disponibilité du restaurant"
                      onChangeFunction={onChangeRestaurantFields}
                    />
                  </div>
                  <div className="w-1/2">
                    <Label label="Image :" />
                    <Input
                      type="text"
                      nameInput="imageUrl"
                      placeholder="Entrer l'url de l'image du restaurant"
                      onChangeFunction={onChangeRestaurantFields}
                    />
                  </div>
                  <div className="mt-8 mb-5">
                    <Button
                      label="Modifier le restaurant"
                      onClick={() => {
                        onClickUpdate();
                      }}
                    />
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </AdminHomeRoot>
  );
};

export default RestaurantIdAdmin;
