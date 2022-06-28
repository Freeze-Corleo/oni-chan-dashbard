import React from 'react';
import Input from '../../../atoms/Input';
import Button from '../../../atoms/RegisterButton';

import { useDispatch, useSelector } from 'react-redux';

import { createCategory } from '../../../../core-logic/usecases/category/categoryUseCase';

import { ICategoryCreate } from '../../../../appState';

export interface ICreateCategoryProductProps {
  restaurantId: string;
}

const CreateCategoryProduct: React.FC<ICreateCategoryProductProps> = ({
  restaurantId,
}) => {
  const dispatch = useDispatch();
  const [catData, setCatData] = React.useState<ICategoryCreate>({
    title: '',
    restaurantId,
  });
  const onChangeInputCategory = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setCatData({ ...catData, [_event.target.name]: _event.target.value });
  };

  const onCreateCategory = () => {
    dispatch(createCategory(catData));
  };

  return (
    <div className="grid space-y-4 outline-none place-content-center">
      <Input
        type="text"
        nameInput="title"
        placeholder="Nom de la catégorie"
        onChangeFunction={onChangeInputCategory}
      />
      <Button
        label="Ajouter la catégorie"
        onClick={() => {
          onCreateCategory();
        }}
      />
    </div>
  );
};

export default CreateCategoryProduct;
