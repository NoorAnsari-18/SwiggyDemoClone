                import React,{useState,useEffect} from "react"
                import RestaurantCard from "./RestaurantCard/RestaurantCard";
                import style from "./body.css"
                // import { restaurantList } from "../../constants";
                // Would need to make a API  call in here .
                import { Link } from "react-router-dom";
                import Carousel from "../Carousel/Carousel";
                import { WithPromotedLabel } from "./RestaurantCard/RestaurantCardPromoted";
               import About from "../About/About";
                const Body = () => {
                  // {console.log("the Body  is getting Called for the first time")}
                  const [restaurant, setRestaurant] = useState([]);
                  const [allRestaurant, setAllRestaurant] = useState("");
                  const [cart, setCart] = useState(0);
                  let rest = [];
                  const [noOfRestaurant, setNoOfRestaurant] = useState(0);
                  const [carouselImage ,setCarouselImage] = useState([]);
                  // const images = [
                  //   "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
                  //   "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  //   "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  //   "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  //   "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  //   "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  // ];

                  // These region is been used to make the first api call 
                  //#region
                  useEffect(() => {
                    try {
                      
                      // {console.log("the Dom is SetUp and userEffect is gettting initialized.")}
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
                    // {console.log("The User Effect Has called teh Call APi Handler.")}
                    try {
                      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
                      const result = await response.json();
                      console.log(result.data.cards[1].card.card);
                      setRestaurant(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                      setCarouselImage(result.data.cards[0].card.card.imageGridCards.info);
                    } catch (error) {
                      console.error('Error fetching data:', error);
                    }
                  }
                //#endregion
                  



                //#region  to call the api when were are Scrolling at the bottom at of the page.
                  // async function callApiHandler2() {
                  //   {console.log("the Call APi Handler is getting Called after the DOM us getting initalized for the First time .")}
                  //   console.log(`cart is ${cart}`)
                  //   let response2 = await fetch(
                  //     `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&offset=${cart}&sortBy=RELEVANCE&pageType=FOOD_HOMEPAGE`
                  //   );
                  //   let dat = await response2.json();
                  //   var daatrespinse2 = dat.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
                  //   console.log(`the api response for Scrolling is ${daatrespinse2}`)
                  //   rest?.push(
                  //     dat.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
                  //   );

                  //   // setRestaurant((prev) => [...prev, ...rest]);
                  //   // setAllRestaurant((prev) => [...prev, ...rest]);

                  // }

                  async function callApiHandler2() {
                    
                    try {
                      // Logging statements
                      // console.log("The Call APi Handler is getting called after the DOM is initialized for the first time.");
                      // console.log(`Cart is ${cart}`);
                  
                      // Prepare the payload for the POST request
                      const payload = {
                        lat: "18.9277413",
                        lng: "72.8311382",
                        nextOffset: "CJhlELQ4KIDQ4f292Y+8NzCnEzgC",
                        widgetOffset: {
                          "NewListingView_category_bar_chicletranking_TwoRows": "",
                          "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
                          "Restaurant_Group_WebView_SEO_PB_Theme": "",
                          "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "9",
                          "inlineFacetFilter": "",
                          "restaurantCountWidget": ""
                        },
                        filters: {},
                        seoParams: {
                          seoUrl: "https://www.swiggy.com/",
                          pageType: "FOOD_HOMEPAGE",
                          apiName: "FoodHomePage"
                        },
                        page_type: "DESKTOP_WEB_LISTING",
                        _csrf: "tfhL6dm2y37d-0nW7WyhAMFSEmPdsmKP28NNBqdc"
                      };
                  
                      // Making the POST request with the fetch API
                      const response2 = await fetch(
                        "https://corsproxy-la3g.onrender.com/full/?url=https://www.swiggy.com/dapi/restaurants/list/update", // POST endpoint
                        {
                          method: 'POST', // Specify POST method
                          headers: {
                            'Content-Type': 'application/json', // Specify the content type
                          },
                          body: JSON.stringify(payload), // Send the payload as JSON
                        }
                      );
                      // Handling the response
                      const dat = await response2.json();
                      console.log(dat);
                      const daatrespinse2 = dat.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
                      console.log(`The API response for scrolling is: `, daatrespinse2);
                  
                      // Assuming 'rest' is an array, you push the new response data
                      rest?.push(daatrespinse2);
                  
                      // Uncomment these lines if you want to update state with the response data
                      // setRestaurant((prev) => [...prev, ...rest]);
                      // setAllRestaurant((prev) => [...prev, ...rest]);
                  
                    } catch (error) {
                      console.error('Error making the POST request:', error);
                    }
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
                      // console.log("cad")
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
                 const RestaurantOpened = WithPromotedLabel(RestaurantCard);
                  return (
                    <>
                    {/* The React Corousele Would be used in here  */}
                    <Carousel images={carouselImage} />
                    <div className="restaurantList">
                      {/* {console.log(restaurant)} */}
                      {/* if (data != null) */}
                      {
                        
                        restaurant?.map(restaurant_info =>
                          {
                            console.log(restaurant_info)
                            return <Link key={restaurant_info.info.id} to ={"/restaurants/" + restaurant_info.info.id }>{restaurant_info.info.isOpen ?<RestaurantOpened  {...restaurant_info} /> : <RestaurantCard {...restaurant_info} />}</Link>
                              
                          })
                      }
                    </div>
                    </>
                  );
                };

                export default Body;
