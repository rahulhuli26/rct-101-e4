import axios from "axios";
import React,{useState} from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   addItemToCart,
//   removeItemFromCart,
//   updateCartItem,
// } from "../../../store/cart/cart.actions";

const Product = () => {
  const [product, setProduct] = useState([]);
    React.useEffect(() => {
    showData()
  }, [])

  const showData = () => {
    axios.get(` http://localhost:8080/products`).then((res) => {
      setProduct(res.data);
     
      console.log(res.data);
    })
  }


   const id = null;
  return (
    
    <div>
       <div>
         {product.map((product) => 
          <div  data-cy={`product-${id}`}>
          <h3 data-cy="product-name">{product.name}</h3>
          <h6 data-cy="product-description">{product.description}</h6>
          <button data-cy="product-add-item-to-cart-button"></button>
          <div>
            <button data-cy="product-increment-cart-item-count-button"></button>
            <span data-cy="product-count"></span>
            <button data-cy="product-decrement-cart-item-count-button"></button>
            <button data-cy="product-remove-cart-item-button"></button>
          </div>
        </div>
         )}
      </div>
   </div>
   );
}


export default Product;
