import React from 'react'
import './Laundry.css';
// import Sliders from '../Home/Sliders'
import Product from './Product';



function Laundry() {
  return (
    <div className='home'>
        <div className='home_container'>
        <div className="img_name">
                <h1>Laundry</h1>
            </div>
            <div className="home_row">
            
                <Product id={7} price={199.99} image={`/GarmentsImage/laundry/Towel-Cloth-Background-PNG.png`}/>
                <Product id={8} price={199.99} image={`/GarmentsImage/laundry/Blanket-PNG-Image-HD.png`}/>
                <Product id={9} price={199.99} image={`/GarmentsImage/laundry/Blue-Blanket-PNG-File.png`}/>
                <Product id={10} price={199.99} image={`/GarmentsImage/laundry/Jersey-PNG-Picture.png`}/>
               

            </div> 
        </div>
       
    </div>
  )
}

export default Laundry
