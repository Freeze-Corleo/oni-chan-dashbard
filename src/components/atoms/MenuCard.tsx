const MenuCard = ({
    img = '',
    label = '',
}: {
    img: string;
    label?: string;
}) => {
    return (
        <>
            <div className="w-full h-full bg-[#F1F0F0] rounded-lg grid grid-cols-2 place-items-center shadow-2xl gap-10 p-10">
                <p className="font-bold text-xl col-span-2 place-self-start">{label}</p>
                <p>{label}</p>
                <img className="rounded-lg w-full h-full" src={process.env.PUBLIC_URL +  img } alt="" />
            </div>
        </>
    );
};

export default MenuCard;




