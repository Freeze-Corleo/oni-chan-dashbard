import axiosConfig from "../../helpers/api.helpers";
import { IPartnerRegister } from '../../../appState';

// Service function for registering
export const applyPartnerMembership = async (partnerData: IPartnerRegister) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.post(`/oni-chan/partner/create`, {...partnerData});
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}
