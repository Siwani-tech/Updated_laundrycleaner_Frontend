import React from 'react'
import './Pressed.css';
// import Sliders from '../Home/Sliders'
import Product from './Product';

function Pressed() {
  return (
    <div className='home'>
        <div className='home_container'>
        <div className="img_name">
                <h1>Pressed</h1>
            </div>
            <div className="home_row">
            
                <Product id={11} price={19.99} image={`/GarmentsImage/iron/Blouse-PNG-Image-HD.png`}/>
                <Product  id={12} price={9.99} image={`/GarmentsImage/iron/Blouse-PNG.png`}/>
                <Product id={13} price={13.99} image={`/GarmentsImage/iron/Skirt.png`}/>
                <Product id={14} price={17.99} image={`/GarmentsImage/iron/Sweater-PNG-File-Download-Free.png`}/>
                <Product idd={15} price={49.99} image={`/GarmentsImage/iron/Sweater-PNG-Images.png`}/>
            </div>
        </div>
       
    </div>
  )
}

export default Pressed
