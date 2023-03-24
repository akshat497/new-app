import { useEffect, useState } from "react"
import {DotsThreeCircle} from 'phosphor-react'
import {CurrencyInr} from 'phosphor-react'
import fbase from './Fire'
import { toast } from "react-toastify"

export default function Cart(props){
    const [holder, setholder] = useState({})
    const [order, setorder] = useState([])
   
    
    
    var arr=JSON.parse(localStorage.getItem("record"))
   
    const update=()=>{
      
      const arr=JSON.parse(localStorage.getItem("record"))
      setholder({...arr})
      

   }
    const sum=()=>{
      
      
      // var table = document.getElementById("table"), sumVal = 0;
            
      // for(var i = 0; i < table.rows.length; i++)
      // {
      //     sumVal = sumVal + parseInt(table.rows[i].cells[3].innerHTML);
      // }
      var Sum=arr.reduce((arr,curr)=>{
        return(arr+Number(curr.Price))
      },0)
      
     document.getElementById('sum').innerHTML=`${Sum}`
    
     
      
      
      
    }
useEffect(() => {
  sum()
 update()
 
 


},[])

const dlt=(event)=>{
  
          var arr=JSON.parse(localStorage.getItem("record"))
          
         
            arr.splice(event.target.id,1)
            
            localStorage.setItem("record",JSON.stringify(arr))  
           
            update()
            sum()
           
}

// const increment=(event)=>{

//   var parent=event.target.parentNode
//   var child=parent.childNodes[1]
//   var parent1=event.target.parentNode.parentNode
//   var child1=parent1.childNodes[3]//price column
//   child.innerHTML=Number(child.innerHTML)+1
//   child1.innerHTML=child.innerHTML*event.target.id
  
//   arr.map((ele)=>{
//     ele.Quantity=parseInt(child.innerHTML)
    
//   localStorage.setItem("record",JSON.stringify(arr))
//   return(<></>)
//   }) 
 
 
//   sum() 
  

// }

// const decrement=(event)=>{
  
//   var parent=event.target.parentNode
//   var child=parent.childNodes[1]
//   var parent1=event.target.parentNode.parentNode
//   var child1=parent1.childNodes[3]//price column
//   child.innerHTML=Number(child.innerHTML)-1
//   child1.innerHTML=child.innerHTML*event.target.id
//   arr.map((ele)=>{
//     ele.Quantity=parseInt(child.innerHTML)
//     arr1.push(arr)
    
//   })
//   localStorage.setItem("record",JSON.stringify(arr))
  
  
//   sum()  
// }

const Order=()=>{
  localStorage.setItem("record",JSON.stringify(arr))
 
  
 fbase.child('orders').push(arr)
 toast('order placed')
 

}
  return (
    
    <div className="container">
  
    <table className="  table bg-dark text-light my-5  mx-3" id="table">
    
      <thead>
        <th>Name</th>
        <th>preview</th>
        <th>category</th>
        <th>Price</th>
        <th>operation</th>
        {/* <th> <span>  </span><span>  </span>Quantity</th> */}
      </thead>
      <tbody>
        {
          arr.map((ele,index)=>{
        
          return( 
            <tr key={index} id={index}>
              <td>{ele.Name}</td>
              <td><img alt='...' src={ele.Path} height='50px'></img> <span className={`text-${ele.Type==='Veg'?'success':'danger'}`}>{<DotsThreeCircle/>}</span></td>
              <td>{ele.Category}</td>
              
              <td id={index}>{ele.Price?ele.Price:'not mentioned'}</td>
              <td><button className="btn btn-danger" onClick={dlt} id={index}>delete</button></td>
              {/* <td><button className="btn text-light " onClick={decrement} id={ele.Price} >-</button><span id="span">1</span><button onClick={increment} id={ele.Price} className="btn text-light">+</button></td> */}
            </tr>
          )
        } )
        
        }
        
        
        <CurrencyInr className="fs-2"/>
        <td></td>
        <td></td> 
        
        <td id="sum" className="text-success">{}</td>
       
      </tbody>
      <button className="btn btn-outline-success mx-5 my-2"  onClick={Order}>Order</button>
    </table>
    
        
    
    
      
  </div>
  )
}
