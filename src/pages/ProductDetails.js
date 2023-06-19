import { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
const ProductDetails = () => {
  const[data , setData] = useState({});
  const {id} = useParams();

  const fetchProduct = async() => {
    try{
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const jsonData = await res.json();
      setData(jsonData);
    }catch(err){

    }
  }

  useEffect(() => {
     fetchProduct();
  },)

  console.log(data);


  return (
    <div className="wrapper">
    <div className='product-details-container'  data-category={data.category} key={data.id}>
           <div className="product-img">
             <img src={data.image} alt="" data-index={data.type}/>
           </div>
          <div className="product-info">
           <h3>{data.title}</h3>
           <p className='price'>Price {data.price}</p>
           <p className='product-description'>{data.description}</p>
           <button className='btn add__card__button'>Buy Now</button>
          </div>
       </div>
    </div>
  )
}

export default ProductDetails