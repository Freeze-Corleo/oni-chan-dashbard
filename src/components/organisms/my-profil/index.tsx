import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useSelector, useDispatch } from 'react-redux';

import PersonalInfoForm from '../../molecules/forms/UserForm';
import AddressForm from '../../molecules/forms/AddressForm';

import { selectUserReducer } from '../../../view-model-generation/generateUserModel';
import { selectMyProfilReducer } from '../../../view-model-generation/generateMyProfilModel';
import {
  retrieveSpecificUser,
  updateSpecificUser,
  deleteMyAccount,
} from '../../../core-logic/usecases/users/usersUseCase';

import { IUser } from '../../../appState';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  p: 4,
  boxShadow: 24,
  borderRadius: '69px',
};

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
  const [open, setOpen] = React.useState<boolean>(false);
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

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const deleteAccount = () => {
    dispatch(deleteMyAccount(myUser.data.uuid));
    setTimeout(() => navigate('/home'), 2000);
  };

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
          <div className="flex justify-center pt-8">
            <button
              className="rounded-full flex items-center bg-black text-white font-medium tracking-wide px-20 py-2 cursor-pointer space-x-4 hover:bg-gray-800 shadow-md transition duration-300 linear"
              onClick={() => {
                setOpen(true);
              }}
            >
              Supprimer mon compte
            </button>
          </div>
        </>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="grid place-content-center">
          <div>
            <p className="text-lg font-medium">
              Souhaitez-vous r&eacute;ellement supprimer votre compte ?
            </p>
            <p className="text-center">Cette action est irreversible</p>
            <div className="pt-4 flex space-x-4 justify-center">
              <button
                className="px-4 py-2 bg-red-700 rounded-full text-white hover:bg-red-800 transition duration-300"
                onClick={() => deleteAccount()}
              >
                Oui
              </button>
              <button
                className="px-4 py-2 bg-black rounded-full text-white hover:bg-gray-800 transition duration-300"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Non
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MyProfil;
