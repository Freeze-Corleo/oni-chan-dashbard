import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface ICheckoutProps {
  offer?: any;
  priceLabel?: string;
  setClientSecret: React.Dispatch<{
    client_secret: string;
    total_price: number;
  }>;
}

const Checkout = (props: ICheckoutProps) => {
  const [cookies] = useCookies(['API_TOKEN']);
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

                  // si le paiement est réussi on fait un truc

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
          .catch(() => {
            alert("Le paiement a écouché d'une manière inattendue!");
          });
      });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setMessage(error.message);
    // } else {
    //   setMessage("An unexpected error occured.");
    // }

    setIsLoading(false);
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
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
      </form>

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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
