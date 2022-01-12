import React from 'react'
import { ProductConsumer } from "../../context"
import Checkout from './Checkout'
function Maincheckout() {
    return (
        <>
         <ProductConsumer>
          {(value) => {
   
            return (
              <React.Fragment>
                
                 <Checkout value={value} />
                
              </React.Fragment>
            );
          }}
        </ProductConsumer>
        </>
    )
}

export default Maincheckout
