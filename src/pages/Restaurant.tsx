import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import MenuCard from '../components/atoms/MenuCard';
import SearchInput from '../components/atoms/SearchInput';
import HomeRoot from '../components/organisms/HomeRoot';
import SVGIconStar from '../components/svg/IconStar';

import { retrieveRestaurantInformation } from '../core-logic/usecases/restaurant/restaurantUseCase';
import { dispatchAddProduct } from '../core-logic/usecases/basket/basketUseCase';

import { selectRestaurantReducer } from '../view-model-generation/generateRestaurantModel';

import { IProduct } from '../appState';

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

const Restaurant = () => {
  const rateValue = [
    'Très mauvais',
    'Mauvais',
    'Peu mieux faire',
    'Correct',
    'Bon',
    'Excellent',
  ];
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const addProduct = (
    product: IProduct,
    restaurantName: string,
    restoId: string
  ) => {
    setOpen(false);
    setId(id + 1);
    dispatch(
      dispatchAddProduct({
        id: id,
        product,
        restaurantName,
        restoId,
      })
    );
  };
  const [datas, setDatas] = useState<IProduct | null>(null);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantReducer);
  const rest: any = restaurants;
  const url = window.location.pathname;
  const last = url.split('/').pop() + '';

  const handleOpen = (plat: IProduct) => {
    setDatas(plat);
    setOpen(true);
  };

  useEffect(() => {
    dispatch(retrieveRestaurantInformation(last));
  }, []);

  return (
    <HomeRoot>
      <div className="grid place-content-center z-50 relative">
        <div className="grid grid-cols-2 gap-0 place-items-center mt-20 mb-10 p-20 w-[1280px]">
          <SearchInput />
          <div className="mt-28 pr-8">
            {rest?.product?.data?.imageUrl && (
              <img
                src={rest?.product?.data?.imageUrl}
                className="rounded-lg"
                alt={`restaurant ${rest?.product?.data?.name}`}
              />
            )}
          </div>
          <div className="mt-20 justify-self-start space-y-4">
            <p className="font-bold text-5xl">{rest?.product?.data?.name}</p>
            <div className="flex space-x-2">
              <SVGIconStar className="fill-current text-yellow-500" />
              <p className="font-medium tracking-wide text-yellow-500">
                {rest?.product?.data?.rate}/5{' '}
                {rateValue[rest?.product?.data?.rate]} (0 avis)
              </p>
            </div>
            <p className="font-medium">
              {rest?.product?.data?.city}, {rest?.product?.data?.address}{' '}
              {rest?.product?.data?.zipCode}
            </p>
            <p className="font-medium">
              Restaurant sp&eacute;cialis&eacute; dans la cuisine{' '}
              {rest?.product?.data?.cookType}
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 grid place-content-center">
        <div className="w-[1280px]">
          {rest?.product?.data?.products?.length > 0 ? (
            <div className="pl-20">
              <div className="font-bold text-4xl mb-10">
                Plats du restaurant
              </div>
              <div className="grid grid-cols-2 place-items-center gap-10 mb-16">
                {rest?.product?.data?.products?.map((plat: any) => {
                  return (
                    <div key={plat._id}>
                      <button onClick={(ho) => handleOpen(plat)}>
                        <MenuCard
                          img={plat.imageUrl}
                          title={plat.title}
                          description={plat.itemDescription}
                          price={plat.price}
                        />
                      </button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <div className="grid grid-cols-1">
                            <img
                              className="rounded-t-lg w-full object-cover h-48"
                              src={process.env.PUBLIC_URL + datas?.imageUrl}
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src =
                                  process.env.PUBLIC_URL + '/img/pizza.jpg';
                              }}
                              alt={plat.itemDescription}
                            />
                            <p className="text-5xl font-semibold px-8 pt-2">
                              {datas?.title}
                            </p>
                            <p className="text-lg pt-2 font-medium px-8">
                              {datas?.price} €
                            </p>
                            <p className="px-8 py-2 text-sm">
                              {plat.itemDescription}
                            </p>
                            <div className="grid place-content-center py-4">
                              <button
                                onClick={() =>
                                  addProduct(
                                    datas as IProduct,
                                    rest?.product?.data?.name,
                                    rest?.product?.data?._id
                                  )
                                }
                                className="px-8 py-4 bg-black text-white rounded-full"
                              >
                                Ajouter au panier
                              </button>
                            </div>
                          </div>
                        </Box>
                      </Modal>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <>
              <div className="font-bold text-4xl mb-10 text-center">
                Aucun plat trouvé dans le restaurant
              </div>
            </>
          )}
        </div>
      </div>
    </HomeRoot>
  );
};
export default Restaurant;
