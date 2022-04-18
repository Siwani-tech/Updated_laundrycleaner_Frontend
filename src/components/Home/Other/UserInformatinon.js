import React,{useState} from 'react'
import './UserInformatinon.css';
function UserInformatinon() {
    const[firstname,showfirstname]=useState(false);
    const[lastname,showlastname]=useState(false);
    const[email,showemail]=useState(false);
    const[phone,showphone]=useState(false);
    const[adddress,showaddress]=useState(false);


    const handlesubmit=(e)=>{
        e.preventDefault();
        showfirstname(true);
        showlastname(true);
        showemail(true);
        showphone(true);
        showaddress(true);
        

    }
    const displayname=(e)=>{
        let updatename=e.target.value;
        firstname(updatename);
    }
    
  return (
    <div className='reg_form'>
       
  {/* <h1>Customer</h1> */}
  <h1>Addcustomer</h1>
  <form id="form" onSubmit={handlesubmit} value={firstname}>

     
      <div class="form-control">
          <label for="name" id="label-name">
              Name
          </label>

         
          <input type="text"
                 id="name" onChange={displayname} 
                 placeholder="Enter your name" />
      </div>

      <div class="form-control">
          <label for="email" id="label-email">
              Email
          </label>

         
          <input type="email"
                 id="email"
                 placeholder="Enter your email" />
      </div>

      <div class="form-control">
          <label for="phone" id="label-age">
              Phone
          </label>

         
          <input type="text"
                 id="age"
                 placeholder="Enter your Phone" />
      </div>
      <div class="form-control">
          <label for="Card" id="label-card">
              Card
          </label>

         <select name='card' id='card'>
             <option value="Card">Card</option>
             <option value="upi">UPI</option>
             <option value="CashonDelivery">Cash on Delivery</option>
             
         </select>
          
      </div>
      <div class="form-control">
          <label for="address" id="label-address">
              Address
          </label>

         
          <input type="text"
                 id="address"
                 placeholder="Enter your Address" />
      </div>
      <button onClick={handlesubmit} type="submit" value="submit">
          submit
      </button>
      
  </form>
    </div>
  )
}

export default UserInformatinon
