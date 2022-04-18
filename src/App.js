
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
// import Header from './components/Header/Header';
import About from './components/Home/About';
// import ChooseUs from './components/Home/ChooseUs';
import ContactUs from './components/Home/ContactUs';
import AddCustomer from './components/Home/Other/AddCustomer';
import Addarticle from './components/Home/Other/Addarticle';
import AddPrice from './components/Home/Other/AddPrice';
import AddServices from './components/Home/Other/AddServices';
import PrintVoice from './components/Home/Other/PrintVoice';

import Middle from './components/Home/Middle';

import Navbar from './components/Header/Navbar';
// import Services from './components/Home/Services';
import Works from './components/Home/Works';
import Repairs from './components/Home/Repairs';
import Alterations from './components/Home/Alterations'
import Checkout from './components/Home/Checkout';
import Homes from './components/Home/Homes';
import Login from './components/Home/Login';
import Payment from './components/Home/Payment';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/Home/StateProvider';
import Laundry from './components/Home/Laundry';
import Pressed from './components/Home/Pressed';

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './components/Home/Orders';
import UserInformatinon from './components/Home/Other/UserInformatinon';
import Invoice from './components/Home/Other/Invoice';
import Seetings from './components/Home/Other/Seetings';
import Sidebars from './components/Header/Sidebars';


function App() {
  const promise=loadStripe('pk_test_51KnlXESGUAxa4ZvuEib4hr6lJKzMCxvAAWTisW3bVVNxEVrj1mIIz9MHqR7KumApwKKt4O9J6K2cqmzWH56Lampy006sqqFXZV');
  const[{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is'+ authUser);

      if(authUser){
        //the user just logged in /user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //user logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <>
    
   <Router>
     {/*  <Sidebars/> */}
     
     {/* <Sliders/> */}
     {/* <Footer/> */}
     <Routes>
      
       {/* <Route exact path='/sliders' element={ <Sliders/>}></Route> */}
      
       {/* <Route exact path='/' element={<Home/>}></Route> */}
       <Route exact path='/login' element={<Login/>}></Route>
       <Route exact path='/payment' element={
         
           <Elements stripe={promise}>
              <Sidebars/>
           <Payment/>
         </Elements>
         
       }>
         
       </Route>
       <Route exact path='/about' element={<> <Sidebars/> <About/></>}></Route>
       <Route exact path='/services' element={<>  <Sidebars/><Middle/> </> } ></Route>
       <Route exact path='/' element={<> <Sidebars/><Homes/></>}></Route>
        <Route exact path='/checkout' element={<> <Sidebars/><Checkout/></>}></Route>
        <Route exact path='/orders' element={<> <Sidebars/><Orders/></>}></Route>
       <Route exact path='/works' element={<> <Sidebars/><Works/></>}></Route>
       <Route exact path='/contactus' element={<> <Sidebars/><ContactUs/></>}></Route>
       <Route exact path='/laundry' element={<> <Sidebars/><Laundry/></>}></Route>
       <Route exact path='/repairs' element={<> <Sidebars/><Repairs/></>}></Route>
       <Route exact path='/pressed' element={<> <Sidebars/><Pressed/></>}></Route>
       <Route exact path='/alterations' element={<> <Sidebars/><Alterations/></>}></Route>
       {/* <Route exact path='/userinformation' element={<> <Sidebars/><UserInformatinon/></>}></Route> */}
       <Route exact path='/invoice' element={<> <Sidebars/><Invoice/></>}></Route>
       <Route exact path='/userinformation' element={<> <Sidebars/><UserInformatinon/></>}></Route>
       <Route exact path='/addarticle' element={<> <Sidebars/><Sidebars/><Addarticle/></>}></Route>
       <Route exact path='/addpricelist' element={<><Sidebars/><AddPrice/></>}></Route>
       <Route exact path='/addservices' element={<> <Sidebars/><AddServices/></>}></Route>
       <Route exact path='/printinvoice' element={<> <Sidebars/><PrintVoice/></>}></Route>
       <Route exact path='/settings' element={<> <Sidebars/><Seetings/></>}></Route>
     </Routes>
   </Router>

	    
    </>
  );
    }

export default App;
