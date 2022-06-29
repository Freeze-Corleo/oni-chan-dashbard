import { Box, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SVGIconBasket from '../svg/IconBasket';
import { selectMyProfilReducer } from '../../view-model-generation/generateMyProfilModel';
import { selectBasketReducer } from '../../view-model-generation/generateBasketModel';

import { retrieveMyUserFromCookie } from '../../core-logic/usecases/my-profil/myUserUseCase';

import { useCookies } from 'react-cookie';

import { LogoOniChan } from '../organisms/Footer';
import Button from '../atoms/RegisterButton';

import { logoutUser } from '../../core-logic/usecases/my-profil/myUserUseCase';

const Panier = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z" />
    </svg>
  );
};

const Partnership = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M12.22,19.85c-0.18,0.18-0.5,0.21-0.71,0c-0.18-0.18-0.21-0.5,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39 c-0.19,0.2-0.51,0.19-0.71,0c-0.21-0.21-0.18-0.53,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0 c-0.19-0.19-0.19-0.51,0-0.71l3.39-3.39L9.24,10.1l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0c-0.19-0.2-0.19-0.51,0-0.71L9.52,8.4 l1.87,1.86c0.95,0.95,2.59,0.94,3.54,0c0.98-0.98,0.98-2.56,0-3.54l-1.86-1.86l0.28-0.28c0.78-0.78,2.05-0.78,2.83,0l4.24,4.24 c0.78,0.78,0.78,2.05,0,2.83L12.22,19.85z M21.83,13.07c1.56-1.56,1.56-4.09,0-5.66l-4.24-4.24c-1.56-1.56-4.09-1.56-5.66,0 l-0.28,0.28l-0.28-0.28c-1.56-1.56-4.09-1.56-5.66,0L2.17,6.71c-1.42,1.42-1.55,3.63-0.4,5.19l1.45-1.45 C2.83,9.7,2.96,8.75,3.59,8.12l3.54-3.54c0.78-0.78,2.05-0.78,2.83,0l3.56,3.56c0.18,0.18,0.21,0.5,0,0.71 c-0.21,0.21-0.53,0.18-0.71,0L9.52,5.57l-5.8,5.79c-0.98,0.97-0.98,2.56,0,3.54c0.39,0.39,0.89,0.63,1.42,0.7 c0.07,0.52,0.3,1.02,0.7,1.42c0.4,0.4,0.9,0.63,1.42,0.7c0.07,0.52,0.3,1.02,0.7,1.42c0.4,0.4,0.9,0.63,1.42,0.7 c0.07,0.54,0.31,1.03,0.7,1.42c0.47,0.47,1.1,0.73,1.77,0.73c0.67,0,1.3-0.26,1.77-0.73L21.83,13.07z" />
      </g>
    </svg>
  );
};

