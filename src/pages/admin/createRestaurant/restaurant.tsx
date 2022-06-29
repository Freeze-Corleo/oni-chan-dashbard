import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import AdminHomeRoot from '../../../components/organisms/AdminHomeRoot';

/**
 * Retrieve le restaurant by id
 * Possibilité de modifier name, address, cookType isAvailable et imageUrl
 *
 * et création du bouton pour supprimer le restaurant
 */
const RestaurantIdAdmin = () => {
  const params = useParams();

  console.log(params?.id);
  React.useEffect(() => {}, []);

  return (
    <AdminHomeRoot>
      <div className="grid grid-cols-12 px-20 mt-8">
        <div className="col-span-12 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-2">
            <h2 className="px-8 py-4 text-lg font-medium">
              Création du restaurant
            </h2>
          </div>
          <div className="px-8"></div>
        </div>
      </div>
    </AdminHomeRoot>
  );
};

export default RestaurantIdAdmin;
