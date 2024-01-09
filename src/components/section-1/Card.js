import React from 'react'
import './card.css'
import Box from './Box'
import Deals from '../../Deals'
import { CartState } from '../../Context'

const Card = () => {
  const {state , loding} = CartState();
  const {productState : {searchQuery}} = CartState();
   
  const transFromProducts = () => {
    let items = state.products;
    const newItem = items.filter(item => item.title.toLowerCase().includes(searchQuery));
    // console.log(newItem);
    return newItem;
  }
  return (
   <div className="card-container" >  
     {loding ? <div className='loding'></div> : transFromProducts().map((item , index) => <Box item={item} key={index}/>)}
     <Deals/>
   </div>
  )
}

export default Card