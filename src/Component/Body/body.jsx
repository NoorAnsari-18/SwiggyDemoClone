                import React,{useState,useEffect} from "react"
                import RestaurantCard from "./RestaurantCard/RestaurantCard";
                import style from "./body.css"
                // import { restaurantList } from "../../constants";
                // Would need to make a API  call in here .
                import { Link } from "react-router-dom";


                const Body = () => {
                  {console.log("the Body  is getting Called for the first time")}
                  const [restaurant, setRestaurant] = useState([]);
                  const [allRestaurant, setAllRestaurant] = useState("");
                  const [cart, setCart] = useState(0);
                  let rest = [];
                  const [noOfRestaurant, setNoOfRestaurant] = useState(0);


                  // These region is been used to make the first api call 
                  //#region
                  useEffect(() => {
                    try {
                      debugger
                      {console.log("the Dom is SetUp and userEffect is gettting initialized.")}
                      callApiHandler()
                        .then(response => {
                          // handle the response here
                        })
                        .catch(error => {
                          console.error(error);
                          // handle the error here
                          
                        // setCarouselData(da?.data?.cards[0]?.data?.data?.cards);
                      
                        // rest = da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data);
                        // setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);
                      
                        // setAllRestaurant(rest);
                        // setRestaurant(rest);
                        });
                    } catch (error) {
                      // handle the error here
                      
                    // setCarouselData(da?.data?.cards[0]?.data?.data?.cards);
                  
                    // rest = da?.data?.cards[2]?.data?.data?.cards?.map((x) => x.data);
                    // setNoOfRestaurant(da?.data?.cards[2]?.data?.data?.totalRestaurants);
                  
                    // setAllRestaurant(rest);
                    // setRestaurant(rest);
                }
                  }, []);

                  async function callApiHandler() {
                    {console.log("The User Effect Has called teh Call APi Handler.")}
                    try {
                      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
                      const result = await response.json();
                      // console.log(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                      setRestaurant(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                    } catch (error) {
                      console.error('Error fetching data:', error);
                    }
                  }
                //#endregion
                  



                //#region  to call the api when were are Scrolling at the bottom at of the page.
                  async function callApiHandler2() {
                    {console.log("the Call APi Handler is getting Called after the DOM us getting initalized for the First time .")}
                    console.log(`cart is ${cart}`)
                    let response2 = await fetch(
                      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&offset=${cart}&sortBy=RELEVANCE&pageType=FOOD_HOMEPAGE`
                    );
                    let dat = await response2.json();
                    var daatrespinse2 = dat.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
                    console.log(`the api response for Scrolling is ${daatrespinse2}`)
                    rest?.push(
                      dat.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
                    );

                    // setRestaurant((prev) => [...prev, ...rest]);
                    // setAllRestaurant((prev) => [...prev, ...rest]);

                  }

                  useEffect(() => {
                    try {
                      callApiHandler2()
                        .then(response => {
                          // handle the response here
                        })
                        .catch(error => {
                          console.error(error);
                          // handle the error here
                        });
                    } catch (error) {
                      console.log("cad")
                      console.error(error);
                      // handle the error here
                    }
                    // cleanup function
                    return () => {
                      // cleanup code here
                    };
                  }, [cart]);
                  
                //#endregion
                  




                const handelInfiniteScroll = async () => {
                  debugger
                    try {
                      if (
                        window.innerHeight + document.documentElement.scrollTop + 1 >=
                        document.documentElement.scrollHeight
                      ) {
                        setCart((prev) => prev + 16);
                      }
                    } catch (error) {}
                  };

                  useEffect(() => {
                    window.addEventListener("scroll", handelInfiniteScroll);
                    return () => window.removeEventListener("scroll", handelInfiniteScroll);
                  }, []);

                  return (
                    <div className="restaurantList">
                      {console.log(restaurant)}
                      {/* if (data != null) */}
                      {
                        
                        restaurant?.map(restaurant_info =>
                          {debugger
                            console.log(restaurant_info)
                            return <Link key={restaurant_info.info.id} to ={"/restaurants/" + restaurant_info.info.id }><RestaurantCard {...restaurant_info} /></Link>
                              
                          })
                      }
                    </div>
                  );
                };

                export default Body;
