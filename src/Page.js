import React from 'react'
import fbase from './Fire'
import { Link, useParams } from 'react-router-dom'


export default function Page() {
    var obj={
        username:''
    }
    let {id}=useParams()
    fbase.child(`key/${id}`).on('value',(element)=>{
        console.log(element.val().username)
        obj.username=element.val().username
        
         
    })
    
  return (<>
    
 <div id='pageContainer'>
 <div className='position-relative text-center bg-dark'>
     <div className=' text-light fs-1'><span className='text'>Welcome</span> <span className='text'>{obj.username}</span></div>
   </div>
<div className='page '>
 <div className=' text-light fs-2 my-2 ' id='clickItems' ><Link className=' text-light fs-2 my-2 fw-bolder text-decoration-none' to="/registration">Add items</Link></div>
   <div className=' text-light fs-2 my-3' id='clickView' ><Link className=' text-light fs-2 my-2 fw-bolder text-decoration-none' to="/View">View items</Link></div>
   <div className=' text-light fs-2 my-3' id='clickView' ><Link className=' text-light fs-2 my-2 fw-bolder text-decoration-none' to="/Seeorders">Seeorder</Link></div>

</div>
 </div>

  </>
  )
}
