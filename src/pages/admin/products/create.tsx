import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import { useParams } from 'react-router-dom';

import AdminHomeRoot from '../../../components/organisms/AdminHomeRoot';

import { ICategoryRetrieved } from '../../../appState';

import CreateCategoryProduct from '../../../components/molecules/forms/CreateCategoryProduct';
import CreateItemProductForm from '../../../components/molecules/forms/CreateItemProduct';
import CreateMenuProductForm from '../../../components/molecules/forms/CreateMenuProduct';

import { retrieveCategories } from '../../../core-logic/usecases/category/categoryUseCase';

import { selectCategoryProductReducer } from '../../../view-model-generation/generateProductModel';

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

const CreateProductsFromSpecificRestaurant = () => {
  const [clickFocusCategory, setClickFocusCategory] =
    React.useState<string>('');
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryProductReducer);
  const [open, setOpen] = React.useState<boolean>(false);
  const [addItem, setAddItem] = React.useState<boolean>(false);

  const params = useParams();
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    dispatch(retrieveCategories(params?.id ?? ''));
  }, []);

  console.log(categories);

  return (
    <AdminHomeRoot>
      <>
        <div className="grid flex-col h-full grid-cols-12 pl-12">
          <div className="flex flex-col justify-between col-span-2 overflow-hidden grow">
            <div className="pt-8">
              {' '}
              <div>
                {categories &&
                  categories?.data?.map((category: ICategoryRetrieved) => {
                    return (
                      <div
                        className="flex justify-center w-full py-3 font-medium transition duration-300 border-gray-200 cursor-pointer border-y hover:bg-gray-200"
                        onClick={() => {
                          setClickFocusCategory(category._id);
                        }}
                      >
                        {category.title}
                      </div>
                    );
                  })}
              </div>
              <span
                className="flex items-center justify-center w-full px-8 py-4 font-medium tracking-wide text-white transition duration-300 cursor-pointer bg-dark-main hover:bg-dark-hover"
                onClick={() => setOpen(true)}
              >
                {' '}
                + Ajouter une catégorie
              </span>
            </div>
            <div
              onClick={() => {
                setAddItem(false);
              }}
              className="flex items-center justify-center w-full px-8 py-4 font-medium tracking-wide text-white transition duration-300 cursor-pointer bg-dark-main hover:bg-dark-hover"
            >
              + Ajouter un menu
            </div>
          </div>

          <div className="flex flex-col justify-between col-span-3 border-gray-200 border-x-2">
            <div className="h-full px-8 pt-8">leo</div>
            <div
              onClick={() => {
                setAddItem(true);
              }}
              className="flex items-center justify-center w-full px-8 py-4 font-medium tracking-wide text-white transition duration-300 cursor-pointer bg-dark-main hover:bg-dark-hover"
            >
              + Ajouter un item
            </div>
          </div>
          <div className="flex flex-col justify-between col-span-7">
            <div className="px-8 pt-8">
              {addItem ? <CreateItemProductForm /> : <CreateMenuProductForm />}
            </div>
            <div className="flex items-center justify-center w-full px-8 py-4 font-medium tracking-wide text-white transition duration-300 cursor-pointer bg-dark-main hover:bg-dark-hover">
              Sauvegarder
            </div>
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="space-y-6">
            <CreateCategoryProduct restaurantId={params?.id ?? ''} />
          </Box>
        </Modal>
      </>
    </AdminHomeRoot>
  );
};

export default CreateProductsFromSpecificRestaurant;
