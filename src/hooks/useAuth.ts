import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { IMyProfil } from '../appState';

export const useAuth = () => {
  const token = Cookies.get('FREEZE_JWT');
  if(token) {
    const _userDecoded: IMyProfil | null= jwtDecode(token);
    if(_userDecoded && _userDecoded.status === "restorer") {
      return true
    }
  }

  return false;
};