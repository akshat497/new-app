import {React,useEffect, useState} from 'react'
import fbase from './Fire'
import { Link, useParams } from 'react-router-dom'
export default function Listorder() {
    const [first, setfirst] = useState({})
    
    let {id}=useParams()
    const sum=()=>{
      
      
        var table = document.getElementById("table"), sumVal = 0;
              
        for(var i = 0; i < table.rows.length; i++)
        {
            sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
        }
        
       var Sum=document.getElementById('sum').innerHTML=` ${sumVal}`
     
        
        console.log(Sum);
        
        
        
      }
useEffect(()=>{
    
      fbase.child(`orders/${id}`).on("value", (data) => {
        if (data !== null) {

            setfirst({ ...data.val() })
               console.log(first)

        } else {
            setfirst({})
        }

    })
},[])
  return (
    <div>
        <table className='table table-dark bg-dark' id='table'>
            <thead>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Type</th>
                <th>date</th>
            </thead>
            <tbody>
                {
                    Object.keys(first).map((id,index)=>{

                        return(<tr>
                            <td>{first[id].Name}</td>
                            <td>{first[id].Category}</td>
                            <td>{first[id].Price}</td>
                            <td>{first[id].Type}</td>
                            <td>{first[id].date}</td>
                            
                        </tr>
                        
                        
                        )
                        
                    })
                    
                }
            </tbody>
            <td><button onClick={sum} className='btn btn-danger'>total</button></td>
            <td id=''></td>
            <td id='sum'></td>
        </table>
    </div>
  )
}
