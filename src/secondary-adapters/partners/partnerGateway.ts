import { IPartner, IPartnerRegister } from "../../appState";
import { IPartnerGateway } from "../../core-logic/gateways/partnerGateway";
import * as partner from '../services/partners/partner.service';

export class PartnerGateway implements IPartnerGateway{

  public async retrieve(): Promise<{ response: IPartner[] | null; error: any; }> {
    return partner.getAllPartners();
  }
  public async applyPartnership(_partner: IPartnerRegister): Promise<{response: any, error: any}> {
    return partner.applyPartnerMembership(_partner);
  }
}