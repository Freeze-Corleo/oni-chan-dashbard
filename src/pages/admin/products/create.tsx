import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Modal } from '@mui/material';
import { useParams } from 'react-router-dom';

import AdminHomeRoot from '../../../components/organisms/AdminHomeRoot';

import { ICategoryRetrieved, IProductCreate } from '../../../appState';

import CreateCategoryProduct from '../../../components/molecules/admin/product/CreateCategoryProduct';
import CreateItemProductForm from '../../../components/molecules/admin/product/CreateItemProduct';
import CreateMenuProductForm from '../../../components/molecules/admin/product/CreateMenuProduct';

import { retrieveCategories } from '../../../core-logic/usecases/category/categoryUseCase';
import {
  createProductInformation,
  deleteProductInformation,
  retrieveProductsInformations,
} from '../../../core-logic/usecases/products/productsUseCases';
import { displayToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';

import {
  selectCategoryProductReducer,
  selectProductReducer,
} from '../../../view-model-generation/generateProductModel';

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
  const products = useSelector(selectProductReducer);
  const [open, setOpen] = React.useState<boolean>(false);
  const [addItem, setAddItem] = React.useState<boolean>(false);
  const [product, setProduct] = React.useState<IProductCreate>({
    imageUrl: '',
    itemDescription: '',
    price: '',
    title: '',
  });
  const [customField, setCustomFields] = React.useState<
    {
      title: string;
      minPermitted: string;
      maxPermitted: string;
    }[]
  >([]);
  const [customItemField, setCustomItemField] = React.useState<
    { title: string; price: string }[]
  >([]);

  const onAddElement = (_element: {
    title: string;
    minPermitted: string;
    maxPermitted: string;
  }) => {
    setCustomFields([...customField, _element]);
  };

  const onAddCustomFieldElement = (_element: {
    title: string;
    price: string;
  }) => {
    setCustomItemField([...customItemField, _element]);
  };

  const params = useParams();
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    dispatch(retrieveCategories(params?.id ?? ''));
  }, []);

  const createProduct = () => {
    if (clickFocusCategory.length === 0) {
      dispatch(
        displayToastNotification({
          text: 'Vous devez en premier séléctionner une catégorie',
          severityLevel: 'error',
          severityTitle: 'Erreur de création',
        })
      );
    } else {
      dispatch(
        createProductInformation(
          customField,
          product,
          params?.id ?? '',
          clickFocusCategory
        )
      );
    }
  };

  const deleteProduct = (_productId: string) => {
    dispatch(deleteProductInformation(_productId, params?.id ?? ''));
  };

  return (
    <AdminHomeRoot>
      <>
        <div className="grid flex-col h-full grid-cols-12 pl-12 font-montserrat">
          <div className="flex flex-col justify-between col-span-2 overflow-hidden grow">
            <div className="pt-8">
              {' '}
              <div>
                {categories?.data &&
                  categories?.data?.map((category: ICategoryRetrieved) => {
                    return (
                      <div
                        key={category._id}
                        className={`flex justify-center w-full py-3 font-medium transition duration-300  cursor-pointer hover:bg-gray-200 ${
                          clickFocusCategory === category._id
                            ? 'border-l-4 border-green-700 bg-gray-200'
                            : 'border-y border-gray-200'
                        }`}
                        onClick={() => {
                          dispatch(retrieveProductsInformations(category._id));
                          setClickFocusCategory(category._id);
                        }}
                      >
                        {category.title}
                      </div>
                    );
                  })}
              </div>
              <span
                className="flex items-center justify-center w-full px-8 py-4 text-sm font-medium tracking-wide text-white transition duration-300 cursor-pointer bg-dark-main hover:bg-dark-hover"
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
              className="flex items-center justify-center w-full px-8 py-4 text-sm font-medium tracking-wide text-white transition duration-300 cursor-pointer bg-dark-main hover:bg-dark-hover"
            >
              + Ajouter un menu
            </div>
          </div>

          <div className="flex flex-col justify-between col-span-3 border-gray-200 border-x-2">
            <div className="h-full pt-8">
              {products && products.length !== 0 ? (
                products.map((product) => {
                  return (
                    <div className="px-8 py-2 transition duration-300 border-gray-200 cursor-pointer border-y-2 hover:bg-gray-200">
                      <div className="flex items-center justify-between">
                        <img
                          src={product.imageUrl}
                          className="object-cover w-12 h-12 rounded-full"
                          alt={`produit ${product.title} à ${product.price} €`}
                        />
                        <div className="px-8">
                          <p>
                            {product.title} ({product.price} €)
                          </p>
                          <p>{product.itemDescription}</p>
                        </div>
                        <button
                          onClick={() => {
                            deleteProduct(product._id);
                          }}
                          className="flex items-center justify-center w-5 h-5 font-medium text-white bg-red-600 rounded-full hover:bg-red-800"
                        >
                          x
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="px-8 font-medium">
                  Pas encore de produits pour cette catégorie
                </p>
              )}
            </div>
            <div
              onClick={() => {
                setAddItem(true);
              }}
              className="flex items-center justify-center w-full px-8 py-4 text-sm font-medium tracking-wide text-white transition duration-300 cursor-pointer bg-dark-main hover:bg-dark-hover"
            >
              + Ajouter un item
            </div>
          </div>
          <div className="flex flex-col justify-between col-span-7">
            <div className="px-8 pt-8">
              {addItem ? (
                <CreateItemProductForm
                  categoryId={clickFocusCategory}
                  onAddElement={onAddElement}
                  setProduct={setProduct}
                />
              ) : (
                <CreateMenuProductForm
                  onAddCustomFieldElement={onAddCustomFieldElement}
                  categoryId={clickFocusCategory}
                  onAddElement={onAddElement}
                  setProduct={setProduct}
                />
              )}
            </div>
            <div
              onClick={() => {
                createProduct();
              }}
              className="flex items-center justify-center w-full px-8 py-4 text-sm font-medium tracking-wide text-white transition duration-300 cursor-pointer bg-dark-main hover:bg-dark-hover"
            >
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
