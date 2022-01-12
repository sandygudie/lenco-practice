import React, {useState} from 'react'
import './Checkout.css';
import Confirmation from "./Confirmation"

import CountrySelect from 'react-bootstrap-country-select';


import { Button,Form,Col } from 'react-bootstrap'
import { ProductConsumer } from "../../context";


function Delivery(props) {


  const [ value, setValue ] = React.useState(null);



  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.preventDefault()
    }else{
      // event.preventDefault()
      // <Confirmation/> 
      props.history.push("/confirmation")
        
     
    }

    setValidated(true);
   
  };

    return (
      <>
       <ProductConsumer>

       {(value) => {
    console.log(value)
            return (

              <>
      <div className ="delivery">

        <div className= "steps-indicator">
        <ul class="_1Lo2h "><li class="_2Jtxm _35Ago "><span class="_2kL0S">1</span><div class="_1hzhf ">Delivery</div></li><li class="_2Jtxm "><span class="_2kL0S">2</span><div class="_1hzhf ">Confirmation</div></li><li class="_2Jtxm "><span class="_2kL0S">3</span><div class="_1hzhf ">Payment</div></li><li class="_2Jtxm "><span class="_2kL0S">4</span><div class="_1hzhf ">Finish</div></li></ul>

        </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
             
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
             
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
         
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
         
        
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        {/* <Form.Group className="country">
        <Form.Label>Country</Form.Label>
        <CountrySelect
  value={value}
  onChange={setValue}  
/>
        </Form.Group> */}
         <CountrySelect
  value={value}
  onChange={setValue}  />
        

        <Form.Group>
          <Form.Check
            required
            label="My billing information is the same as my delivery information"
            feedback="You must agree before submitting."
          />


        </Form.Group>

        <hr/>
        <div>
        <p> Delivery Options</p>

        <div className="shipping">

        <div>
         <input type="radio"  /> <span> Standard shipping: <span class="free">(free, 2-3 business days)</span> </span>
       </div>

        <div>
        <input type="radio"  /> <span> Express shipping: <span class="business">($28, 2-3 business days)</span> </span>
        </div>

        </div>

        </div>

        <div class="btns">
        {/* <Link to="/">Back</Link> */}
        <Button type="submit">Next Stop</Button>
        </div>
 
      </Form>
      

      
     

      </div>
      </>
           );
          }}
      </ProductConsumer>
      </>
    );
  }


export default Delivery
