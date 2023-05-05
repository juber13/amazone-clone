import React from "react";
import './products.css';
const Products = ({ products }) => {
  //  console.log(items[1].name)
  // console.log(productsitems[0].item.name)
  console.log(products[0].items[0].name);
  return (
    <div className="products-container">
      {products[0].items.map((item) => (
        <div className="product">
            <img src={item.image} style={{width:"100px"}} alt={item.name}/>
            <h5>{item.name}</h5>
            <span>{item.price * 7}</span>
            <span className="add-to-cart">Add To Cart</span>
        </div>
      ))}
    </div>
  );
};

export default Products;
