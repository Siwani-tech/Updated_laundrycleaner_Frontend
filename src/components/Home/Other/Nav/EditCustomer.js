

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '@fortawesome/fontawesome-svg-core' ;
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faRupee} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function EditCustomer() {
     
  let history = useNavigate(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  
 
  const [user ,setUser] = useState({
    fname: "",
    email: "",
    preferences: "",
    discount: "",
    address: "",
    phone:"",
    sms:"",
    price:"",
    nopackageselected:""
  })

  const { fname, email, preferences, discount, address,phone,sms,price,nopackageselected } = user;
 
  const onInputChange = e => {
    setUser({ ...user,[e.target.name]: e.target.value });
  };
 
  useEffect(() => {
    loadUser();
  }, []);
 
   
  const updateCustomer = async e => {
    e.preventDefault();
    await axios.put(`/update/:id'/${id}`, user);
    history("/");
  };

  const loadUser =  () => {
    fetch(`http://localhost:5000/api/v1/customer/${id}`,{
            method: "GET",
          })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
        setUser({
                    id: id,
                    update: true,
                    fname: result.response[0].first_name,
          email: result.response[0].email,
          preferences: result.response[0].preferences,
          discount: result.response[0].discount,
          address: result.response[0].address,
          phone: result.response[0].phone,
          sms: result.response[0].sms,
          price: result.response[0].price,
          nopackageselected: result.response[0].nopackageselected,
 
                });
            })
            .catch((error) => console.log("error", error));
  };
 
  return (
    <div className="container">
    <div className="row mt-4"> 
    <form>
    
      <h1>Add User</h1>
      <h4 className="text-center mb-4">Edit A employee</h4>
       
          <h5 className="text-success">Employee ID : {user.id} </h5>

      
    <div class="contentform">
      {/* <div id="sendmessage"> Your message has been sent successfully. Thank you. </div> */}


      <div class="leftcontact">
           

            <div class="form-group">
            <p>Name <span>*</span></p>
            <span class="icon-case"><FontAwesomeIcon icon={faUser}/></span>
        <input type="text" name="fname" value={fname} onChange={e => onInputChange(e)} id="prenom" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné."/>
                {/* <div class="validation"></div> */}
      </div>

      <div class="form-group">
      <p>E-mail <span>*</span></p>  
      <span class="icon-case"><FontAwesomeIcon icon={faEnvelope}/></span>
                <input type="email" name="email" value={email} onChange={e => onInputChange(e)} id="email" data-rule="email" data-msg="Vérifiez votre saisie sur les champs : Le champ 'E-mail' est obligatoire."/>
                {/* <div class="validation"></div> */}
      </div>  

      <div class="form-group">
      <p>Preferences <span>*</span></p>
      {/* <span class="icon-case"><i class="fa fa-home"></i></span> */}
       <select name="preferences" value={preferences} onChange={e => onInputChange(e)} id='preferences'>
        <option value="outlet">outlet</option>
       </select>
      </div>


      <div class="form-group">
      <p>Discount % <span>*</span></p>
      <span class="icon-case"><FontAwesomeIcon icon={faRupee}/></span>
        <input type="text" name="discount" value={discount} onChange={e => onInputChange(e)} id="postal" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Code postal' doit être renseigné."/>
                {/* <div class="validation"></div> */}
      </div>  
      <div class="form-group">
      <p>Address <span>*</span></p>
      <span class="icon-case"><FontAwesomeIcon icon={faAddressCard}/></span>
        <input type="text" name="address" value={address} onChange={e => onInputChange(e)} id="ville" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Ville' doit être renseigné."/>
                {/* <div class="validation"></div> */}
      </div> 


  </div>

  <div class="rightcontact">  

     

      <div class="form-group">
      <p>Phone number <span>*</span></p>  
      <span class="icon-case"><FontAwesomeIcon icon={faPhone}/></span>
        <input type="text" name="phone" value={phone} onChange={e => onInputChange(e)} id="phone" data-rule="maxlen:10" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Téléphone' doit être renseigné. Minimum 10 chiffres"/>
                {/* <div class="validation"></div> */}
      </div>

      <div class="form-group">
      <p>Only SMS <span>*</span></p>
      {/* <span class="icon-case"><i class="fa fa-info"></i></span> */}
       <select name="sms" value={sms} onChange={e => onInputChange(e)} id='sms'>
        <option value="Only SMS">Only SMS</option>
        <option value="Only SMS">Only Email</option>
        <option value="Only SMS">Both SMS and Email</option>
       </select>
           
      </div>

      <div class="form-group">
      <p>Price name <span>*</span></p> 
      <select name="price" value={price} onChange={e => onInputChange(e)} id='pricename'>
        <option value="Only SMS">Rate List 1</option>
       </select>
      </div>
    
      <div class="form-group">
      <p>No Package selected <span>*</span></p>
      <select name="nopackageselected" value={nopackageselected} onChange={e => onInputChange(e)} id='nopackageselected'>
        <option value="No Package Selected">No Package Selected</option>
       </select>
      </div>  
  </div>
  </div>
<button type="submit"  onClick={updateCustomer} class="bouton-contact">Update</button>
  
</form>
    </div>
    </div>
  )
}

export default EditCustomer
