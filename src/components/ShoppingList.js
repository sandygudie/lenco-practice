import React, { Component } from "react";

import { ProductConsumer } from "../context";
import { ProductList } from "./ProductList";
import { ProductInfo } from "./ProductInfo";
import styled from "styled-components";
import Navbar from "./Navbar";
import Cart from "./Cart/Cart";
class ShoppingList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Navbar />

        <Shoppingstyle>
          <ProductConsumer>
            {(value) => {
              return (
                <React.Fragment>
                  <ProductList value={value} />
                  <ProductInfo value={value} />

                  <Cart />
                </React.Fragment>
              );
            }}
          </ProductConsumer>
        </Shoppingstyle>
      </>
    );
  }
}

const Shoppingstyle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 3em auto;
  background-color:white;
  padding:3em 0em;
`;

export default ShoppingList;
