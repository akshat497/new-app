import React, { useState } from 'react'
import {createContext} from 'react'
export var create=createContext()
export default function Context({children}) {
    
    const [remove, setremove] = useState({
        name:' Add to cart',
        
    })
  return (
    <create.Provider value={{remove,setremove}}>
        {children}
    </create.Provider>
  )
}

