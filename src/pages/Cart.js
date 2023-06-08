import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../reduxStore/features/counters/counterSlice";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


import "./cart.css";
import { useEffect } from "react";
const Cart = () => {
  // const [productQuentity , setProductQuentity] = useState(1);
  const products = useSelector((state) => state.cart);
  const [data, setData] = useState(products);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(removeToCart(id));
  };

  return (
    <div className="cart-wrapper">
      <div className="cart__container">
        {products.length <= 0 ? (
          <div className="empty-cart-content">
           <h4><ShoppingCartOutlinedIcon/></h4>
          <h3>Empty Cart</h3>
          </div>
        ) : (
          products.map((product) => (
            <div className="cart__content" key={product.id}>
              <h4 className="cart__title">{product.title}</h4>
              <img
                src={product.image}
                className="cart__image"
                alt={product.title}
              />
              <h5>{product.price}</h5>
              <button
                className="remove__cartItem_btn"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {products.length > 0 ? 
      <div className="amount-container">
        <table>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>price</th>
            {/* <th>Qty</th> */}
          </tr>
          {/* <tr> */}
          {products.map((product, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{product.title.slice(0, 35) + "..."}</td>
              <td>{product.price}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>GST 18%</td>
            <td>
              {" "}
              {products
                .map((pro) => pro.price)
                .reduce((total, acc) => total + acc, 0)}
            </td>
            {/* <td>{new Date().toLocaleDateString()}</td> */}
          </tr>
          {/* </tr> */}
        </table>
         <button className="continue-shopping-btn">Continue Shopping</button>
      </div>
     : ""}
    </div>
  );
};

export default Cart;
