import React from 'react';

import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
  const [search, setSearch] = React.useState<string>('');
  const navigate = useNavigate();
  const onChangeSearch = (
    _event: React.ChangeEvent<{ name: string; value: string }>
  ) => {
    setSearch(_event.target.value);
  };

  const searchRestaurant = () => {
    if(search != ""){
      navigate({
        pathname: '/feed',
        search: `?search=`+search,
      });
    } else {
      navigate({
        pathname: '/feed'
      });
    }

  };

  return (
    <>
      <div className="">
        <div
          className="w-full h-[550px] grid place-content-center"
          style={{ top: 0, backgroundColor: '#BBF49B' }}
        >
          <div className="relative z-20 grid grid-cols-2">
            <div>
              <p className="mt-40 mb-10 ml-10 text-5xl font-bold text-center">
                ENVIE D'UN BON REPAS SANS BOUGER DE CHEZ VOUS ?
              </p>
              <div className="flex justify-center">
                <input
                  className="w-3/5 px-4 py-2 font-medium tracking-wide rounded-l-full outline-none"
                  type="text"
                  onChange={onChangeSearch}
                  placeholder="Chinois..."
                  value={search}
                  style={{ backgroundColor: '#F2F2F2' }}
                />
                <button
                  className="px-8 py-2 font-medium tracking-wide text-white transition duration-300 bg-black rounded-r-full hover:bg-gray-800 linear"
                  onClick={() => {
                    searchRestaurant();
                  }}
                >
                  à manger
                </button>
              </div>
            </div>
            <img
              className="object-scale-down mt-20 ml-40 h-60 w-96"
              src={process.env.PUBLIC_URL + '/img/les-courses.png'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
