import React from 'react';
import styles from './RestaurantCard.module.css';
import { baseUrl } from '../../../constants'; // Since it is two folder above the current file where it been used.
const RestaurantCard = ({ info }) => {    // Accesing the Key Present in the the JsonObject direclty through the spread operator .
    const restaurant = info;
    // const [name,avgRating,cuisines,location] = restaurant_info?.info
    const imageUrl = `${baseUrl}${restaurant?.cloudinaryImageId}`;
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={restaurant?.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.name}>{restaurant?.name}</div>
        <div className={styles.details}>
          <div className={styles.rating}>
            <span className="material-icons">star</span>
            <span>{restaurant?.avgRating}</span>
          </div>
          <div className={styles.time}>{restaurant?.sla?.deliveryTime} minutes</div>
        </div>
        <div className={styles.cuisines}>{restaurant?.cuisines.join(', ')}</div>
        <div className={styles.location}>{restaurant?.location}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
