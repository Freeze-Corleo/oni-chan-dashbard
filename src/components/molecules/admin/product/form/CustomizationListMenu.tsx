import React from 'react';
import { Box, Modal } from '@mui/material';
import ElementItemsMenu from '../form/ElementItemsMenu';

interface ICustomizationListFormProps {
  optionLabel: string;
  onAddElement: (_element: any) => void;
  onAddCustomFieldElement: (_element: any) => void;
}

interface IElementProps {
  onAddElement: (_element: any) => void;
  onAddCustomFieldElement: (_element: any) => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  p: 6,
  boxShadow: 24,
  borderRadius: '69px',
};

const Element: React.FC<IElementProps> = ({
  onAddElement,
  onAddCustomFieldElement,
}) => {
  const [test, setTest] = React.useState([]);
  const [elementFieldItem, setElementFieldItem] = React.useState<
    [
      {
        title: string;
        price: string;
      }
    ]
  >([{ title: '', price: '' }]);
  const [dynamicElements, setDynamicElements] = React.useState<JSX.Element[]>([
    <ElementItemsMenu
      onAddElement={onAddCustomFieldElement}
      setTest={setTest}
      test={test}
    />,
  ]);
  console.log(test);

  const [elementField, setElementField] = React.useState<{
    title: string;
    minPermitted: string;
    maxPermitted: string;
  }>({ title: '', minPermitted: '1', maxPermitted: '1' });
  const [open, setOpen] = React.useState<boolean>(false);
  const onChange = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setElementField({
      ...elementField,
      [_event.target.name]: _event.target.value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteElement = (_index: number) => {
    dynamicElements.splice(_index, 1);
    setDynamicElements([...dynamicElements]);
  };

  React.useEffect(() => {
    onAddElement(elementField);
  }, [elementField]);

  const addNewElement = () => {
    if (dynamicElements.length < 6) {
      setDynamicElements([
        ...dynamicElements,
        <ElementItemsMenu
          onAddElement={onAddCustomFieldElement}
          setTest={setTest}
          test={test}
        />,
      ]);
    }
  };

  const saveDatas = () => {};

  return (
    <>
      <div>
        <p>Libell&eacute;</p>
        <input
          type="text"
          className="px-4 py-2 border-2 rounded-lg"
          name="title"
          onChange={onChange}
        />
      </div>
      {/* <div className="mt-6">
        <button
          className="px-4 py-2 font-medium text-white transition duration-300 bg-black rounded-lg hover:bg-gray-700"
          onClick={() => {
            setOpen(true);
          }}
        >
          Ajouter des produits
        </button>
      </div> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="grid w-full space-y-6 place-content-center">
          {dynamicElements.map((element, index) => {
            return (
              <div className="flex items-center py-2 space-x-4" key={index}>
                {element}
                {index + 1 === dynamicElements.length ? (
                  <div className="mt-6">
                    <div
                      onClick={() => addNewElement()}
                      className="flex items-center justify-center w-6 h-6 font-medium text-white bg-black rounded-full cursor-pointer"
                    >
                      +
                    </div>
                  </div>
                ) : (
                  <div className="mt-6">
                    <div
                      onClick={() => deleteElement(index)}
                      className="flex items-center justify-center w-6 h-6 font-medium text-white bg-black rounded-full cursor-pointer"
                    >
                      -
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <button
            onClick={() => saveDatas()}
            className="px-8 py-4 font-medium text-white transition duration-300 bg-black hover:bg-gray-800"
          >
            Sauvegarder
          </button>
        </Box>
      </Modal>
    </>
  );
};

const CustomizationListMenuForm: React.FC<ICustomizationListFormProps> = ({
  optionLabel,
  onAddElement,
  onAddCustomFieldElement,
}) => {
  const [dynamicElements, setDynamicElements] = React.useState<JSX.Element[]>([
    <Element
      onAddElement={onAddElement}
      onAddCustomFieldElement={onAddCustomFieldElement}
    />,
  ]);

  const addNewElement = () => {
    if (dynamicElements.length < 4) {
      setDynamicElements([
        ...dynamicElements,
        <Element
          onAddElement={onAddElement}
          onAddCustomFieldElement={onAddCustomFieldElement}
        />,
      ]);
    }
  };

  const deleteElement = (_index: number) => {
    dynamicElements.splice(_index, 1);
    setDynamicElements([...dynamicElements]);
  };

  return (
    <div>
      <p className="font-medium">{optionLabel}</p>
      {dynamicElements.map((element, index) => {
        return (
          <div className="flex items-center py-2 space-x-4" key={index}>
            {element}
            {index + 1 === dynamicElements.length ? (
              <div className="mt-6">
                <div
                  onClick={() => addNewElement()}
                  className="flex items-center justify-center w-6 h-6 font-medium text-white bg-black rounded-full cursor-pointer"
                >
                  +
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <div
                  onClick={() => deleteElement(index)}
                  className="flex items-center justify-center w-6 h-6 font-medium text-white bg-black rounded-full cursor-pointer"
                >
                  -
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CustomizationListMenuForm;
