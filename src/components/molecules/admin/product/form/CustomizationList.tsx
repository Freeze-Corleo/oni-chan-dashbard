import React from 'react';

interface ICustomizationListFormProps {
  optionLabel: string;
  onAddElement: (_element: any) => void;
}

interface IElementProps {
  onAddElement: (_element: any) => void;
}

const Element: React.FC<IElementProps> = ({ onAddElement }) => {
  const [elementField, setElementField] = React.useState<{
    title: string;
    minPermitted: string;
    maxPermitted: string;
  }>({ title: '', minPermitted: '', maxPermitted: '' });

  const onChange = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setElementField({
      ...elementField,
      [_event.target.name]: _event.target.value,
    });
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
          onChange={onChange}
        />
      </div>
      <div>
        <p>Nombre minimum permis</p>
        <input
          className="px-4 py-2 border-2 rounded-lg"
          type="number"
          name="minPermitted"
          onChange={onChange}
        />
      </div>
      <div>
        <p>Nombre maximum permis</p>
        <input
          className="px-4 py-2 border-2 rounded-lg"
          type="number"
          name="maxPermitted"
          onChange={onChange}
        />
      </div>
    </>
  );
};

const CutomizationListForm: React.FC<ICustomizationListFormProps> = ({
  optionLabel,
  onAddElement,
}) => {
  const [dynamicElements, setDynamicElements] = React.useState<JSX.Element[]>([
    <Element onAddElement={onAddElement} />,
  ]);

  const addNewElement = () => {
    if (dynamicElements.length < 4) {
      setDynamicElements([
        ...dynamicElements,
        <Element onAddElement={onAddElement} />,
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
              <div>
                <div
                  onClick={() => addNewElement()}
                  className="flex items-center justify-center w-6 h-6 font-medium text-white bg-black rounded-full cursor-pointer"
                >
                  +
                </div>
              </div>
            ) : (
              <div>
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

export default CutomizationListForm;
