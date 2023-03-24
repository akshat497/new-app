import React, { useEffect } from 'react'
import fbase from './Fire'
import { useState } from 'react'

// import {  Link, Navigate, useNavigate } from 'react-router-dom'
import "./index.css"
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

export default function LoginPage() {
  const navigate=useNavigate()
  const [save, setsave] = useState({
    username:'',
    password:''
  })
  const [match, setmatch] = useState({})
 
 
  const upload=(event)=>{
    setsave({...save,[event.target.name]:event.target.value})
   
   
  }
  useEffect(()=>{
    fbase.child('key').on('value',(snapshot)=>{
      if (snapshot.val()!==null) {
        setmatch({...snapshot.val()})
        console.log(snapshot.val().username)
        
    }else{
        setmatch({})
    }
    }
    )
 
 
  },[])
  const firee=()=>{
    if(save.username===''||save.password===''){
      toast('fill all fields',{autoclose:2000})
      return(<></>)
    }
    
    Object.keys(match).map((id)=>{
      if (match[id].username===save.username&&match[id].password===save.password) {
        // setnext(<Link to={`/page/${id}`}>redirect to login page</Link>)
        toast('🦄 logged in', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        navigate(`/page/${id}`)
        
        
      }
     
      return(<></>)
    })
    

    
  }
  return (<>
      {/* <div className='text-center' id='logindiv'>
    
     
 <div className='position-relative  text-center mt-5  ' id='login'>
    <div className='userCtrl'>
    <span className='text-light fs-3'> Username:</span> <input 
    type="text"
    className='form-control form-control-lg  w-50 '
    placeholder='Enter Username '
    name='username'
    onChange={upload}
    id="username"
    /><br/>
    <span className='text-light fs-3'> Password: </span>  <input 
    type="password"
    className='form-control form-control-lg w-50 '
    placeholder='Enter password'
    name='password'
    onChange={upload}
    id="password"
    /><br/>
    <button className='btn btn-outline-success' onClick={firee} >Login</button>
  
   
    </div>
 </div>
 </div> */}
 <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-title p-b-43">
						Login to continue
					</span>
					

            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text"
                name='username'
                onChange={upload}
                id="username" />
              <span className="focus-input100"></span>
              <span className="label-input100" >Email</span>
            </div>


            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="password" name='password'
                onChange={upload}
                id="password" />
              <span className="focus-input100"></span>
              <span className="label-input100">Password</span>
					</div>

			
			

					<div className="container-login100-form-btn">
						<button className="login100-form-btn" onClick={firee}>
							Login
						</button>
					</div>
					
					<div className="text-center p-t-46 p-b-20">
						<span className="txt2">
							Follow us on
						</span>
					</div>

					<div className="login100-form-social flex-c-m">
						<a href="/" className="login100-form-social-item flex-c-m bg1 m-r-5">
							<i className="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="/" className="login100-form-social-item flex-c-m bg2 m-r-5">
							<i className="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</div>
				</form>

				<div className="login100-more" id='backgroundLoginImage'  >
        
				</div>
			</div>
		</div>
	</div>
  </>)
}
