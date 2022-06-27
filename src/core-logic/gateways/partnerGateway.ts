import { IPartner, IPartnerApply } from '../../appState';

/**
 * Interface for Partner gateway that will be used to
 * use Partner gateway method in
 * /secondary-adapters/product
 */
export interface IPartnerGateway {
  retrieve(): Promise<{response: IPartner[] | null, error: any }>;
  createPartner(_partner: IPartnerApply): Promise<{response: IPartner | null, error: any}>;
}