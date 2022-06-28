import React from 'react';

import Input from '../../../atoms/Input';
import TextAreaForm from '../../../atoms/TextArea';

import CutomizationListForm from './form/CustomizationList';

const CreateItemProductForm: React.FC<{
  categoryId: string;
  onAddElement: (_element: {
    title: string;
    minPermitted: string;
    maxPermitted: string;
  }) => void;
  setProduct: React.Dispatch<any>;
}> = ({ categoryId, onAddElement, setProduct }) => {
  const [productItem, setProductItem] = React.useState<{
    [key: string]: string;
  }>({});

  const onChangeInputCategory = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setProductItem({
      ...productItem,
      [_event.target.name]: _event.target.value,
    });
    setProduct(productItem);
  };

  const onPreviewImage = async (event: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e: any) => {
      setProductItem({ ...productItem, imageUrl: e.target.result });
      setProduct({ ...productItem, imageUrl: e.target.result });
    };
  };

  return (
    <div className="">
      <div>
        <h2 className="text-xl font-bold tracking-wide">
          Création d'un produit
        </h2>
      </div>
      <div className="flex py-4 space-x-4">
        <div>
          <p className="pl-2 font-medium">Nom</p>
          <Input
            type="text"
            nameInput="title"
            placeholder="Le nom de votre produit"
            onChangeFunction={onChangeInputCategory}
          />
        </div>
        <div>
          <p className="pl-2 font-medium">Prix</p>
          <Input
            type="text"
            nameInput="price"
            placeholder="Le prix de votre produit"
            onChangeFunction={onChangeInputCategory}
          />
        </div>
      </div>
      <div>
        <p className="pl-2 font-medium">Description du produit</p>
        <TextAreaForm
          rowNumber={4}
          textAreaName="itemDescription"
          onChangeFunction={onChangeInputCategory}
          value={productItem['itemDescription']}
          placeholder="Entrez votre description du produit"
        />
      </div>
      <div>
        <div className="py-4">
          <p className="pb-2 pl-2 font-medium">Image du produit</p>
          <div className="flex items-center space-x-5">
            {productItem?.imageUrl ? (
              <img
                src={productItem.imageUrl}
                className="object-cover w-20 h-20 rounded-full"
                alt="profil of a specific user"
              />
            ) : (
              <div className="flex items-center justify-center object-cover w-20 h-20 text-xl font-medium text-white bg-black rounded-full">
                N
              </div>
            )}
            <label className="inline-flex items-center px-10 py-3 text-sm font-medium text-center text-white transition duration-300 bg-black rounded-full shadow-2xl cursor-pointer hover:bg-gray-800 linear">
              Changer de photo
            </label>
            <input
              type="file"
              className="absolute opacity-0 cursor-pointer"
              onChange={onPreviewImage}
            />
          </div>
        </div>
      </div>
      <div>
        <CutomizationListForm
          optionLabel="Ajout des options (4 au maximum)"
          onAddElement={onAddElement}
        />
      </div>
    </div>
  );
};

export default CreateItemProductForm;
