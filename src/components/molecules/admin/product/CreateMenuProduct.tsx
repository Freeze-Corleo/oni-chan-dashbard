import React from 'react';

import Input from '../../../atoms/Input';
import TextAreaForm from '../../../atoms/TextArea';

import CustomizationListMenuForm from './form/CustomizationListMenu';

const CreateMenuProductForm: React.FC<{
  categoryId: string;
  onAddCustomFieldElement: (_element: { title: string; price: string }) => void;
  onAddElement: (_element: {
    title: string;
    minPermitted: string;
    maxPermitted: string;
  }) => void;
  setProduct: React.Dispatch<any>;
}> = ({ categoryId, onAddElement, setProduct, onAddCustomFieldElement }) => {
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
        <h2 className="text-xl font-bold tracking-wide">Création d'un menu</h2>
      </div>
      <div className="flex py-4 space-x-4">
        <div>
          <p className="pl-2 font-medium">Nom</p>
          <Input
            type="text"
            nameInput="title"
            placeholder="Le nom de votre menu"
            onChangeFunction={onChangeInputCategory}
          />
        </div>
        <div>
          <p className="pl-2 font-medium">Prix du menu</p>
          <Input
            type="text"
            nameInput="price"
            placeholder="Le prix de votre menu"
            onChangeFunction={onChangeInputCategory}
          />
        </div>
      </div>
      <div>
        <p className="pl-2 font-medium">Description du menu</p>
        <TextAreaForm
          rowNumber={4}
          textAreaName="itemDescription"
          onChangeFunction={onChangeInputCategory}
          value={productItem['itemDescription']}
          placeholder="Entrez votre description du menu"
        />
      </div>
      <div>
        <div className="py-4">
          <p className="pb-2 pl-2 font-medium">Image du menu</p>
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
        <CustomizationListMenuForm
          optionLabel="Ajout des produits pour votre menu (4 max)"
          onAddElement={onAddElement}
          onAddCustomFieldElement={onAddCustomFieldElement}
        />
      </div>
    </div>
  );
};

export default CreateMenuProductForm;
