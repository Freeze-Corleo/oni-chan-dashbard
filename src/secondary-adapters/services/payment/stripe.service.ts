import axiosConfig from "../../helpers/api.helpers";

// Service function for registering
export const createIntent = async (paymentIntentData: {userId: string, productsId: string[], provider: string}) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.post(`/oni-chan/payment/payment-intent/${paymentIntentData.userId}`, {productsId: paymentIntentData.productsId, provider: paymentIntentData.provider});
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}
