

// import React, { useState } from 'react'
// import './Payment.css';
// // import { useStateValue } from './StateProvider';
// // import { Link } from 'react-router-dom';
// // import CheckoutProduct from './CheckoutProduct';
// // import {cardElement,useStripe,useElements} from '@stripe/stripe-js';
// // import icon from '../../images/service/';
// import { getBasketTotal } from "./reducer";
// import { useStateValue } from './StateProvider';

// function loadScript(src) {
// 	return new Promise((resolve) => {
// 		const script = document.createElement('script')
// 		script.src = src
// 		script.onload = () => {
// 			resolve(true)
// 		}
// 		script.onerror = () => {
// 			resolve(false)
// 		}
// 		document.body.appendChild(script)
// 	})
// }

// const __DEV__ = document.domain === 'localhost'


// function Payment() {

// 	const [{ basket }, dispatch] = useStateValue();
//     //rzp_test_Pu22U0p6ZcdFdE --key id
//     // A81W6NHgswJe3PzD8GPj8S9A--seceted key
//     // const [{ basket,user }, dispatch] = useStateValue();
   
//     const [name, setName] = useState('Mehul')
// 	const total=getBasketTotal(basket);
// 	async function displayRazorpay() {
// 		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

// 		if (!res) {
// 			alert('Razorpay SDK failed to load. Are you online?')
// 			return
// 		}

// 		const data1 = await fetch('http://localhost:3007/razorpay', { method: 'POST' }).then((t) =>
// 			t.json()
// 		)

// 		console.log(data1)

// 		const options = {
// 			key: __DEV__ ? 'rzp_test_Pu22U0p6ZcdFdE' : 'PRODUCTION_KEY',
// 			currency: data1.currency,
// 			// currency:"INR",
// 			// amount:  data1.amount.toString(),
// 			amount:total,
// 			order_id:data1.id,
// 			name: 'Donation',
// 			description: 'Thank you for nothing. Please give us some money',
// 			image: 'http://localhost:3007/logo.svg',
// 			handler: function (response) {
// 				alert(response.razorpay_payment_id)
// 				alert(response.razorpay_order_id)
// 				alert(response.razorpay_signature)
// 			},
// 			prefill: {
// 				name,
// 				email: 'sdfdsjfh2@ndsfdf.com',
// 				phone_number: '9899999999'
// 			}
// 		}
// 		const paymentObject = new window.Razorpay(options)
// 		paymentObject.open()
// 	}
//     return (
//         <div className="payment">
// 			<header className="App-header">
// 				<img src="https://media.istockphoto.com/vectors/washing-and-drying-clothes-design-laundry-room-with-a-washing-machine-vector-id1286932939?k=20&m=1286932939&s=612x612&w=0&h=7V-DLj4UtTUpWA2FP0ks_I8AkVezof1pOlwUCM7v2fg=" className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					onClick={displayRazorpay}
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Donate $5
// 				</a>
// 			</header>
// 		</div>
//         // <div className='payment'>
//         //     <div className="payment__container">
//         //         <h3>
//         //             Checkout{<Link to='/checkout'>{basket?.length} items</Link>}
//         //         </h3>
//         //         <div className="payment__section">
//         //             <div className="payment__title">
//         //                 <h3>Dilivery Address</h3>
//         //             </div>
//         //             <div className="payment__address">
//         //                 <p>{user?.email}</p>
//         //                 <p>123 line</p>
//         //                 <p>Banglore</p>
//         //             </div>


//         //         </div>

//         //         <div className="payment__section">
//         //             <div className="payment__title">
//         //                 <h3>Review Item and delivery</h3>

//         //             </div>
//         //             <div className="payment__items">
//         //                 {basket.map(item=>{
//         //                     <CheckoutProduct 
//         //                     id={item.id}
//         //                     image={item.image}
//         //                     price={item.price}
//         //                     />
//         //                 })}
//         //             </div>

//         //         </div>

//         //         <div className="payment__section">
//         //             <div className="payment__title">
//         //                 <h3>Payment Method</h3>
//         //             </div>
//         //             <div className="payment__details">

//         //             </div>

//         //         </div>
//         //     </div>

//         // </div>
//     )
// }

// export default Payment
