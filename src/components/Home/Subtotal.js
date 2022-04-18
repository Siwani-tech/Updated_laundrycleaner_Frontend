import React from 'react'
import './Subtotal.css';
import Currencyformat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import { getBasketTotal } from "./reducer";
import {useNavigate} from 'react-router';
function Subtotal({value}) {
  const navigate=useNavigate();

    const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
            <p>
              
              Subtotal ({basket.length} items): <strong>{getBasketTotal(basket)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>

        <Currencyformat 
         

        // renderText={(value)=>{
        //     <>
        //      <p>
        //          Subtotal (0 items):
        //          <strong>0</strong>
        //      </p>
        //      <small className='subtotal_gift'>
        //          <input type="checkbox" />This order containts gift
        //      </small>
        //     </>
        // }}
        
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        ></Currencyformat>

      <button onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
      
    </div>
  )
}

export default Subtotal
