import axiosConfig from "../../helpers/api.helpers";
import { IPartnerApply, IPartnerRegister } from '../../../appState';

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

export const getAllPartners = async () => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.get(`/oni-chan/partner/get-all`);
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}

export const createPartner = async (partnerData: IPartnerApply) => {
  let response: any;
  let error: any = null;

  try {
    response = await axiosConfig.post(`/oni-chan/partner/verify/${partnerData.id}`, {password: partnerData.password, status:partnerData.status});
    response = response.data;
  } catch (err) {
    error = err;
  }

  return {response, error};
}