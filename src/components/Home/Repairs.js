import React from 'react'
import './Repairs.css';
// import Sliders from '../Home/Sliders'
import Product from './Product';
function Repairs() {
  return (
    <div className='home'>
    <div className='home_container'>
    <div className="img_name">
            <h1>Repairs</h1>
        </div>
        <div className="home_row">
            
                <Product  id={16} price={5.99} image={`/GarmentsImage/repair/1857ddad0816fde.jpg`}/>
                <Product id={17} price={10.99} image={`/GarmentsImage/repair/pngtree-men-s-black-glossy-shoes-image_1244455.jpg`}/>
                <Product id={18} price={5.99} image={`/GarmentsImage/repair/pngtree-shoes-png-image_2427000.jpg`}/>
                <Product id={19} price={16.99} image={`/GarmentsImage/repair/pngtree-skateboard-shoes-png-image_2953200.jpg`}/>
                <Product id={20} price={18.99} image={`/GarmentsImage/repair/pngtree-summer-red-high-heels-image_1454881.jpg`}/>
            </div>
    </div>
   
</div>
  )
}

export default Repairs
