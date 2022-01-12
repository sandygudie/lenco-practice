import React, { Component } from "react";

// import CartColumns from "./CartColumn";
import ReturnCart from "./ReturnCart";
import { ProductConsumer } from "../../context";
// import EmptyCart from "./EmptyCart"
import styled from "styled-components";
import CartList from "./CartList";
import CartHeader from "./CartHeader";
import Modal from "../Modal";
import "./Cart.css";
export default class Cart extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {(value) => {
    // console.log(value)
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
      </>
    );
  }
}
