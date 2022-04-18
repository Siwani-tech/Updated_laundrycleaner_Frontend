import React, { useReducer, useState } from 'react';
import { auth } from '../../firebase';
import './Login.css';
import {useNavigate} from 'react-router';

function Login() {
  const navigate=useNavigate();
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');

  

  const signin=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{
      navigate('/')
    })
    .catch(e=>alert(e.message))
    

  }

  const register=(e)=>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      console.log(auth);
      if(auth){
        navigate('/')
      }
    }).catch(e=>alert(e.message));

  }
  return (
    <section>
       <div className='imgBox'>
         <img src="https://images.pexels.com/photos/7994488/pexels-photo-7994488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="login" />
    </div>

    <div className="contentBox">
      <div className="form">
        <h2>Login</h2>
        <form action="">
          <div className="inputBox">
            <span>Username</span>
            <input type="text" value={email} onChange={e=>{setemail(e.target.value)}}/>
          </div>
          <div className="inputBox">
            <span>Password</span>
            <input type="password" value={password} onChange={e=>{setpassword(e.target.value)}}/>
          </div>
          <div className="inputBox">
            
            {/* <input type="submit" value='' name='Sign in' /> */}
            <button onClick={signin} type='submit'>Sign in</button>
            
          </div>
          <div className="inputBox">
            
            {/* <input type="submit" value='' name='Sign in' /> */}
            <p>Don't have an account? <a onClick={register} href="/">Sign up</a></p>
            
          </div>
          
          
        </form>
      </div>

    </div>
    </section>

   
  )
}

export default Login
