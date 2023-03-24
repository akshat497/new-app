import {React,useState} from 'react'
import { toast } from 'react-toastify'
import fbase from './Fire'
export default function Registration(props) {

   
    const [first, setfirst] = useState(
        {  
             name:'',
             price:'',
             category:'Category',
             type:'type',
             path:''
             
        }
    )
    
    
    // const [second, setsecond] = useState('')
    const updateInput=(event)=>{
        // document.getElementById('category').value=event.target.id
        setfirst({...first,category:event.target.id})
        
      }
   const choosee=(event)=>{
  
    setfirst({...first,[event.target.name]:event.target.value})
    
   
   }
 
  const upload=()=>{
    if(first.name===''||first.price===''||first.price==='0'||first.category==='category'||first.type==='type'||first.path===''){
      toast('fill all fields',{autoClose:1000})
      return(<></>)
    }
    fbase.child('key').push(first)
   //  fbase.child('key').push(second)
   }  

   const onImageChange=(event)=>{
    if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
       const reader= new   FileReader();
        reader.readAsDataURL(img)
        reader.onload=function()
                    {
                         setfirst({...first,path:reader.result})
                    }
   }}
   const updateInputType=(event)=>{
    setfirst({...first,type:event.target.id})
   }
  return (
    <div className='register'>
        <div className='container ' id='container'>
    <form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Item name</label>
      <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={choosee}/>
   </div>
   <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Item price</label>
      <input type="number" className="form-control" id="price" name="price" aria-describedby="emailHelp" onChange={choosee}/>
   </div>
   {/* <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Item category</label>
      <input type="email" className="form-control" id="category" name="category" aria-describedby="emailHelp" onChange={choosee}/>
   </div> */}
   
   <div className="dropdown my-3">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   {first.category}
  </button>
  <ul className="dropdown-menu">
 
 <div onClick={updateInput} id="fastfood">Fast-food</div>
 <div onClick={updateInput} id="South-indian">South-indian</div>
 <div onClick={updateInput} id="Baverages">Baverages</div>
 <div onClick={updateInput} id="Italian">Italian</div>
 
 <div onClick={updateInput} id="Chinese">Chinese</div>
 
  </ul>
</div>
    <div className="dropdown my-3">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   {first.type}
  </button>
  <ul className="dropdown-menu">
 
 <div onClick={updateInputType} id="Veg">Veg</div>
 <div onClick={updateInputType} id="NonVeg">NonVeg</div>
 
 
  </ul>
</div>
    

    <button type="submit" className="btn btn-outline-info" onClick={upload}>Upload</button>
    <input type="file" name="myImage" onChange={onImageChange}  className="btn" required/>
    <img src={first.path} alt='' id='img' />
  </form>
  </div>
    </div>
  )
}
