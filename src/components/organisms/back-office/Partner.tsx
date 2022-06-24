import React from 'react';
import { Box, Icon, Modal } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

import { selectPartnerWithoutAddr } from '../../../view-model-generation/generatePartnerModel';
import { retrievePartners } from '../../../core-logic/usecases/partners/partnersUseCase';

import Table from '../../atoms/Table';
import Input from '../../../components/atoms/Input';
import Button from '../../../components/atoms/RegisterButton';

/**
 * Implement dashboard element that display
 * command history by days, months, years
 * @returns {JSX.Element}
 */
const DashboardPartners = () => {
  const [credentials, setCredentials] = React.useState({
    status: '',
    id: '',
    password: '',
  });
  const [open, setOpen] = React.useState(false);
  const partners = useSelector(selectPartnerWithoutAddr);
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState<string[]>([]);

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

  const validation = (state: string, id: string) => {
    if (state !== 'refused') {
      setCredentials({ ...credentials, status: state, id });
      setOpen(true);
    } else {
      // dispatch to change status to refused
    }
  };

  const createRestorer = () => {
    console.log(credentials);
  };

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    dispatch(retrievePartners());
  }, []);

  const onChangeInput = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setCredentials({
      ...credentials,
      [_event.target.name]: _event.target.value,
    });
  };

  return (
    <div className="grid grid-cols-12 px-20 pt-8">
      <div className="col-span-12 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="px-8 py-4 text-lg font-medium">
            Les candidatures de partenaires
          </h2>
        </div>
        <div className="px-8">
          {partners && (
            <Table
              rowLabels={[
                'Nom',
                'SIREN',
                'Activité',
                'Prénom',
                'Nom de famille',
                'Email',
                'Téléphone',
                'Status',
                'Date de création',
              ]}
              datas={partners}
              setSelected={setSelected}
              selected={selected}
              showSelects={false}
              validation={validation}
            />
          )}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="space-y-6">
          <Input
            type="text"
            nameInput="password"
            placeholder="Entrez votre mots de passe"
            onChangeFunction={onChangeInput}
          />
          <Button
            label="Créer le restaurateur"
            onClick={() => {
              createRestorer();
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default DashboardPartners;
