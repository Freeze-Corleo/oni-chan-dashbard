import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

import { retrieveMyUserFromCookie } from '../../../core-logic/usecases/my-profil/myUserUseCase';
import { createCommand } from '../../../core-logic/usecases/command/commandUseCase';

import { useSelector, useDispatch } from 'react-redux';
import { selectMyProfilReducer } from '../../../view-model-generation/generateMyProfilModel';
import { selectBasketReducer } from '../../../view-model-generation/generateBasketModel';

import { ICommandCreate } from '../../../appState';

interface ICheckoutProps {
  offer?: any;
  priceLabel?: string;
  setClientSecret: React.Dispatch<{
    client_secret: string;
    total_price: number;
  }>;
}

const Checkout = (props: ICheckoutProps) => {
  const cookie: any = useCookies(['FREEZE_JWT']);
  const dispatch = useDispatch();
  const basket = useSelector(selectBasketReducer);
  const user = useSelector(selectMyProfilReducer);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const result = await stripe
      .confirmPayment({
        elements,
        redirect: 'if_required',
      })
      .then((res) => {
        if (res.error) {
          setMessage(res.error.message as string);
          return;
        }

        const clientSecret = res.paymentIntent?.client_secret;

        console.log(clientSecret);

        if (!clientSecret) {
          alert('No client secret found!');
          return;
        }

        stripe
          .retrievePaymentIntent(clientSecret)
          .then(async ({ paymentIntent }) => {
            if (paymentIntent !== undefined) {
              console.log(paymentIntent);

              switch (paymentIntent.status) {
                case 'succeeded':
                  setMessage('Paiement réussi!');
                  if (basket) {
                    let productsId: any[] = [];
                    basket?.products.map((pro) =>
                      productsId.push(pro.product._id)
                    );
                    const data: ICommandCreate = {
                      price: basket?.totalPrice,
                      products: productsId,
                      restaurantId: basket?.restoId,
                      address: user.data.address,
                      userId: user.data.uuid,
                      delivery: '',
                      isAccepted: false,
                      isReceived: false,
                      deleted: false,
                    };
                    console.log(data);
                    dispatch(createCommand(data));
                  }
                  navigate('/success');
                  break;
                case 'processing':
                  setMessage('Votre paiement est en cours de traitement.');
                  break;
                case 'requires_payment_method':
                  setMessage('Votre paiement a échoué, veuillez réessayer.');
                  break;
                default:
                  setMessage("Oupsi! Quelque chose s'est mal passé.");
                  break;
              }
            }
          })
          .catch((error) => {
            console.error(error);
            alert("Le paiement a écouché d'une manière inattendue!");
          });
      });
    setIsLoading(false);
  };

  React.useEffect(() => {
    dispatch(retrieveMyUserFromCookie(cookie[0].FREEZE_JWT));
  }, []);

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <div className="title-wrap">
            <div className="title font-medium px-20 py-8">
              Étape 2 sur 2{' '}
              <span className="main-title font-bold">
                Configurez votre carte de paiement
              </span>
            </div>
          </div>
          <div id="payment-form">
            <PaymentElement id="payment-element" />
            {/* Show any error or success messages */}
            {message && (
              <div
                id="payment-message"
                className="pt-4 font-medium text-danger-red"
              >
                {message}
              </div>
            )}
            <div className="w-[550px] text-xs py-8 px-2">
              <p>
                En cliquant sur le bouton « Acheter » ci-dessous, vous acceptez
                nos <Link to="/cgu">Conditions d’utilisation</Link>,
                reconnaissez avoir plus de 18 ans et prenez acte de la{' '}
                <Link to="/confition-utilisation">
                  Déclaration de confidentialité
                </Link>
                . Vous acceptez que votre achat ne soit pas remboursable et
                renoncez à votre droit de rétractation.
              </p>
            </div>
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer"
            >
              Acheter
            </button>
          </div>
        </div>
        <div className="py-8 px-20">
          <div className="font-bold">R&eacute;capitulatif de la commande</div>
          <div className="space-y-6 pt-8">
            {basket?.products.map((product) => {
              return (
                <div className="flex items-center" key={product.product._id}>
                  <div className="bg-gray-500 w-6 h-6 rounded-full items-center flex justify-center font-normal text-sm text-white">
                    {product.qte}
                  </div>
                  <div className="pl-2 font-medium">
                    {product.product.title} ({product.product.price} €)
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-4 font-medium">Total : {basket?.totalPrice} €</div>
        </div>
      </div>

      <div id="modal" hidden={!modalConfirmOpen}>
        <div
          id="popup-modal"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
        >
          <div className="relative w-full h-full max-w-md p-4 md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="popup-modal"
              ></button>
              <div className="p-6 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Paiement réussi!
                </h3>
                <button
                  onClick={() => {
                    navigate('/commande-en-cours');
                  }}
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Aller à la page d'accueil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
