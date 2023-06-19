import { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./cart.css";
import { CartState } from "../Context";
const Cart = () => {
  const [total , setAmount] = useState();
  const {state , dispatch} = CartState();


   useEffect(() => {
    setAmount(state.cart.reduce((acc , curr) => acc + Number(curr.price) * curr.qty , 0))
   },[state.cart])

  return (
    <div className="cart-wrapper">
      <div className="cart__container">
        {state.cart.length <= 0 ? (
          <div className="empty-cart-content">
           <h4><ShoppingCartOutlinedIcon/></h4>
          <h3>Empty Cart</h3>
          </div>
        ) : (
          state.cart.map((product) => (
            <div className="cart__content" key={product.id}>
              <h4 className="cart__title">{product.title}</h4>
              <img
                src={product.image}
                className="cart__image"
                alt={product.title}
              />
              <h5>{product.price}</h5>
              <select name="" id="" onChange={(e) => dispatch({type : "CHANGE_QTY" , payload : {id : product.id , qty : e.target.value}})}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <button
                className="remove__cartItem_btn"
                onClick={() =>dispatch({type: "REMOVE_TO_CART" , payload : product})}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {state.cart.length > 0 ? 
      <div className="amount-container">
        <table>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>price</th>
            {/* <th>Qty</th> */}
          </tr>
          {/* <tr> */}
          {state.cart.map((product, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>GST 18%</td>
            <td>{Math.floor(total)}</td>
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
