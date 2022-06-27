import React from 'react';

import HomeRoot from '../../components/organisms/HomeRoot';
import Paiement from '../../components/organisms/stripe-payment/Paiement';

const PaymentHome = () => {
  return (
    <HomeRoot>
      <Paiement />
    </HomeRoot>
  );
};

export default PaymentHome;
