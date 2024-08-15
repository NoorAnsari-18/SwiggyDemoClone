// Import your PNG files
// import searchIcon from '';
// import cartIcon from '/';
// import userIcon from '';
// import helpIcon from '/';
// import offerIcon from '/';

// Create individual components for each icon
const SearchIcon = () => (
  <img src={"asset/icons/search.png"} className="icon search-icon" alt="Search" />
);

const CartIcon = () => (
  <img src={"asset/icons/cart.png"} className="icon cart-icon" alt="Cart" />
);

const UserIcon = () => (
  <img src={"asset/icons/SingIn.png"} className="icon user-icon" alt="User" />
);

const HelpIcon = () => (
  <img src={"asset/icons/help.png"} className="icon help-icon" alt="Help" />
);

const OfferIcon = () => (
  <img src={"asset/icons/offer.png"} className="icon offer-icon" alt="Offer" />
);

// Export your icon components
export { SearchIcon, CartIcon, UserIcon, HelpIcon, OfferIcon };
