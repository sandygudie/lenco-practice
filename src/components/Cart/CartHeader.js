import React from 'react'

export default function CartHeader({value}) {
    const {cart} = value;
  
    return (
        <div className="container-fluid">
             <h2>{cart.length}items in the list</h2> 
            
        </div>
    )
}
