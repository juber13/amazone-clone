import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';

const BottomHeader = () => {
  return (
    <div className='bottom-header-container'>
        <ul className='full-flex gap left'>
            <li className='full-flex'><MenuIcon/>All</li>
            <li>Amazone mini</li>
            <li>Sell</li>
            <li>Best Seller</li>
            <li>Mobiles</li>
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Electronics</li>
            <li>Prime</li>
            <li>New Release</li>
            <li>Home & kitchen</li>
            <li>Amazone Pay</li>
        </ul>
    </div>
  )
}

export default BottomHeader