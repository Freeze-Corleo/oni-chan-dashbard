import { AppState, IPartner } from '../appState';

import { pick } from '../helpers/field-selector';

export const selectPartnerReducer = (state: AppState) => state.partner;

export const selectPartnerWithoutAddr = (state: AppState) => {
  const newPartners: IPartner[] | null = [];
  state.partner.data?.forEach((partner) => {
    const data = pick(partner, "name", "siren", "activity", "firstname", "lastname", "email", "phone", "status", "createdAt", "_id") as IPartner;
    newPartners.push(data)
  })
  return newPartners;
}