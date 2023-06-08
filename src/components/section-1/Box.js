import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../reduxStore/features/counters/counterSlice'
// import { showDetail } from '../../reduxStore/features/counters/productSlice';

const Box = ({item}) =>{
   const disPatch = useDispatch();
   const navigate = useNavigate();
   // const [products , setProducts] = useState([]);
   
   const addItemToCart = (product) => {
      disPatch(addToCart(product));

   }

   const showDetails = (id) => {
      navigate(`/product/${id}`);
   }

    return(
       <div className='card'  data-category={item.category} key={item.id}>
          <h3>{item.title}</h3>
           <img src={item.image} alt="" data-index={item.type}/>
          <p className='seeAll-text'>Price {item.price}</p>
          <div className='btn-container'>
           <button className='btn add__card__button' onClick={() => addItemToCart(item)} data-index={item.id}>Add To Card</button>
           <button className='btn checkout__card__button' onClick={() => showDetails(item.id)}>Chekout</button>
          </div>
       </div>
    )
 }
 
export default Box