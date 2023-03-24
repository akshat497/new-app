import React, { useEffect, useState } from 'react'
import fbase from "./Fire"
import HeaderCustomer from './HeaderCustomer'
import "./index"
export default function Filter(props){
    const [first, setfirst] = useState([])
    var obj=[{}]
    useEffect(()=>{
        fbase.child('key').on("value",(element)=>{setfirst({...element.val()})})
       
    },[])
  
  return (
    
    <div>
    <HeaderCustomer  counter={props.count} show={props.show}/>
    
        {
              Object.keys(first).map((id) => {
                  if (first[id].category === props.category ) {
                      console.log(id)
                      console.log(first[id].name)
                      obj={path:first[id].path,name:first[id].name,category:first[id].category,Price:first[id].price,type:first[id].type}
                    
                    
                  } else { return(<></>) }
                  return (<div className='cg'><div class="card" style={{width: "18rem;"}}>
                  <span className={`badge text-bg-${first[id].type==='NonVeg'?'danger':'success'}`} id={first[id].type} >{first[id].type}</span>
  <img src={obj.path} class="card-img-top" alt="..." height='70px' width="50px"/>
  <div class="card-body">
    <h5 class="card-title">{obj.name}</h5>
    <p class="card-text">{obj.category}</p>
    <p class="card-text"><b>Rs:-{obj.Price?obj.Price:'not mentioned'}</b></p>
    
    <button className="btn btn-dark mx-1" onClick={props.AddItem} id={id}>Add</button>
    <button className="btn btn-dark mx-1" onClick={props.remove} id={id} name={first[id].name}>remove</button>
  </div>
</div></div>)
              })
          }
    </div>
  )
}
