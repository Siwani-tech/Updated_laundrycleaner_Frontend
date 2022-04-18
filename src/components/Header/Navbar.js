import React,{useState} from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingBasket } from '@material-ui/icons';
// import {
//     FaFacebookSquare,
//     FaInstagramSquare,
//     FaYoutubeSquare,
//   } from "react-icons/fa";
//   import { GiHamburgerMenu } from "react-icons/gi";
import { auth } from '../../firebase';  
import { NavLink } from "react-router-dom";
import { useStateValue } from '../Home/StateProvider';
import Dropdown from './Dropdown ';
function Navbar() {
const [{basket,user},dispatch]=useStateValue();

const handleSignAuthentication=()=>{
  if(user){
    auth.signOut();
  }
}

 const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (

    <>
   
    <nav className="main-nav">

        {/* 1st logo part  */}
        <div className="logo">
          <Link to='/services'>
          <h2>
            <span>L</span>Lanundry
            
          </h2>
          </Link>
          {/* <h2>
            <span>L</span>Lanundry
            
          </h2> */}
        </div>

        {/* 2nd menu part  */}
        <div
          className=
            "menu-link mobile-menu-link" 
          >
          <ul>
            {/* <li>
              <NavLink to="/home">Home</NavLink>
            </li> */}
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            {/* <li>
              <NavLink to="/services">Book Services</NavLink>
            </li> */}
            <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Book Services <i className='fas fa-caret-down' />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>

         
            <li>
              <NavLink to="/contactus">ContactUs</NavLink>
            </li>
            <li>
              <NavLink to="/works">Works</NavLink>
            </li>
            {/* <li>
              <NavLink to="/hero">Hero</NavLink>
            </li> */}
            
          </ul>
        </div>
        <div className="header-nav">
          <Link to={!user && '/login'}>
          <div onClick={handleSignAuthentication} className="header_option">
            <span className='header__optionLineOn'>Hello
              {!user?'Guest':user.email}
            </span>
            <span className='header__optionLineTwo'>{user?'Sign out':'Sign in'}</span>

          </div>
          </Link>
          
          {/* <div className="header_option">
            <span className='header__optionLineOn'>
              Hello 
            </span>
            <span className='header__optionLineTwo'>Sign in</span>

          </div> */}
          <div className="header_option">
          {/* <span className='header__optionLineOn'>
              retrun  
            </span>
            <span className='header__optionLineTwo'>
              Add Order
            </span> */}

            
          </div>
          <div className="header_option">
          <span className='header__optionLineOn'>
              Your
            </span>
            <span className='header__optionLineTwo'>
              Cart
              </span>

          </div>
          <Link to='/checkout'>
          <div className="header_basket">
            <ShoppingBasket />
            <span className='header__optionLineTwo header_basketCount'>
              {basket?.length}
            </span>
          </div>
          </Link>
          {/* <div className="header_basket">
            <ShoppingBasket/>
            <span className='header__optionLineTwo header_basketCount'>
              0
            </span>
          </div> */}
        </div>

       
      </nav>
      <div className="background_image">
      </div>

     
    
    </>
  )
}

export default Navbar
