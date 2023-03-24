import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import fbase from './Fire'
import { Link, useNavigate} from 'react-router-dom'
export default function Seeorders() {
    var navigate=useNavigate()

    const [first, setfirst] = useState({})
  
    useEffect(() => {
        fbase.child('orders').on("value", (data) => {
            if (data !== null) {

                setfirst({ ...data.val() })

            } else {
                setfirst({})
            }

        })

        // var array = []
        // fbase.child('orders').on("value", function(snapshot){
        //     Object.keys(snapshot.val()).map(k => {
        //         if(array.indexOf(k)){
        //             console.log(snapshot.val())
        //             setfirst(snapshot.val())
        //         }
        //     })
        // })
    }, [])
    
    // const View = (event) => {
    //     //   fbase.child(`orders/${event.target.id}`).on("value", (data) => {
    //     //     if (data !== null) {

    //     //         setsecond({ ...data.val() })
               

    //     //     } else {
               
    //     //     }

    //     // })
      
    //     Object.keys(first).map((ele) => {

    //         var arr=[first[ele]]
            
    //         console.log(arr)
    //         navigate(`/listorder/${ele}`)
    //     //    navigate('/listorder')
    //         return(<>{}</>)
    //     })

    // }

    return (
        <div>
            <table className='table bg-dark text-light'>
                <thead>
                    <th>Order id</th>
                    <th>date</th>
                    <th>view</th>

                </thead>
                <tbody>
                    {Object.keys(first).map((ele,index) => {

                       // var arr = first[ele]
                       // console.log(arr)
                        // arr.map((id,index)=>{
                        //   return(<div>{console.log(id.date)}</div>)
                        // })
                        return (<tr><td>{ele}</td><td>{first[ele][0].date}</td><td><Link to={`/listorder/${ele}`}><button className='btn btn-info'  id={ele}>view</button></Link></td></tr>)

                    })}
                </tbody>

            </table>
           <div>
            <div id='store'>

            </div>
           </div>
        </div>
    )
}
