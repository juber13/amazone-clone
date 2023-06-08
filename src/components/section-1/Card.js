import React, {useState, useEffect } from 'react'
import './card.css'
// import data from '../../../src/StoreData'
import Box from './Box'
import Deals from '../../Deals'

const Card = () => {
  const [data , setData] = useState([]);
  const [loding , setLoading] = useState(false);

      
  useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setData(data);
        setLoading(false);

      }catch(err){
        console.log(err);
      }
    }
  
 
    fetchData();
  },[])

  
  return (
   <div className="card-container" >  
     {loding ? <div className='loding'></div> : data.map((item , index) => <Box item={item} key={index}/>)}
     <Deals/>
   </div>
  )
}

export default Card