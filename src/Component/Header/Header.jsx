import React, { useEffect } from 'react';
import "./Header.css"
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
    <div className="header">
      <div className="logo">
        {/* Replace with your logo image or component */}
        <img src="asset/Logo/LogoImage.webp" alt="Company Logo" />
      </div>
      <div className="header-icons">
      <div className="search-bar">
        {/* Simple search input, you might have a more complex component */}
        <input type="text" placeholder="Search..." value=""/>
        <SearchIcon />
      </div>
        <div className="offers" style={{}}>
        <Link to="/">
            {/* <a href="/about"  className="nav-item"> */}
            <span >Home<OfferIcon /></span>
          {/* </a> */}
          </Link>
        </div>
        <div className="help">
        <Link to="/contact">
        {/* <a href="/offers"> */}
            <span style={{color:'black'}}>ContactUs<HelpIcon /></span>
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
        <a className="button" href="/signin">Sign In<UserIcon /></a>
        <a className="button" href="/cart">Cart <CartIcon /></a>
      </div>
      </div>
      
    </div>
  );
};

export default Header;
