import { Box, Icon, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Table from '../../../components/atoms/Table';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/RegisterButton';
import { retrieveRestaurantsInformations } from '../../../core-logic/usecases/restaurant/restaurantUseCase'; 
import { selectRestaurantReducer } from '../../../view-model-generation/generateRestaurantModel';
import { createRestaurantInformation } from '../../../core-logic/usecases/restaurant/restaurantUseCase';
import { useDispatch, useSelector } from 'react-redux';
import { IAddress } from '../../../appState';

const mock = [
  { label: 'Cyber', createdAt: '01/02/3222', status: 'active', id: '17' },
  { label: 'Cyber', createdAt: '01/02/3222', status: 'active', id: '12' },
  { label: 'Cyber', createdAt: '01/02/3222', status: 'active', id: '123' },
  { label: 'Cyber', createdAt: '01/02/3222', status: 'active', id: '1234' },
];

/**
 * Implement dashboard element that display
 * command history by days, months, years
 * @returns {JSX.Element}
 */
const CreateRestaurantAdmin = () => {
  const [selected, setSelected] = React.useState<string[]>([]);
  let mockData : any = [];
  const navigate = useNavigate();

  const redirection = (id: string) => {
    navigate('/admin/commands/' + id);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setCredentials(initialState);
    setOpen(true)
  };
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

  let adresse : IAddress = {
    street:'',
    number:'',
    city:'',
    zipCode:'',
  }

  const initialState = {
    name: '',
    products:  [],
    rate: 0,
    deliveryPrice: 0,
    address: adresse,
    price: 0,
    cookType: '',
    isAvailable: true,
    uuid: ''
  }

  const initialStateProduct = {
    product1: "",
    product2: "",
    product3: "",
    product4: "",
    product5: "",
  }

  const [credentials, setCredentials] = React.useState(initialState);
  const [credentialsProduct, setCredentialsProduct] = React.useState(initialStateProduct);

  let products: any = [];

  const onChangeInput = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setCredentials({
      ...credentials,
      [_event.target.name]: _event.target.value,
    });
  };

  const onChangeInputProduct = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setCredentialsProduct({
      ...credentialsProduct,
      [_event.target.name]: _event.target.value,
    });
  };

  const onValidate = () => {
    if (credentials.name != '') {
      
      let productOne = {title: credentialsProduct.product1.split('/')[0], name: credentialsProduct.product1.split('/')[1]}
      let productTwo = {title: credentialsProduct.product2.split('/')[0], name: credentialsProduct.product2.split('/')[1]}
      let productThree = {title: credentialsProduct.product3.split('/')[0], name: credentialsProduct.product3.split('/')[1]}
      let productFour = {title: credentialsProduct.product4.split('/')[0], name: credentialsProduct.product4.split('/')[1]}
      let productFive = {title: credentialsProduct.product5.split('/')[0], name: credentialsProduct.product5.split('/')[1]}
      
      products.push(productOne);
      products.push(productTwo);
      products.push(productThree);
      products.push(productFour);
      products.push(productFive);

      credentials.products = products;

      mockData.push({ label: credentials.name, createdAt: '01/02/3222', status: 'active', id: '17' });
      setCredentials(initialState);
      setCredentialsProduct(initialStateProduct);

      dispatch(createRestaurantInformation(credentials));
      //dispatch(retrieveRestaurantsInformations());



      console.log(mock)
    }
    else{
      console.log(credentials);
    }
  }

  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantReducer);
  const restaurantData: any = restaurants.data;

  useEffect(() => {
    dispatch(retrieveRestaurantsInformations());
  }, []);

  return (
    <div className="grid grid-cols-12 px-20 mt-8">
      <div className="col-span-12 bg-white shadow-lg rounded-lg">
        <div className='grid grid-cols-2'>
          <h2 className="font-medium px-8 py-4 text-lg">Création du restaurant</h2>
          <button className='place-self-end p-5'><AddCircleIcon color='primary' onClick={handleOpen} /></button>
        </div>
        <>
        {restaurantData ? restaurantData.restaurants.data.map((resto: any) => {
          mockData.push({ label: resto.name, rate: resto.rate, status: 'active', id: resto._id },)
        }) : <> </>}
        </>
        <div className="px-8">
          <Table
            rowLabels={['Libellé', 'Note du restaurant', 'Status']}
            datas={mockData}
            redirection={redirection}
            setSelected={setSelected}
            selected={selected}
            showSelects={false}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className='space-y-6'>
              <Input
                type="text"
                nameInput="name"
                placeholder="Nom du restaurant"
                onChangeFunction={onChangeInput}
              />
              <Input
                type="text"
                nameInput="product1"
                placeholder="Produit1 (Le nom puis prix séparé par / )"
                onChangeFunction={onChangeInputProduct}
              />
              <Input
                type="text"
                nameInput="product2"
                placeholder="Produit2 (Le nom puis prix séparé par / )"
                onChangeFunction={onChangeInputProduct}
              />
              <Input
                type="text"
                nameInput="product3"
                placeholder="Produit3 (Le nom puis prix séparé par / )"
                onChangeFunction={onChangeInputProduct}
              />
              <Input
                type="text"
                nameInput="product4"
                placeholder="Produit4 (Le nom puis prix séparé par / )"
                onChangeFunction={onChangeInputProduct}
              />
              <Input
                type="text"
                nameInput="product5"
                placeholder="Produit5 (Le nom puis prix séparé par / )"
                onChangeFunction={onChangeInputProduct}
              />
              <Button label='Ajouter le restaurant' onClick={onValidate} />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CreateRestaurantAdmin;
