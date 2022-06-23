import { Box, Icon, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Table from '../../../components/atoms/Table';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/RegisterButton';

const mock = [
  { label: 'Cyber', createdAt: '01/02/3222', status: 'active', id: '17' },
  { label: 'Cyber', createdAt: '01/02/3222', status: 'active', id: '12' },
  { label: 'Cyber', createdAt: '01/02/3222', status: 'active', id: '123' },
  { label: 'Cyber', createdAt: '01/02/3222', status: 'active', id: '1234' },
];

/**
 * Implement dashboard element that display
 * command history by days, months, years
 * @returns {JSX.Element}
 */
const CreateRestaurantAdmin = () => {
  const [displayData, setDisplayData] = React.useState<{} | null>(null);
  const [selected, setSelected] = React.useState<string[]>([]);

  const navigate = useNavigate();

  const redirection = (id: string) => {
    navigate('/admin/commands/' + id);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setCredentials(initialState);
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 6,
    boxShadow: 24,
    borderRadius: '69px',
  };

  const initialState = {
    label: '',
    createdAt: '',
    status: '',
    id: '',
  }

  const [credentials, setCredentials] = React.useState(initialState);


  const onChangeInput = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setCredentials({
      ...credentials,
      [_event.target.name]: _event.target.value,
    });
  };

  const onValidate = () => {
    if (credentials.label != '' && credentials.createdAt != '' && credentials.status != '' && credentials.id != '') {
      mock.push(credentials);
      setCredentials(initialState);
      console.log(mock)
    }
    else{
      console.log(credentials);
    }
  }

  return (
    <div className="grid grid-cols-12 px-20 mt-8">
      <div className="col-span-12 bg-white shadow-lg rounded-lg">
        <div className='grid grid-cols-2'>
          <h2 className="font-medium px-8 py-4 text-lg">Création du restaurant</h2>
          <button className='place-self-end p-5'><AddCircleIcon color='primary' onClick={handleOpen} /></button>
        </div>
        <div className="px-8">
          <Table
            rowLabels={['Libellé', 'Date de Création', 'Status']}
            datas={mock}
            redirection={redirection}
            setSelected={setSelected}
            selected={selected}
            showSelects={false}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className='space-y-6'>
              <Input
                type="text"
                nameInput="label"
                placeholder="Nom du restaurant"
                onChangeFunction={onChangeInput}
              />
              <Input
                type="text"
                nameInput="createdAt"
                placeholder="Date de création"
                onChangeFunction={onChangeInput}
              />
              <Input
                type="text"
                nameInput="status"
                placeholder="Status"
                onChangeFunction={onChangeInput}
              />
              <Input
                type="text"
                nameInput="id"
                placeholder="ID du restaurant"
                onChangeFunction={onChangeInput}
              />
              <Button label='Ajouter le restaurant' onClick={onValidate} />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CreateRestaurantAdmin;
