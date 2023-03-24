import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart,Lock} from 'phosphor-react'

export default function HeaderCustomer(props) {
    const [category, setcategory] = useState('category')
    const [type, settype] = useState('type')
    const [color, setcolor] = useState('light')
 
    
    const change=(event)=>{
        setcategory(event.target.id)
       
    }
    const change1=(event)=>{
      if(event.target.id==='Veg'){
       setcolor('success')
      }else{
        setcolor('danger')
      }
      settype(event.target.id)
     
  }

 
   
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary mt-0">
    <div className="container-fluid bg-dark navbar-dark">
      <a className="navbar-brand" href="/"><b>Carlos</b> Hotel&restaurents </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {category}
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" onClick={change} id="Fast-food" to="/fast-food">Fast-food</Link></li>
              <li><Link className="dropdown-item" onClick={change} id="Italian" to="/Italian"> Italian</Link></li>
              <li><Link className="dropdown-item" onClick={change} id="South-indian" to="/South-indian">South-indian</Link></li>
              <li><Link className="dropdown-item" onClick={change} id="Chinese" to="/Chinese">Chinese</Link></li> 
              <li><Link className="dropdown-item" onClick={change} id="Baverages" to="/Baverages">Baverages</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle text-${color}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {type}
            </a>
            <ul className="dropdown-menu">
            <Link className='text-dark text-decoration-none' to='/veg'><li onClick={change1}  id="Veg">Veg</li></Link>
           <Link className='text-dark text-decoration-none' to='/Nonveg'><li onClick={change1}  id="NonVeg">NonVeg</li></Link>
 
            </ul>
          </li>
        </ul>
        <Link to='/LoginPage'> <Lock size={32} className='text-light' /></Link><span className='text-light mx-3'>Login</span>
      <Link to='/cart'> <ShoppingCart size={32} className='text-light' onMouseLeave={props.show}/></Link><span className='text-light mx-3'>{props.counter}</span>
      </div>
      
       </div>
  </nav></div>
  )
}
