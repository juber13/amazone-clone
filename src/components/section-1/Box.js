import { useNavigate } from "react-router-dom";
import { CartState } from "../../Context";

const Box = ({ item }) => {
  const { state, dispatch } = CartState();
  const navigate = useNavigate();

  // navigate to single product
  const showDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card" data-category={item.category} key={item.id}>
      <h3>{item.title}</h3>
      <img src={item.image} alt="" data-index={item.type} />
      <p className="seeAll-text">Price {item.price}</p>
      <div className="btn-container">
        {state.cart.some((pro) => pro.id === item.id) ? (
          <button className="btn add__card__button" onClick={() => dispatch({type : "REMOVE_TO_CART" , payload : item})}>Remove To Cart</button>
        ) : (
          <button
            className="btn add__card__button"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
          >
            Add To Card
          </button>
        )}

        <button
          className="btn checkout__card__button"
          onClick={() => showDetails(item.id)}
        >
          Chekout
        </button>
      </div>
    </div>
  );
};

export default Box;
