import React from "react";


const ItemList = ({restData}) =>
{
    return(
        <>
         <ul>
                                  {
                                    restData?.map(restaurant_menu => {
                                      return (
                                        <li key={restaurant_menu.card.info.id}>
                                          {restaurant_menu?.card?.info?.name}
                                        </li>
                                      );
                                    })
                                  }
        </ul>
        </>
    )
}

export default ItemList