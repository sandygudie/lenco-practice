import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
import mastercard from "../images/mastercard.svg";
import paypal from "../images/paypal.svg";
import visacard from "../images/visacard.svg";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import { Button,Form,Col } from 'react-bootstrap'


function Payment(props) {

   
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      
      const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.preventDefault()
    }else{
      // event.preventDefault()
      // <Confirmation/> 
      props.history.push("/finish")
        
     
    }
  
      setValidated(true);
    };

    return (
      <>
       <ProductConsumer>

       {(value) => {
  
   const { cart, cartTotal,cartSubTotal, } = value;
  return (

    <div class="payment">

 <div className= "steps-indicator">
      <ul class="_1Lo2h "><li class="_2Jtxm _2ZUAI "><span class="_2JvrO"><svg width="1.5rem" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5L4.5 7.5L12 1" stroke="white" stroke-width="1.5"></path></svg></span><div class="_1hzhf ">Delivery</div></li><li class="_2Jtxm _2ZUAI "><span class="_2JvrO"><svg width="1.5rem" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5L4.5 7.5L12 1" stroke="white" stroke-width="1.5"></path></svg></span><div class="_1hzhf ">Confirmation</div></li><li class="_2Jtxm _35Ago "><span class="_2kL0S">3</span><div class="_1hzhf ">Payment</div></li><li class="_2Jtxm "><span class="_2kL0S">4</span><div class="_1hzhf ">Finish</div></li></ul>
      </div>

      {/* <div className=" payment-card">
        <div className="paycard">
          <div className="visa-master-card">
            <img src={visacard} />
            <img src={mastercard} />
          </div>
          <input name="payment" type="radio" /> <span>Pay $ {cartTotal} with credit card</span>
        </div>

        <div class="paypal-card">
          <img src={paypal} /><br></br>
          <input name="payment" type="radio" /> <span>Pay$ {cartTotal} with Paypal</span>
        </div>
      </div> */}

      <div className="payment-details">

      <Form noValidate validated={validated} onSubmit={handleSubmit} >

      <Form.Row className=" payment-card">
        <div className="paycard">
          <div className="visa-master-card">
            <img src={visacard} />
            <img src={mastercard} />
          </div>
          
          <input  type="radio" class=" form control" id="validationFormCheck2" name="radio-stacked" required /> <span>Pay $ {cartTotal} with credit card</span>
        
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a number
            </Form.Control.Feedback>

      
        </div>

        <div class="paypal-card">
          <img src={paypal} /><br></br>
          <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required /> <span>Pay$ {cartTotal} with Paypal</span>
          {/* <input class=" form control" id="validationFormCheck3" name="radio-stacked" required type="radio" />  */}
       
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a number
            </Form.Control.Feedback>

        </div>

        


      </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Cardholder's Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Jane Doe"
            //   defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Card number</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="***** ***** *****"
            //   defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a number
            </Form.Control.Feedback>
          </Form.Group>
         
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Valid thru</Form.Label>
            <Form.Control type="number" placeholder="MM/YY" required />
            <Form.Control.Feedback type="invalid">
              Please provide a number
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>CVV/CVC*</Form.Label>
            <Form.Control type="number"  required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04" id="cvv-code" >
            <p> CVV or CVC is the card secuirtiy code, unique three digit number on the background
                of your card separate from it's number.
            </p>
           
          </Form.Group>
          </Form.Row>
          <div class="btns">
        {/* <button type="submit">Back</button> */}
        <Link to="/confirmation">Back</Link>
        <Button type="submit">Next Stop</Button>
      </div>
      </Form>
      </div>

      
    </div>
  )
       }}
      </ProductConsumer>
      </>
    );
}

export default Payment;
