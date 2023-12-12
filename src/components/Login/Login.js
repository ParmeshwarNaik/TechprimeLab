import React, { useState } from 'react'
import axios from 'axios'
import "./Login.css"
const Login = () => {
  const [Signup,setSignup]=useState(true)
  //const [Login,setLogin]=useState(false)
  const [username,setUsername]=useState('')
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')

  const togglehandler=(e)=>{
    e.preventDefault();
    setSignup(!Signup)
    
 }
 const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post("http://localhost:3001/register",{username,email,password})
  .then(result=>console.log(result))
  .catch((err)=>console.log(err))

 }

  return (
    <div className='container'>
      <div className='login'>
      <div className='login-heading'>
      <h2>Login to get started</h2>
      </div>
      <form className='login-form'>
        <div> 
          <label>Email</label>
          <br/>
          <input type='email' name='email' placeholder={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br/>
          <br/>
          <br/>
        </div>
        <div> 
          <label>Password</label>
          <br/>
          <input type="password" name='password' placeholder={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <br/>
          {Signup &&<div className='input-group'>
                    <input type="email " className="form-control" placeholder={username} onChange={(e) =>setUsername(e.target.value)}
                     />
                </div>}
          <div className='forget-password'>
          <a href={Signup? "Signup":"SignIn"} onClick={togglehandler }>{Signup?'Already have an Account? Login     ':'Dont have Account?SignUp'}</a>
            <a href='/'>{!Signup && "Foget Password"}</a>
            </div>
       {Signup?
          <button type='submit' onClick={handleSubmit} className='button'>SignUp</button>:
          <button type='submit'  className='button'>SignIn</button> 
      }
        
        
        </form>
        </div>
    </div>
  )
}

export default Login