const ProfilIcon = () => {
  return (
    <div className="pr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M7.35,18.5C8.66,17.56,10.26,17,12,17 s3.34,0.56,4.65,1.5C15.34,19.44,13.74,20,12,20S8.66,19.44,7.35,18.5z M18.14,17.12L18.14,17.12C16.45,15.8,14.32,15,12,15 s-4.45,0.8-6.14,2.12l0,0C4.7,15.73,4,13.95,4,12c0-4.42,3.58-8,8-8s8,3.58,8,8C20,13.95,19.3,15.73,18.14,17.12z" />
            <path d="M12,6c-1.93,0-3.5,1.57-3.5,3.5S10.07,13,12,13s3.5-1.57,3.5-3.5S13.93,6,12,6z M12,11c-0.83,0-1.5-0.67-1.5-1.5 S11.17,8,12,8s1.5,0.67,1.5,1.5S12.83,11,12,11z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

const Navigation = () => {
  const cookie: any = useCookies(['FREEZE_JWT']);
  const dispatch = useDispatch();
  const user = useSelector(selectMyProfilReducer);
  const basket = useSelector(selectBasketReducer);
  const [openProduct, setOpenProduct] = useState(false);
  const [openProfil, setOpenProfil] = useState(false);
  const [count, setCount] = useState([]);
  const [product, setProduct] = useState(['']);
  const [countAndProduct, setCountAndProduct] = useState([]);
  const [prix, setPrix] = useState(0);
  const handleCloseProduct = () => setOpenProduct(false);
  const handleOpenProduct = () => {
    setOpenProduct(true);
  };
  const handleCloseProfil = () => setOpenProfil(false);
  const handleOpenProfil = () => setOpenProfil(true);
  const navigate = useNavigate();
  const searchProfil = () => {
    navigate({
      pathname: '/my-profil',
    });
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    handleCloseProfil();
  };

  React.useEffect(() => {
    dispatch(retrieveMyUserFromCookie(cookie[0].FREEZE_JWT));
  }, []);

  React.useEffect(() => {});

  const styleProduct = {
    position: 'absolute' as 'absolute',
    top: '30%',
    right: '0',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '69px',
    p: 4,
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '24%',
    right: '0',
    transform: 'translate(-10%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '69px',
    p: 4,
  };

  return (
    <div className="relative z-10">
      <img
        src={process.env.PUBLIC_URL + '/img/wave.png'}
        className="absolute z-10 w-screen"
      />
      <div className="grid grid-cols-2 px-10 py-4">
        <div className="z-50">
          {user.data?.status === 'restorer' ? (
            <Link to="/admin">
              <LogoOniChan />
            </Link>
          ) : (
            <Link to="/home">
              <LogoOniChan />
            </Link>
          )}
        </div>
        <div className="z-50 pt-2">
          <ul className="flex justify-end space-x-4">
            <Link to="/register-restaurant">
              <div className="flex items-center px-4 py-2 font-medium tracking-wide transition duration-300 bg-white rounded-full cursor-pointer hover:bg-gray-200 linear">
                {' '}
                <Partnership />
                Devenir partenaire
              </div>
            </Link>
            <li>
              <button onClick={handleOpenProduct}>
                <div className="flex items-center px-4 py-2 font-medium tracking-wide transition duration-300 bg-white rounded-full cursor-pointer hover:bg-gray-200 linear">
                  <Panier />
                  Panier ({basket?.qteTotal ?? 0})
                </div>
              </button>
              <Modal
                open={openProduct}
                onClose={handleCloseProduct}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={styleProduct}>
                  <div className="grid cols-1 gap-y-3 place-items-center">
                    <p className="text-3xl font-bold">
                      Votre panier ({basket?.qteTotal ?? 0})
                    </p>
                    <SVGIconBasket className="w-10" />
                    <p className="text-xl font-bold pb-8">
                      {basket?.restaurantName ? basket.restaurantName : ''}
                    </p>
                  </div>
                  {count && product && (
                    <div className="mt-3 space-y-4">
                      {basket?.products.map((product) => {
                        return (
                          <div
                            className="flex items-center"
                            key={product.product._id}
                          >
                            <div className="bg-gray-500 w-6 h-6 rounded-full items-center flex justify-center font-normal text-sm text-white">
                              {product.qte}
                            </div>
                            <div className="pl-2 font-medium">
                              {product.product.title} ({product.product.price}{' '}
                              €)
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div className="grid mt-8 cols-1 place-items-center">
                    <Button
                      label={`Commander ${basket?.totalPrice.toFixed(2)} €`}
                      onClick={() => {
                        navigate('/paiement');
                      }}
                    />
                  </div>
                </Box>
              </Modal>
            </li>
            {user.data === null ? (
              <li>
                <Link to="/login">
                  <div className="flex items-center px-4 py-2 font-medium tracking-wide transition duration-300 bg-white rounded-full cursor-pointer hover:bg-gray-200 linear">
                    {' '}
                    <ProfilIcon /> Se connecter
                  </div>
                </Link>
              </li>
            ) : (
              <li>
                <button onClick={handleOpenProfil}>
                  <div className="flex items-center px-4 py-2 font-medium tracking-wide transition duration-300 bg-white rounded-full cursor-pointer hover:bg-gray-200 linear">
                    <ProfilIcon />
                    Profil
                  </div>
                </button>

                <Modal
                  open={openProfil}
                  onClose={handleCloseProfil}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="grid cols-1 gap-y-3 place-items-center">
                      <p className="text-3xl font-bold">Votre espace</p>
                    </div>

                    <div className="grid mt-8 cols-1 place-items-center">
                      <Button label="Mon profil" onClick={searchProfil} />
                    </div>

                    <div className="grid mt-8 cols-1 place-items-center">
                      <Button label="Se déconnecter" onClick={handleLogout} />
                    </div>
                  </Box>
                </Modal>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
