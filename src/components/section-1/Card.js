import React from 'react'
import './card.css'
import data from '../../../src/StoreData'
import Box from './Box'
import Deals from '../../Deals'

const Card = () => {
  return (
   <div className="card-container">  
     {data.map(item => <Box item={item}/>)}
     <Deals/>
   </div>
  )
}

export default Card