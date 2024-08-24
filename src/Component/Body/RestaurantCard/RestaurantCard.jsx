import React from 'react';
// import styles from './RestaurantCard.module.css';
import { baseUrl } from '../../../constants'; // Since it is two folder above the current file where it been used.
const RestaurantCard = ({ info }) => {    // Accesing the Key Present in the the JsonObject direclty through the spread operator .
    const restaurant = info;
    // const [name,avgRating,cuisines,location] = restaurant_info?.info
    const imageUrl = `${baseUrl}${restaurant?.cloudinaryImageId}`;
  return (
    
      <>
      <div className="flex flex-col w-full overflow-hidden max-w-80 m-4 rounded-lg border-r-8 shadow-xl back bg-white">
                    <div className='w-full h-64 overflow-hidden object-cover'>
                <img src={imageUrl} alt={restaurant?.name} />
              </div>
              <div className='p-4'>
                <div>{restaurant?.name}</div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center  mb-2 px-1 py-2 rounded-lg 0.5rem bg-green-400'>
                    <span className="material-icons">star</span>
                    <span>{restaurant?.avgRating}</span>
                  </div>
                  <div>{restaurant?.sla?.deliveryTime} minutes</div>
                </div>
                <div className='text-sm text-black mb-2'>{restaurant?.cuisines.join(', ')}</div>
                <div>{restaurant?.location}</div>
          </div>
    </div>
    </>
  );
};

export default RestaurantCard;
