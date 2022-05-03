import React from 'react'
import './Product.css';
import {useStateValue} from './StateProvider';
function Product({image,price}) {

  const[{basket},dispatch]=useStateValue();


  const addToBasket=()=>{

    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        image:image,
        price: price
      }
    })

  }
  return (
    <>
    {/* <h1>Shirts</h1> */}
    <div className='product'>
      
      <div className="product_info">
      <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="" />

      <button  onClick={addToBasket}>Add to Basket</button>
    </div>
    
    </>
    
  )
}

export default Product
