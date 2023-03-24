import React, {   useEffect ,useState} from 'react'

import fbase from './Fire'

import './index.css'
import { toast } from 'react-toastify'
import {CurrencyInr} from 'phosphor-react'
import HeaderCustomer from './HeaderCustomer'



export default function CustomerView(props) {
   
    const [collect, setcollect] = useState({})
    
    
    const change=()=>{
      
      const input=document.getElementById('search').value.toLowerCase()
      Object.keys(collect).map((id,index)=>{
        var match=collect[id].name
       if(input===match){
        <div>{collect[id].name}</div>
        toast(   
  <div>
       <div>
        <img src={collect[id].path?collect[id].path:"th.jpg"} className="card-img-top" alt="..." height="70px" width="30px"/>
      <h5 className="card-title">{collect[id].name}</h5>
      <p className="card-text">{collect[id].category}</p>
      <p className="card-text">Rs:- {collect[id].price?collect[id].price:'not mentioned'}</p>
   
      <button className="btn btn-dark mx-1" onClick={props.AddItem} id={id}>Add to cart</button>
      <button className="btn btn-dark mx-1" onClick={props.remove} id='remove' name={collect[id].name}>remove</button>
     </div>
  </div>
       
     , {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
      
               
       }else{toast(null)
       
       }
        
       
        
        return(<></>)
       }) 
    }
     
    // const [match, setmatch] = useState({})
    // var obj=[{}]
    useEffect(()=>{
      
        fbase.child('key').on("value",(data)=>{
            if (data.val()!==null) {
                setcollect({...data.val()})
                
            }else{
                setcollect({})
            }
   
        })
        
    },[])

  return (
    
    <div>
    
     
    <HeaderCustomer  counter={props.count} show={props.show}/>
      <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" id='search' placeholder="Search" aria-label="Search" onChange={change}/>
         
        </form>
      
    
       { Object.keys(collect).slice(1).map((id,index)=>{
      
        
        return(
   <div className='cg my-5 ' id='card ' key={index} >
   <span className={`badge text-bg-${collect[id].type==='NonVeg'?'danger':'success'}`} id={collect[id].type} >{collect[id].type}</span>
   <div className=" card "  id='cardin'>
  <img src={collect[id].path?collect[id].path:"th.jpg"} className="card-img-top" alt="..." height="70px" width="30px"/>
  <div className="card-body">
    <h5 className="card-title">{collect[id].name}</h5>
    <p className="card-text">{collect[id].category}</p>
    <p className="card-text"><CurrencyInr/> <b>{collect[id].price?collect[id].price:'not mentioned'}</b></p>
 
    <button className="btn btn-dark mx-1" onClick={props.AddItem} id={id} name={collect[id].name}>Add</button>
    <button className="btn btn-dark mx-1" onClick={props.remove} id={id} name={collect[id].name} >remove</button>
  </div>
</div>
   </div>
        )
        
       })  
    }
      
    </div>
   
  )}
      