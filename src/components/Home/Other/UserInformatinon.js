import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import './UserInformatinon.css';
import {  NavLink } from 'react-router-dom';

function UserInformatinon() {
  // const [outlet, setoutlet] = useState('');


  // const [record, setRecord] = useState([]);

  const [user, setUser] = useState({
    fname: "",
    email: "",
    preferences: "",
    discount: "",
    address: "",
    phone: "",
    sms: "",
    price: "",
    nopackageselected: ""
  });

  // const { fname, email, preferences,discount,address,phone,sms,price,nopackageselected} = user;
  const onInputChange = e => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
    // setUser({ ...user, [e.target.name]: e.target.value });
  };

  

  const addimpdata = async (e) => {
    e.preventDefault();
    const { fname, email, preferences, discount, address, phone, sms, price, nopackageselected } = user;

    const res = await fetch('http://localhost:3007/userdetails', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, email, preferences, discount, address, phone, sms, price, nopackageselected
      })
    });
   
    
    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("error");
      console.log("error");

    }
    else {
      alert("data added");
      console.log("data added");
    }
   
  }



 

  // const [navSize, setnavSize] = useState("10rem");
  // const [navColor, setnavcolor] = useState("transparent");
  // const listenScrollEvent = () => {
  //   window.screenY > 10 ? setnavcolor("#252734") : setnavcolor("transparent");
  //   window.screenY > 10 ? setnavSize("5rem") : setnavSize("10rem");

  // };

  return (
    <>



      <div className="form-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-3 col-md-6">
              <div className="form-container">
                <h3 className="title">Add User</h3>
                <form className="form-horizontal">
                  <div className="form-group">
                    <label>User Name</label>
                    <input type="text" className="form-control" name="fname" value={user.fname} onChange={e => onInputChange(e)} placeholder="User Name" />
                  </div>
                  <div className="form-group">
                    <label>Email ID</label>
                    <input type="email" className="form-control" name="email" value={user.email} onChange={e => onInputChange(e)} placeholder="Email Address" />
                  </div>
                  <div className="form-group">
                    <label>Preferences</label>
                    <input type="text" className="form-control" name="preferences" value={user.preferences} onChange={e => onInputChange(e)} placeholder="Preferences" />
                    {/* <select className="form-control" >
                      <option  name="preferences" value={user.preferences} onChange={e => onInputChange(e)}>outlet</option>
                    </select> */}
                  </div>
                  <div className="form-group">
                    <label>Discount % </label>
                    <input type="number" name="discount" value={user.discount} onChange={e => onInputChange(e)} className="form-control" placeholder="Discount" />
                  </div>
                  
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" value={user.address} onChange={e => onInputChange(e)} placeholder="address" />
                  </div>
                  <div className="form-group">
                    <label>Only SMS</label>
                    {/* <select className="form-control"  > */}
                    <input type="text" className="form-control"  name="sms"  value={user.sms} onChange={e => onInputChange(e)} placeholder="sms" />
                      {/* <option  name="sms"  value={user.sms}  onChange={e => onInputChange(e)}>Only SMS</option>
                      <option   name="sms"  value={user.sms} onChange={e => onInputChange(e)}>Only Email</option>
                      <option   name="sms"  value={user.sms} onChange={e => onInputChange(e)}>Both SMS and Email</option>
                    </select> */}
                  </div>
                  
                  <div className="form-group">
                    <label>Phone number</label>
                    <input type="number" className="form-control"  name="phone" value={user.phone} onChange={e => onInputChange(e)} placeholder="Phone" />
                  </div>
                  <div className="form-group">
                    <label>Price </label>
                    <input type="number" className="form-control"  name="price"  value={user.price}  onChange={e => onInputChange(e)} placeholder="price" />
                    {/* <select className="form-control"  >
                    <option  name="price" value={user.price} onChange={e => onInputChange(e)}>Rate List 1</option>
                    </select> */}
                  </div>
                  <div className="form-group">
                    <label>No Package selected </label>
                    <input type="text" className="form-control"  name="nopackageselected"   value={user.nopackageselected}  onChange={e => onInputChange(e)} placeholder="no" />
                    {/* <select className="form-control"  >
                    <option value={user.nopackageselected}  name="nopackageselected" onChange={e => onInputChange(e)}>No Package Selected</option>
                    </select> */}
                  </div>
                  <button className="button2" onClick={addimpdata}>Save</button>
                  <NavLink to='/viewPage'>
                    <button className="button2">View</button>
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default UserInformatinon 
