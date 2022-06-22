import { IPartnerRegister } from "../../appState";
import * as partner from '../services/partners/partner.service';

export class PartnerGateway {
  public async applyPartnership(_partner: IPartnerRegister): Promise<{response: any, error: any}> {
    return partner.applyPartnerMembership(_partner);
  }
}