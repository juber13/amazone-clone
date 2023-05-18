import React from "react";
// import {Edit} from '@material-ui/icons/Edit';
import "./Header.css";
import Logo from "./Amazon-Logo-Font-1-scaled.webp";
import IndianFlag from "./download.png";
// import {SearchIcon } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import BottomHeader from "./BottomHeader";
import { Link } from "react-router-dom";

// from 'react-icons/fa'anp
const Header = () => {
  return (
    <div className="header">
      <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header__logo" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
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
            <ShoppingCartOutlinedIcon />
          <span className="header__optionTwo header__basket">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
