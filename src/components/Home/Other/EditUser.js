import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-svg-core' ;
import { useNavigate, useParams } from 'react-router-dom';
import  './EditUser.css';;
function EditUser() {
 
// const[getuser,setUserdata]=useState([]);
// console.log(getuser);

    const [user, setUser] = useState({
        fname: "",
        email: "",
        preferences: "",
        discount: "",
        address: "",
        phone:"",
        sms:"",
        price:"",
        nopackageselected:""
      });
    
      // const { fname, email, preferences,discount,address,phone,sms,price,nopackageselected} = user;
        const onInputChange = e => {
          console.log(e.target.value);
          const{name,value}=e.target;
          setUser((preval)=>{
            return{
              ...preval,
              [name]:value
            }
          })
          
        };

        
    const { id } = useParams("");
    console.log(id);

    const history =  useNavigate();


    const getdata = async () => {

        const res = await fetch(`http://localhost:3007/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
          setUser(data)
            console.log("get data");
        }
    }

    useEffect(()=>{
      getdata();
    },[]);

    const updateuser = async(e)=>{
      e.preventDefault();

      const {fname, email, preferences,discount,address,phone,sms,price,nopackageselected} = user;

      const res2 = await fetch(`http://localhost:3007/updateuser/${id}`,{
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body:JSON.stringify({
            fname, email, preferences,discount,address,phone,sms,price,nopackageselected
          })
      });

      const data2 = await res2.json();
      console.log(data2);

      if(res2.status === 422 || !data2){
          alert("fill the data");
      }
      else{
        alert("data added");
        history("/viewPage")
        // setUser(data2);
      }
      // else{
      //     Navigate("/")
      //     setUPdata(data2);
      // }

          
      }
  return (
    <>
    <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6">
              <div class="form-container">
                <h3 class="title">Add User</h3>
                <form class="form-horizontal">
                  <div class="form-group">
                    <label>User Name</label>
                    <input type="text" class="form-control" name="fname" value={user.fname} onChange={e => onInputChange(e)} placeholder="User Name" />
                  </div>
                  <div class="form-group">
                    <label>Email ID</label>
                    <input type="email" class="form-control" name="email" value={user.email} onChange={e => onInputChange(e)} placeholder="Email Address" />
                  </div>
                  <div class="form-group">
                    <label>Preferences</label>
                    <input type="text" class="form-control" name="preferences" value={user.preferences} onChange={e => onInputChange(e)} placeholder="Preferences" />
                    {/* <select class="form-control" >
                      <option  name="preferences" value={user.preferences} onChange={e => onInputChange(e)}>outlet</option>
                    </select> */}
                  </div>
                  <div class="form-group">
                    <label>Discount % </label>
                    <input type="number" name="discount" value={user.discount} onChange={e => onInputChange(e)} class="form-control" placeholder="Discount" />
                  </div>
                  
                  <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" name="address" value={user.address} onChange={e => onInputChange(e)} placeholder="address" />
                  </div>
                  <div class="form-group">
                    <label>Only SMS</label>
                    {/* <select class="form-control"  > */}
                    <input type="text" class="form-control"  name="sms"  value={user.sms} onChange={e => onInputChange(e)} placeholder="sms" />
                      {/* <option  name="sms"  value={user.sms}  onChange={e => onInputChange(e)}>Only SMS</option>
                      <option   name="sms"  value={user.sms} onChange={e => onInputChange(e)}>Only Email</option>
                      <option   name="sms"  value={user.sms} onChange={e => onInputChange(e)}>Both SMS and Email</option>
                    </select> */}
                  </div>
                  
                  <div class="form-group">
                    <label>Phone number</label>
                    <input type="number" class="form-control"  name="phone" value={user.phone} onChange={e => onInputChange(e)} placeholder="Phone" />
                  </div>
                  <div class="form-group">
                    <label>Price </label>
                    <input type="number" class="form-control"  name="price"  value={user.price}  onChange={e => onInputChange(e)} placeholder="price" />
                    {/* <select class="form-control"  >
                    <option  name="price" value={user.price} onChange={e => onInputChange(e)}>Rate List 1</option>
                    </select> */}
                  </div>
                  <div class="form-group">
                    <label>No Package selected </label>
                    <input type="text" class="form-control"  name="nopackageselected"   value={user.nopackageselected}  onChange={e => onInputChange(e)} placeholder="no" />
                    {/* <select class="form-control"  >
                    <option value={user.nopackageselected}  name="nopackageselected" onChange={e => onInputChange(e)}>No Package Selected</option>
                    </select> */}
                  </div>
                  <button type="submit" onClick={updateuser} class="button2">Submit</button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
 }

export default EditUser
