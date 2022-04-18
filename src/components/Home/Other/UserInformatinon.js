import React, { useState } from 'react'
import './UserInformatinon.css';
function UserInformatinon() {
    //     const[firstname,showfirstname]=useState(false);
    //     const[lastname,showlastname]=useState(false);
    //     const[email,showemail]=useState(false);
    //     const[phone,showphone]=useState(false);
    //     const[adddress,showaddress]=useState(false);


    //     const handlesubmit=(e)=>{
    //         e.preventDefault();
    //         showfirstname(true);
    //         showlastname(true);
    //         showemail(true);
    //         showphone(true);
    //         showaddress(true);


    //     }
    //     const displayname=(e)=>{
    //         let updatename=e.target.value;
    //         firstname(updatename);
    //     }

    return (
        <div class="background">
            <div class="container">
                <div class="screen">
                    <div class="screen-header">
                        <div class="screen-header-left">
                            <div class="screen-header-button close"></div>
                            <div class="screen-header-button maximize"></div>
                            <div class="screen-header-button minimize"></div>
                        </div>
                        <div class="screen-header-right">
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div class="screen-body">
                        <div class="screen-body-item left">
                            <div class="app-title">
                                <span>Add</span>
                                <span>User</span>
                            </div>
                            <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                        </div>
                        <div class="screen-body-item">
                            <div class="app-form">
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="NAME" value="" />
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="EMAIL" />
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="CONTACT NO" />
                                </div>
                                <div class="app-form-group">

                                    <label for="Card" id="label-card" class="app-form-control" >
                                        Card
                                    </label>

                                    <select name='card' id='card'>
                                        <option value="Card">Card</option>
                                        <option value="upi">UPI</option>
                                        <option value="CashonDelivery">Cash on Delivery</option>

                                    </select>
                                </div>
                                <div class="app-form-group">
                                    {/* <input class="app-form-control" placeholder=""/> */}
                                    <label for="Preferences" id="label-card" class="app-form-control">
                                        Preferences
                                    </label>

                                    <select name='preferences' id='preferences'>
                                        <option value="NA">NA</option>
                                        <option value="suit shirt on Hanger">suit shirt on Hanger</option>
                                        <option value="Medium starch">Medium starch</option>
                                        <option value="light starch">light starch</option>
                                        <option value="hard starch">hard starch</option>
                                        <option value="No starch">No starch</option>
                                        <option value="Flat Pressing">Flat Pressing</option>
                                    </select>
                                </div>
                                <div class="app-form-group message">
                                    <input class="app-form-control" placeholder="MESSAGE" />
                                </div>
                                <div class="app-form-group buttons">
                                    <button class="app-form-button">SAVE</button>
                                    {/* <button class="app-form-button">SEND</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="credits">
        inspired by
        <a class="credits-link" href="https://dribbble.com/shots/2666271-Contact" target="_blank">
          <svg class="dribbble" viewBox="0 0 200 200">
            <g stroke="#ffffff" fill="none">
              <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
              <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
              <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
              <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
            </g>
          </svg>
          
        </a>
      </div> */}
            </div>
        </div>

        //     <div className='reg_form'>

        //   {/* <h1>Customer</h1> */}
        //   <h1>Addcustomer</h1>
        //   <form id="form" onSubmit={handlesubmit} value={firstname}>


        //       <div class="form-control">
        //           <label for="name" id="label-name">
        //               Name
        //           </label>


        //           <input type="text"
        //                  id="name" onChange={displayname} 
        //                  placeholder="Enter your name" />
        //       </div>

        //       <div class="form-control">
        //           <label for="email" id="label-email">
        //               Email
        //           </label>


        //           <input type="email"
        //                  id="email"
        //                  placeholder="Enter your email" />
        //       </div>

        //       <div class="form-control">
        //           <label for="phone" id="label-age">
        //               Phone
        //           </label>


        //           <input type="text"
        //                  id="age"
        //                  placeholder="Enter your Phone" />
        //       </div>
        //       <div class="form-control">
        //           <label for="Card" id="label-card">
        //               Card
        //           </label>

        //          <select name='card' id='card'>
        //              <option value="Card">Card</option>
        //              <option value="upi">UPI</option>
        //              <option value="CashonDelivery">Cash on Delivery</option>

        //          </select>

        //       </div>
        //       <div class="form-control">
        //           <label for="Card" id="label-card">
        //               Preferences
        //           </label>

        //          <select name='preferences' id='preferences'>
        //              <option value="NA">NA</option>
        //              <option value="suit shirt on Hanger">suit shirt on Hanger</option>
        //              <option value="Medium starch">Medium starch</option>
        //              <option value="light starch">light starch</option>
        //              <option value="hard starch">hard starch</option>
        //              <option value="No starch">No starch</option>
        //              <option value="Flat Pressing">Flat Pressing</option>

        //          </select>

        //       </div>
        //       <div class="form-control">
        //           <label for="address" id="label-address">
        //               Address
        //           </label>


        //           <input type="text"
        //                  id="address"
        //                  placeholder="Enter your Address" />
        //       </div>
        //       <button onClick={handlesubmit} type="submit" value="submit">
        //           submit
        //       </button>

        //   </form>
        //     </div>
    )
}

export default UserInformatinon
