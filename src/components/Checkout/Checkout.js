import React, {useState} from 'react'
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';
// import Delivery from "./Delivery"
// import Finish from "./Finish"
// import Payment from "./Payment"
// import Confirmation from "./Confirmation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ProductConsumer } from "../../context";

const Checkout = ({ value}) => {


  return (
    <div className="checkout">

{/* //  <Delivery/>
//  {/* <Confirmation value={value}/>
//  <Payment value={value}/> 
//  <Finish/> 

*/}
{/* 
        <ProductConsumer>
          {(value) => {
    console.log(value)
            return (
              <React.Fragment>
                <Modal
                  show={value.modalOpen}
                  handleClose={(e) => value.closeModal(e)}
                >
                  <div className="cart__box">
                    <CartHeader value={value} />
                    <br></br>

                    <CartList value={value} />
                  </div>
                  <div className="button__container">
                    <ReturnCart value={value} />
                  </div>
                </Modal>
              </React.Fragment>
            );
          }}
        </ProductConsumer>
     */}

</div>
   
)
};

export default Checkout;