import React from 'react';
import Input from '../../atoms/Input';
import Button from '../../../components/atoms/RegisterButton';

import { ICategoryCreate } from '../../../appState';

export interface ICreateCategoryProductProps {
  restaurantId: string;
}

const CreateCategoryProduct: React.FC<ICreateCategoryProductProps> = ({
  restaurantId,
}) => {
  const [catData, setCatData] = React.useState<ICategoryCreate>({
    title: '',
    restaurantId,
  });

  console.log(catData);
  const onChangeInputCategory = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {};

  const onCreateCategory = () => {};

  return (
    <div className="grid space-y-4 outline-none place-content-center">
      <Input
        type="text"
        nameInput="name"
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
