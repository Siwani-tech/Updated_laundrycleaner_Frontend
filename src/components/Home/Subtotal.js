import React from 'react'
import './Subtotal.css';
import Currencyformat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import { getBasketTotal } from "./reducer";
import {useNavigate} from 'react-router';
function Subtotal({value}) {
  
  const loadScript=(src)=>{
    return new Promise((resolve)=>{
      const script=document.createElement('script')
      script.src=src
      script.onload=()=>{
        resolve(true)
      }
      script.onerror=()=>{
        resolve(false)
      }
      document.body.appendChild(script);
    })
  }

  const displayRazorpay= async(amount)=>{
    const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}


    const options = {
			key:'rzp_test_Pu22U0p6ZcdFdE' ,
			currency: 'INR',
			// currency:"INR",
			// amount:  data1.amount.toString(),
			amount: amount * 100,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			image: 'http://localhost:3007/logo.svg',
      handler: function (response) {
				alert(response.razorpay_payment_id)
				alert("payment successfully")
				
			},
      prefill: {
				name:"shiv",
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
     
  }

  const paymentObject = new window.Razorpay(options)
		paymentObject.open()
}
  const navigate=useNavigate();

    const [{ basket }, dispatch] = useStateValue();
    const totalValue=getBasketTotal(basket);

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

      
      
      <button onClick={()=>displayRazorpay(getBasketTotal(basket))}>Buy now</button>

      
    </div>
  )
}

export default Subtotal
