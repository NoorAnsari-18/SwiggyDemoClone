import React from "react";
import { useState,useEffect } from "react";
import About from "../About/About";
import { useParams } from "react-router-dom";
import { Menu_API } from "../../constants";
import Accordion from "../Accordion/Accordion";



const Restaurants = () => {
    debugger
const [restaurantMenu,setRestaurantMenu] = useState(null);


const {restId} = useParams();   // Note here the Name of the Destructing variable needs to be same as Passed in createBrowserRoute.  path:"/restaurants/:restId",
// console.log( 'The use Parman is being COnsoledlog' + restId);
// console.log(restId);

useEffect( () =>{
    fetchMenu()
},[]);
   // Destructuring on the FLy .
// console.log(restId);
  // When the Depenedency Paramter is being Passed as an Empty Array then the useEffect call back Fn is not going to get Called after the Initial Rerender.

const fetchMenu = async () =>
{debugger
    try {
        debugger
    const data = await fetch(Menu_API + restId);
    // console.log(Menu_API + restId);
    const result = await data.json();
    
    // console.log(result);
    setRestaurantMenu(result.data);
    // console.log(result.data);
;    }
    catch(error) {
        console.error('Error fetching data:', error);
    }
}
if (restaurantMenu == null) return <About/>
// the beloe needs some different data 
// result.data.cards[2].card.card.info
// console.log(restaurantMenu?.cards[2].card.card.info);
debugger
const {name,cuisines,costForTwoMessage} = restaurantMenu?.cards[2].card.card.info;

const {itemCards} = restaurantMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
// console.log(itemCards);

var dat2 = itemCards;
var data3 = restaurantMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
// console.log(data3);
const rangeOfCards = data3.slice(1, 15);
// console.log(rangeOfCards);
// console.log(dat2[0]?.card.info.name);
// console.log({dat2[0].card.info.name});
    return (
        <>
{/* {The Map Fucntion } */}
        <h1>{name}</h1>
        <span>{cuisines.join(",")}</span>
        <h4> Rs -{costForTwoMessage}</h4>
        <h2>Menu</h2>
      
                <ul>
                {
                            rangeOfCards?.map(subdataobj => {
                                console.log(subdataobj);
                                var data2  = subdataobj.card.card.itemCards;
                                // console.log(data2);
                            return (
                                <Accordion title={subdataobj.card?.card?.title}>
                                <ul>
                                  {
                                    data2?.map(restaurant_menu => {
                                      return (
                                        <li key={restaurant_menu.card.info.id}>
                                          {restaurant_menu?.card?.info?.name}
                                        </li>
                                      );
                                    })
                                  }
                                </ul>
                              </Accordion>
                            );
                            })
                        }  
 
                    </ul>

        {/* <Accordion title="Menu">
        <ul>
          {
            dat2?.map(restaurant_menu => {
              return (
                <li key={restaurant_menu.card.info.id}>
                  {restaurant_menu.card.info.name}
                </li>
              );
            })
          }
        </ul>
      </Accordion> */}
        </>
    )
}

export default Restaurants