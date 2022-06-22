import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import PersonalInfoForm from '../../molecules/forms/UserForm';
import AddressForm from '../../molecules/forms/AddressForm';

import { selectUserReducer } from '../../../view-model-generation/generateUserModel';
import { selectMyProfilReducer } from '../../../view-model-generation/generateMyProfilModel';
import {
  retrieveSpecificUser,
  updateSpecificUser,
} from '../../../core-logic/usecases/users/usersUseCase';

import { IUser } from '../../../appState';

const DEFAULT_DATA = {
  email: '',
  firstname: '',
  lastname: '',
  phone: '',
  address: null,
  createdAt: null,
  updatedAt: null,
  googleAuth: null,
  verifyUser: null,
  status: '',
  godFather: '',
  profilUrl: '',
  isBanned: false,
  uuid: '',
};

const MyProfil = () => {
  const user = useSelector(selectUserReducer);
  const myUser = useSelector(selectMyProfilReducer);
  const dispatch = useDispatch();
  const [data, setData] = React.useState<IUser>(DEFAULT_DATA);

  React.useEffect(() => {
    myUser.data && dispatch(retrieveSpecificUser(myUser.data.uuid));
  }, []);

  React.useEffect(() => {
    user.data && setData(user.data);
  }, [user]);

  const onChangeValueUser = (
    event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onPreviewImage = async (event: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e: any) => {
      setData({ ...data, profilUrl: e.target.result });
    };
  };

  const onUpdateUserInformations = () => {
    dispatch(updateSpecificUser(data.uuid, data));
  };

  const onDeleteAddress = (uuid: string) => {};

  return (
    <div>
      {user.data !== null && (
        <>
          <PersonalInfoForm
            data={data}
            user={user}
            onChangeValueUser={onChangeValueUser}
            onPreviewImage={onPreviewImage}
            onUpdateUserInformations={onUpdateUserInformations}
          />
          <AddressForm data={data} onDeleteAddress={onDeleteAddress} />
        </>
      )}
    </div>
  );
};

export default MyProfil;
