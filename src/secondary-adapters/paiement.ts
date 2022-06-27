import * as stripePayment from './services/payment/stripe.service';

export class PaymentGateway {

  public async createPaymentIntent(datas: {userId: string, productsId: string[], provider: string}): Promise<{ response: {client_secret: string | null, total_price: number | null} | null; error: any; }>{
    return await stripePayment.createIntent(datas);
  }
}