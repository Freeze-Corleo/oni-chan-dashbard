import React from 'react';

interface IElementProps {
  onAddElement: (_element: any) => void;
  setTest: any;
  test: any;
}

const ElementItemsMenu: React.FC<IElementProps> = ({
  onAddElement,
  setTest,
  test,
}) => {
  const [elementField, setElementField] = React.useState<{
    title: string;
    price: string;
  }>({ title: '', price: '' });

  const onChange = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setElementField({
      ...elementField,
      [_event.target.name]: _event.target.value,
    });
    setTest([...test, elementField]);
  };

  React.useEffect(() => {
    onAddElement(elementField);
  }, [elementField]);

  return (
    <>
      <div>
        <p>Libell&eacute;</p>
        <input
          type="text"
          className="px-4 py-2 border-2 rounded-lg"
          name="title"
          value={elementField.title}
          onChange={onChange}
        />
      </div>
      <div>
        <p>Prix</p>
        <input
          className="px-4 py-2 border-2 rounded-lg"
          type="number"
          name="price"
          value={elementField.price}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default React.memo(ElementItemsMenu);
