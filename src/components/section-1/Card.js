import React from 'react'
import './card.css'
// import data from '../../../src/StoreData'
import Box from './Box'
import Deals from '../../Deals'
import { CartState } from '../../Context'

const Card = () => {
  const {state , loding} = CartState();
  return (
   <div className="card-container" >  
     {loding ? <div className='loding'></div> : state.products.map((item , index) => <Box item={item} key={index}/>)}
     <Deals/>
   </div>
  )
}

export default Card