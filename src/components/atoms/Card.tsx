const Card = ({
    img = '',
    label = '',
    link = '#',
}: {
    img: string;
    label?: string;
    link?: string;
}) => {
    return (
        <>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
                <a href={link}>
                    <img className="rounded-t-lg" src={process.env.PUBLIC_URL +  img } alt="" />
                    <div className="absolute w-full h-full top-0 text-white text-2xl flex justify-center items-center">{label}</div>
                </a>
            </div>
        </>
    );
};

export default Card;




