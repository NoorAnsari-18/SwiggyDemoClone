import './App.css';
import Header from './Component/Header/Header';
import Body from './Component/Body/body';
import {Outlet, createBrowserRouter} from "react-router-dom"; 
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Error from './Component/Error/Error';
import Restaurants from './Component/RestaurantMenu/RestaurantMenu';
// Creating Routing COnfg


// useRouteError //errorElement :



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       
      </header> */}
      <Header/>
      <Outlet/>
    </div>
  );
}


// The CreateBrowserRouter is use to create a Route whereas RouterProvider is use to Provide the Configuration to the Root.render i.e to the applicaiton.
export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement :<Error/>,
  children : [
    {
      path:"/",
      element:<Body/>,
      errorElement :<Error/>
    },
    {
      path:"/about",
      element:<About/>
    }
    ,
    {
      path:"/contact",
      element:<Contact/>
    }
    ,
    {
      path:"/restaurants/:restId",
      element:<Restaurants/>
    }
  ]
},
])

// The Configuration takes a Array of List of JsonObject each Object containing a path to which a Component is been rendered.



export default App;
