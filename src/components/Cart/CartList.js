import React from "react";
import CartItem from "./CartItem";
import styled from 'styled-components';


export default function CartList({ value }) {
  const { cart } = value;

  return (
    <TableStyle className="container-fluid">
      <table class="table text-center">
        <thead>
          <tr>
            <th className="text-left" scope="col">
              Items
            </th>
            <th scope="col">Size</th>
            <th scope="col">Quanitiy</th>
            <th className="text-right"  scope="col">Price</th>
          </tr>
        </thead>
        <br></br>
        <br></br>
        <tbody>
          {cart.map((item) => {
            return (
              <tr>
                <CartItem key={item.id} item={item} value={value} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableStyle>
  );
}
const TableStyle = styled.div`
.table td {
  vertical-align: middle;
    border-top: none !important;
}
.table thead th {
  vertical-align: middle;
    border-top: none !important;
    border-bottom: 1px solid #dee2e6;
}

`