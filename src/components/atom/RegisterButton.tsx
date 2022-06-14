const Button = ({
    label = '',
  }: {
    label: string;
  })  => {
    return(
        <div className='grid place-content-center w-full mt-10'>   
            <button type="button" className="text-white shadow-2xl font-medium rounded-full mb-20 text-sm px-10 py-3 text-center inline-flex items-center bg-black">
              <p>{label}</p>
            </button>
        </div>
    );
}

export default Button;
