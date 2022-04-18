import React from 'react'
import './Middle.css';
// import Sliders from '../Home/Sliders'
import Product from './Product';
function Middle() {
  return (
    <div className="home">
        <div className="home_container">
            {/* <img className='home_img' src="https://cdn.cnn.com/cnnnext/dam/assets/210915133905-how-to-do-laundry-lead.jpg" style={{"height": '15%',"width":'100%',"zIndex":-1,}} alt="" /> */}
            <div className="img_name">
                <h1>DRY CLEANING</h1>
            </div>
                
            <div className="home_row">
                
                <Product id={1} price={11.96} image={`/GarmentsImage/Fashion-Garment-PNG-Image-HD.png`}/>
                <Product id={2} price={239.0} image={`/GarmentsImage/Fashion-Garment-PNG-Cutout.png`}/>
                <Product id={3} price={199.99} image={`/GarmentsImage/Pant-PNG-Pic.png`}/>
                <Product id={4} price={199.99} image={`/GarmentsImage/Blouse-PNG-Free-Download-1.png`}/>
                <Product id={5} price={199.99} image={`/GarmentsImage/Fashion-Garment-PNG-Images-HD.png`}/>
                {/* <Product id={6} price={199.99} image={`/GarmentsImage/Fashion-Garment-PNG-Images.png`}/> */}
               
            </div>
            {/* <div className="img_name">
                <h1>LAUNDRY</h1>
            </div>
            <div className="home_row">
            <Product/>
                <Product id={7} price={199.99} image={`/GarmentsImage/laundry/Towel-Cloth-Background-PNG.png`}/>
                <Product id={8} price={199.99} image={`/GarmentsImage/laundry/Blanket-PNG-Image-HD.png`}/>
                <Product id={9} price={199.99} image={`/GarmentsImage/laundry/Blue-Blanket-PNG-File.png`}/>
                <Product id={10} price={199.99} image={`/GarmentsImage/laundry/Jersey-PNG-Picture.png`}/>
                <Product/>

            </div>
            <div className="img_name">
                <h1>PRESSED</h1>
            </div>
            <div className="home_row">
            <Product/>
                <Product id={11} price={19.99} image={`/GarmentsImage/iron/Blouse-PNG-Image-HD.png`}/>
                <Product  id={12} price={9.99} image={`/GarmentsImage/iron/Blouse-PNG.png`}/>
                <Product id={13} price={13.99} image={`/GarmentsImage/iron/Skirt.png`}/>
                <Product id={14} price={17.99} image={`/GarmentsImage/iron/Sweater-PNG-File-Download-Free.png`}/>
                <Product idd={15} price={49.99} image={`/GarmentsImage/iron/Sweater-PNG-Images.png`}/>
            </div>
            <div className="img_name">
                <h1>REPAIRS</h1>
            </div>
            <div className="home_row">
            <Product/>
                <Product  id={16} price={5.99} image={`/GarmentsImage/repair/1857ddad0816fde.jpg`}/>
                <Product id={17} price={10.99} image={`/GarmentsImage/repair/pngtree-men-s-black-glossy-shoes-image_1244455.jpg`}/>
                <Product id={18} price={5.99} image={`/GarmentsImage/repair/pngtree-shoes-png-image_2427000.jpg`}/>
                <Product id={19} price={16.99} image={`/GarmentsImage/repair/pngtree-skateboard-shoes-png-image_2953200.jpg`}/>
                <Product id={20} price={18.99} image={`/GarmentsImage/repair/pngtree-summer-red-high-heels-image_1454881.jpg`}/>
            </div>
            <div className="img_name">
                <h1>ALTERATIONS</h1>
            </div>
            <div className="home_row">
            <Product/>
                <Product id={21} price={10.99} image={`/GarmentsImage/allter/Jeans-PNG-Pic.png`}/>
                <Product id={22} price={9.99} image={`/GarmentsImage/allter/Jeans-Transparent.png`}/>
                <Product id={23} price={10.99} image={`/GarmentsImage/allter/Short-Skirt-PNG.png`}/>
                <Product  id={24} price={100.99} image={`/GarmentsImage/Garment-PNG-Image-File.png`}/>
                
            </div> */}
            
        </div>
      
    </div>
  )
}

export default Middle
