import React from 'react';
import { loadStripe, StripeElementLocale } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectMyProfilReducer } from '../../../view-model-generation/generateMyProfilModel';
import { selectBasketReducer } from '../../../view-model-generation/generateBasketModel';

import { useNavigate } from 'react-router-dom';

import Checkout from './Checkout';
import { PaymentGateway } from '../../../secondary-adapters/paiement';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// To avoid exposing it, don't submit any personally identifiable information through requests with this API key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(
  'pk_test_51LFDCCIc1K9pzplSn0WpQcKPvWffOAVLBQkg0OOPjnuNrjhvRIgRU87OIGumF2DJ5qvXhSCDhDHgYUVfWHcIQlGp00lZli7CYs'
);

interface IPaiementProps {
  price: string;
  priceLabel: string;
  stripePayment: string;
}

const Paiement: React.FC<{}> = (): JSX.Element => {
  const user = useSelector(selectMyProfilReducer);
  const basket = useSelector(selectBasketReducer);
  const [clientSecret, setClientSecret] = React.useState<{
    client_secret: string;
    total_price: number;
  }>({ client_secret: '', total_price: 0 });

  React.useEffect(() => {
    console.log(user, basket);
    if (user.data && basket) {
      const productsId: string[] = [];
      const paymentIntent = new PaymentGateway();
      basket.data?.forEach((product) => {
        productsId.push(product.id);
      });
      paymentIntent
        .createPaymentIntent({
          userId: user?.data?.uuid,
          productsId: productsId,
          provider: 'stripe',
        })
        .then(
          ({
            response,
            error,
          }: {
            response: {
              client_secret: string | null;
              total_price: number | null;
            } | null;
            error: any;
          }) => {
            if (!error) {
              setClientSecret({
                client_secret: response?.client_secret ?? '',
                total_price: response?.total_price ?? 0,
              });
            }
          }
        );
    }
  }, []);

  const appearance: {
    theme: any;
    variables: any;
    rules: any;
    labels: any;
  } = {
    theme: 'none',
    labels: 'floating',
    variables: {
      colorPrimary: '#555557',
      colorText: '#555557',
      colorTextPlaceholder: '#0e0f11',
    },
    rules: {
      '.Input': {
        backgroundColor: '#0e0f11',
        color: '#555557',
        outline: 'none',
      },
    },
  };

  const options = {
    clientSecret: clientSecret?.client_secret,
    appearance,
    locale: 'fr' as StripeElementLocale,
    loader: 'always' as any,
  };

  return (
    <div className="App">
      {clientSecret?.client_secret.length > 0 && (
        <Elements options={options} stripe={stripePromise}>
          <Checkout
            offer={clientSecret?.total_price}
            priceLabel={'YOLO'}
            setClientSecret={setClientSecret}
          />
        </Elements>
      )}
    </div>
  );
};

export default Paiement;
