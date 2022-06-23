import { IPartner } from '../../appState';

/**
 * Interface for Partner gateway that will be used to
 * use Partner gateway method in
 * /secondary-adapters/product
 */
export interface IPartnerGateway {
  retrieve(): Promise<{response: IPartner[] | null, error: any }>;
}