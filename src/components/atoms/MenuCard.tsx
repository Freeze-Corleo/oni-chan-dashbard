const MenuCard = ({
  img = '',
  title = '',
  description = '',
  price = '',
}: {
  img: string;
  title?: string;
  description?: string;
  price?: string;
}) => {
  return (
    <>
      <div className="w-full h-full bg-[#F1F0F0] rounded-lg grid grid-cols-2 place-items-center shadow-2xl gap-10 p-10">
        <p className="font-bold text-xl col-span-2 place-self-start">
          {title} ({price} €)
        </p>
        <p className="text-sm font-medium text-start">{description}</p>
        <img
          className="rounded-lg w-44 h-32 object-cover"
          src={process.env.PUBLIC_URL + img}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = process.env.PUBLIC_URL + '/img/pizza.jpg';
          }}
          alt=""
        />
      </div>
    </>
  );
};

export default MenuCard;
