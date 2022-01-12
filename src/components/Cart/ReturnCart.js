import React from "react";
import { Link } from "react-router-dom";

export default function ReturnCart({ item, value }) {
  // console.log(value)
  return (
    <div className=" btn__container row  align-items-center text-capitalize text-center">
      <Link to="/">
        <button  onClick={() => value.closeModal()}>
          Back to shop
        </button>
      </Link>

  <Link to="/delivery">
        <button  onClick={() => value.checkout()} >
        Checkout
        </button>
      </Link>
      
    </div>
  );
}
