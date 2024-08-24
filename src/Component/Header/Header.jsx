import React, { useEffect } from 'react';
// import "./Header.css"
// Assume you have these icons as SVG or components
import { SearchIcon, CartIcon, UserIcon, HelpIcon, OfferIcon } from './Icon';
import { Link }  from 'react-router-dom';
// Use State hook is used to create a local state Variable inside your Funcitonal Component hence a State Variable should never be created outside the Funcitonal Component.
// JS is A Single threaded Synchronous Language.
// Never Create a UseSatet Hook inside a Conditon Loop as well as while lopp.
const Header = () => {
    // const logstyle = {width:'50px' };
// Anchor tag Reloads the whole page whereas the Link Component Refresh the componet /replaces the Component being asked to replace

    // useEffect ( () => {console.log("Use Effect is being Called")},[])   // If no dependcency is present then the useEffect is called on Every re-render.

// React is a  Single Page Applicaiton wherein only the Component get's replaced via the Client Side Routing.
    // There are two types of Routing 
    // 1 CLient Side Routing.
    //2 Server Side Routing .


    // Q)) Dynamic Routing


  return (
    <div className="flex items-center justify-between border-b-2 border-solid border-black px-7 py-5 z-10">
     <div>
        {/* Replace with your logo image or component */}
       <img src="asset/Logo/LogoImage.webp" alt="Company Logo"  className="h-20"/>
      </div>
      <div className="flex justify-around  space-x-6">
      {/* <div className="search-bar">
        <input type="text" placeholder="Search..." value=""/>
        <SearchIcon />
      </div> */}
        <div >
        <Link to="/">
            {/* <a href="/about"  className="nav-item"> */}
            <span className='text-black'>Home</span>
          {/* </a> */}
          </Link>
        </div>
        <div >
        <Link to="/contact">
        {/* <a href="/offers"> */}
            <span className='text-black'>ContactUs</span>
          {/* </a> */}
          </Link>
        </div>
        {/* <div className="icon">
        <a href="/SignIN">
            <span style={{color:'black'}}>SignIN<UserIcon /></span>
          </a>
          
        </div> */}
        {/* <div className="icon">
          <CartIcon />
        </div> */}
        <div>
        {/* Buttons for sign in and cart could be actual 'button' elements or links styled as buttons */}
        <a className="button" href="/signin">Sign In</a>
        
      </div>
      <div>
        {/* Buttons for sign in and cart could be actual 'button' elements or links styled as buttons */}
        <a className="button" href="/cart">Cart</a>
        
      </div>
      </div>
      
    </div>
  );
};

export default Header;
