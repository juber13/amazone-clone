import React from 'react'
// import {Edit} from '@material-ui/icons/Edit';
import './Header.css'
import Logo from './Amazon-Logo-Font-1-scaled.webp'
import IndianFlag from './download.png'
// import {SearchIcon } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import BottomHeader from './BottomHeader';
import { Link } from 'react-router-dom';


// from 'react-icons/fa'anp
const Header = () => {
  return (
   <>
    <header className='full-flex space-between'>
       <div className='logo-container full-flex'>
         <Link to=""><img src={Logo} alt="amazone-img"  style={{position : "relative"}}/></Link>
         <small style={{position : "absolute" ,  top : "1.4rem" , left : "7.5rem"}}>.in</small>
       </div>

       <div className='location flex-column'>
        <small style={{marginLeft: "1.5rem"}}>Hello</small>
        <span className='font-weight full-flex'><LocationOnOutlinedIcon/>Select your Address</span>
       </div>

       <div className='input-container full-flex'>
        <button className='full-flex dropdownArrow'>All<ArrowDropDownIcon/></button>
         <input type="text" placeholder='Search Amazone.in'/>
         <button className='search-btn full-flex'><SearchIcon className='search-icon' style={{fontSize : "1.5rem"}}/></button>
       </div>

       <div className='language full-flex'>
         <small><img src={IndianFlag} alt="flag" className='indian-flag'/></small>
         <span className='font-weight full-flex'>EN <ArrowDropDownIcon style={{position:"relative" , top :"4px" , left:"-4px",  color : "#928383"}}/></span>
       </div>
       
       <div className='sing-in flex-column'>
         <small>Hello, Sign in</small>
         <span className='font-weight full-flex'>Account & Lists <ArrowDropDownIcon/></span>
       </div>
       
       <div className='order-and-returns flex-column'>
        <small>Returns</small>
        <span className='font-weight'>& Orders</span>
       </div>
       
       <div className='cart full-flex'>
         <ShoppingCartOutlinedIcon style={{fontSize:"2.5rem"}}/>
          <span>Cart</span>
       </div>
    </header>
    <BottomHeader/>
    </>
  )
}

export default Header