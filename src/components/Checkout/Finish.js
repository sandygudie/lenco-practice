import React from 'react';

import { Link } from "react-router-dom";
import plane from  "../images/airplane.png"

function Finish() {
    return (
        <>
        <div className="finish">
        <ul class="_1Lo2h "><li class="_2Jtxm _2ZUAI "><span class="_2JvrO"><svg width="1.5rem" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5L4.5 7.5L12 1" stroke="white" stroke-width="1.5"></path></svg></span><div class="_1hzhf ">Delivery</div></li><li class="_2Jtxm _2ZUAI "><span class="_2JvrO"><svg width="1.5rem" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5L4.5 7.5L12 1" stroke="white" stroke-width="1.5"></path></svg></span><div class="_1hzhf ">Confirmation</div></li><li class="_2Jtxm _2ZUAI "><span class="_2JvrO"><svg width="1.5rem" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.5L4.5 7.5L12 1" stroke="white" stroke-width="1.5"></path></svg></span><div class="_1hzhf ">Payment</div></li><li class="_2Jtxm _35Ago "><span class="_2kL0S">4</span><div class="_1hzhf ">Finish</div></li></ul>
            <img src ={plane} alt ="plane"/>

            <div className="message">
                <h1>Success!</h1>
                <p>Your item will be ship shortly,</p>
                <p>You will get email with details</p>
            </div>

            <div class="btns">
                 <Link to="/" className="ml-auto">
                 Back to Shop
      </Link>
            {/* <button>Back to Shop</button> */}
        </div>
        </div>
        </>
    )
}

export default Finish
