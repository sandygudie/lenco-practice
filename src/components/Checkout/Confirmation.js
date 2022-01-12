import React from 'react'
import './Checkout.css';

import styled from 'styled-components';
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

function Confirmation() {
 

    return (
      <>
       <ProductConsumer>

       {(value) => {
    // console.log(value)
   const { cart, cartTotal,cartSubTotal, } = value;
    return (

        <div className="confirmation">

<div className= "steps-indicator">
<ul class="_1Lo2h "><li class="_2Jtxm _2ZUAI "><span class="_2JvrO"><svg width="1.5rem" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5L4.5 7.5L12 1" stroke="white" stroke-width="1.5"></path></svg></span><div class="_1hzhf ">Delivery</div></li><li class="_2Jtxm _35Ago "><span class="_2kL0S">2</span><div class="_1hzhf ">Confirmation</div></li><li class="_2Jtxm "><span class="_2kL0S">3</span><div class="_1hzhf ">Payment</div></li><li class="_2Jtxm "><span class="_2kL0S">4</span><div class="_1hzhf ">Finish</div></li></ul>
        </div>

<form>
        <div className="bill">
       <div className="orderSummary">
           <h5>Order Summary</h5>
           <TableStyle >
      <table class="table text-center">
        <thead>
          <tr>
            <th className="text-left" scope="col">
              Items
            </th>
            <th scope="col">Qty</th>
            <th   scope="col">Price</th>
          </tr>
        </thead>
      
        <tbody>
           
          {cart.map((item) => {
            return (
                <>
                 <tr>
              <td className="text-left">{item.code}</td>
              <td>{item.count}</td>
              <td style={{color:"red",fontWeight:"bold"}}>{item.price}</td>
              </tr>
              </>
            );
          })}

        </tbody>
      </table>
    </TableStyle>



       </div>


       <div className="Delivery">
       <h5>Delivery</h5>
       <div> 
           <h5>Address</h5>
           <br></br>
           <p> Addresss</p>
       </div>
       <div> 
           <h5>Delivery Options</h5>
           <br></br>
           <p>Standard shipping: <span class="free">(free, 2-3 business days)</span> </p>
       </div>
       </div>

       </div>

       <hr/>

       <div className="billing">
           <p className="newyear">
               NEWYEAR8%<i className="fas fa-check"></i>
           </p>
           <div className="subtotal">
               <p>  SUBTOTAL</p>
         <span>{cartSubTotal} </span>
           </div>
           <div className="subtotal">
               <p>  SHIPPING</p>
         <span>Free </span>
           </div>

           <div className="subtotal">
               <p>  GRAND TOTAL</p>
         <span>{cartTotal} </span>
           </div>

       </div>
       <div class="btns">
       <Link to="/delivery"> Back</Link>
       <Link to="/payment"> Next</Link>
       
        </div>
        </form>
        </div>
        
    )
 }}
      </ProductConsumer>
      </>
    );
  }





const TableStyle = styled.div`
.table{
    font-size:13px;
    color: #dddddd
}
.table td {
    border-top: none !important;
    padding: 0.75em 0em !important
   
}
.table thead th {

    border: none !important;
    padding: 0em 0em !important
  
}
tr:nth-child(even) {
    background-color: #dddddd;
  }

`

export default Confirmation
