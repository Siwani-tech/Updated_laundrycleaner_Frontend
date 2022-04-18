import React from 'react'
import './Alterations.css';
// import Sliders from '../Home/Sliders'
import Product from './Product';
function Alterations() {
  return (
    <div className='home'>
        <div className='home_container'>
        <div className="img_name">
                <h1>Alterations</h1>
            </div>
            <div className="home_row">
           
                <Product id={21} price={10.99} image={`/GarmentsImage/allter/Jeans-PNG-Pic.png`}/>
                <Product id={22} price={9.99} image={`/GarmentsImage/allter/Jeans-Transparent.png`}/>
                <Product id={23} price={10.99} image={`/GarmentsImage/allter/Short-Skirt-PNG.png`}/>
                <Product  id={24} price={100.99} image={`/GarmentsImage/Garment-PNG-Image-File.png`}/>
                
            </div> 
        </div>
       
    </div>
  )
}

export default Alterations
