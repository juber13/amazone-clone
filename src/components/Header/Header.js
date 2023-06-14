import React from "react";
// import {Edit} from '@material-ui/icons/Edit';
import "./Header.css";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartState } from "../../Context";

// from 'react-icons/fa'anp
const Header = () => {
  const {state} = CartState();
  // const [toggle , setToggle] = useState(false);

  // function filterOutproducts(product){
  //   let sortedProducts = product;
  //   if (searchQuery) sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery));
  //    return sortedProducts;
  // }

  return (
    <>
    <div className="header">
      <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header__logo" /></Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" placeholder="Search..."/>
        <SearchIcon className="header__searcIcon search-btn"/>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">Hello Guest</span>
          <span className="header__optionTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Return </span>
          <span className="header__optionTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
            <Link to="/cart"><ShoppingCartOutlinedIcon /></Link>
          <span className="header__optionTwo header__basket">{state.cart.length}</span>
        </div>
      </div>
    </div>
    {/* <div className={toggle ? "search-item-container active" :"search-item-container"}>
     <ul>
      {state.products.map((item) => <Link><li>{item.title}</li></Link>)}
     </ul>
    </div> */}
     
    {/* <BottomHeader/> */}
    </>
  );
};

export default Header;
