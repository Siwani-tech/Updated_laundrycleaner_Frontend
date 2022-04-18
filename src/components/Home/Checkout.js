import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket,user }, dispatch] = useStateValue();
    return (

        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkout_ad' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WN5jN0EBYdFpDzDx3mhCA8d4r4McShSfrg&usqp=CAU" alt="" />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout_title'>Your Laundry Basket</h2>


                    {/* basket item */}
                    {basket.map(item => (
                        <CheckoutProduct
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                
                <Subtotal />

            </div>

        </div>
    )
}

export default Checkout
