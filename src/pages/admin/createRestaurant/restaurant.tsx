import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link, useParams, useNavigate } from 'react-router-dom';

import AdminHomeRoot from '../../../components/organisms/AdminHomeRoot';
import { selectRestaurantReducer } from '../../../view-model-generation/generateRestaurantModel';
import { retrieveRestaurantInformation } from '../../../core-logic/usecases/restaurant/restaurantUseCase';
import { deleteRestaurantInformation } from '../../../core-logic/usecases/restaurant/restaurantUseCase';

const RestaurantIdAdmin = () => {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantReducer);
  const rest: any = restaurants;

  React.useEffect(() => {
    dispatch(retrieveRestaurantInformation(params?.id));
  }, []);

  const handleDelete = async () => {
    await dispatch(deleteRestaurantInformation(params?.id));
    await navigate("/admin/create-restaurant"); 
  }

  return (
    <AdminHomeRoot>
      <div className="grid grid-cols-12 px-20 mt-8">
        <div className="col-span-12 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-2">
            <h2 className="px-8 py-4 text-lg font-medium">
              Restaurant {rest?.product?.data?.name}
            </h2>
            <button className="p-5 place-self-end">
              <CancelIcon color="error" onClick={handleDelete} />
            </button>
          </div>
          <div className="px-8"></div>
        </div>
      </div>
    </AdminHomeRoot>
  );
};

export default RestaurantIdAdmin;
