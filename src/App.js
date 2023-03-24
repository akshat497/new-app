

import {  useEffect, useState } from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Cart from './Cart'
import Filter from './Filter'

import LoginPage from './LoginPage'
import Page from './Page'
import Registration from './Registration'
import View from './View'
import fbase from './Fire'
import Toast  from  './Toast'
import { toast } from 'react-toastify'

import Filter1 from './Filter1'
import CustomerView from './CustomerView'

import Seeorders from './Seeorders'
import Listorder from './Listorder'



export default function App() {


  
  const [first, setfirst] = useState([])
  const [counterItem,setcounterItem]=useState(0)
  var arr=[]
  const AddItem=(event)=>{
    
    
    event.target.style.backgroundColor='green'
    arr=JSON.parse(localStorage.getItem("record"))
   
   
   var fate=new Date()
    fbase.child(`key/${event.target.id}`).on("value",(data)=>{
      if (data.val()!==null) {
          setfirst({...data.val()})
          var obj={}
          obj.Name=data.val().name
          obj.Price=data.val().price
          obj.Category=data.val().category
          obj.Path=data.val().path
          obj.Type=data.val().type
          obj.Quantity=1
          obj.date=fate.toDateString()
          
      
         
          if(data.val().name===arr.Name){
            alert('hi')
          }
   if(arr==null){
      arr=[]
   }
   arr.push(obj)
   
          localStorage.setItem("record",JSON.stringify(arr))
          console.log(first)
          
      }else{
          setfirst({})
      }
    
      
    })
  
    setcounterItem(arr.length)
    
  
  }
  
 useEffect(()=>{
  arr=JSON.parse(localStorage.getItem("record"))

  setcounterItem(arr.length)
 },[])
 arr=JSON.parse(localStorage.getItem("record"))
const Show=()=>{
     toast(
      
     
       <div >
  
  <table className="  table bg-dark text-light my-5  mx-3" id="table">
  
    <thead>
      <th>Name</th>
      <th>price_ </th>
      
     
    </thead>
    <tbody>
      {
        arr.map((ele,index)=>{
      
        return( 
          <tr>
            <td>{ele.Name}</td>
            <td>{ele.Price}</td>
            <td><img alt='...' src={ele.Path} height='50px'></img></td>
            
          
          </tr>
        )
      } )
      
      }
      <td id="sum"></td>
    </tbody>
  </table>
 
</div>
     ,
      {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
}
const remove=(event)=>{
  
  arr=JSON.parse(localStorage.getItem("record"))
  arr.map((ele,index)=>{
    if(event.target.name===ele.Name){
      arr.splice(index,1)
            
      localStorage.setItem("record",JSON.stringify(arr)) 
      setcounterItem(arr.length)
    }
    
        var a=event.target.parentNode
        var b=a.childNodes[3]
        b.style.backgroundColor='black'
    return( <></>)
  } )
}
  return (
    
    <div>
    
     <Toast/>
     <BrowserRouter>
    
     <Routes>
     <Route path='/' element=<CustomerView  AddItem={AddItem}  remove={remove} show={Show} count={counterItem} />/>
     <Route path='/page/:id' element=<Page/>/>
     <Route path='/listorder/:id' element=<Listorder/>/>
     <Route path='/registration' element=<Registration />/>
     <Route path='/LoginPage' element=<LoginPage  show={Show}/>/>
     <Route path='/View' element=<View  show={Show} AddItem={AddItem}   count={counterItem}/>/>
     <Route path='/Baverages' key="Baverages" element=<Filter category='Baverages' AddItem={AddItem} remove={remove}  count={counterItem} show={Show}/>/>
     <Route path='/South-indian' key="South-india" element=<Filter category='South-indian' AddItem={AddItem} remove={remove} count={counterItem} show={Show}/>/>
     <Route path='/Italian' key="Italian" element=<Filter category='Italian' AddItem={AddItem}  remove={remove} count={counterItem} show={Show}/>/>
     <Route path='/Chinese' key="Chinese" element=<Filter category='Chinese' AddItem={AddItem}  remove={remove} count={counterItem} show={Show}/>/>
     <Route path='/fast-food' key="fast-food" element=<Filter category='fastfood' AddItem={AddItem}  remove={remove} count={counterItem} show={Show}/>/>
     <Route path='/Veg' key="veg" element=<Filter1 type='Veg' AddItem={AddItem} count={counterItem}  remove={remove} show={Show}/>/>
     <Route path='/NonVeg' key="nonveg" element=<Filter1 type='NonVeg' AddItem={AddItem}   remove={remove} count={counterItem} show={Show}/>/>
     <Route path='/cart' key="Cart" element=<Cart first={first}/>/>
     <Route path='/Seeorders' key="Seeorders" element=<Seeorders first={first}/>/>
   
     </Routes>
     </BrowserRouter>
     
    </div>
   
  

  )
  
}
