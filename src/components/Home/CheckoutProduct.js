

import React from 'react'
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';
function CheckoutProduct({image,price,id}) {
    const [{ basket }, dispatch] = useStateValue();

    const remove=()=>{
        dispatch({
            type:'REMOVE_ITEM_FROM_BASKET',
            id:id,
        })
    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutproductImg' src={image} alt="" />

        <div className='checkoutProduct_info'>
            <p className='checkoutProductPrice' >
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <button onClick={remove}>Remove from Basket</button>

        </div>
        
      
    </div>
  )
}

export default CheckoutProduct
