import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';

import ShoppingList from "./components/ShoppingList"

// import Cart from "./components/Cart/Cart"
import CheckOut from "./components/Checkout/Checkout"

import Delivery from "./components/Checkout/Delivery"
import Payment from "./components/Checkout/Payment"
import Finish from "./components/Checkout/Finish"
import Confirmation from "./components/Checkout/Confirmation"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App= ()=> {
  return (
   
  <React.Fragment>
<Switch>
 <Route path ="/" exact component ={ShoppingList} />
 <Route path ="/delivery" exact component ={Delivery} />
 {/* <Route  component ={CheckOut} /> */}
 <Route path ="/confirmation" exact component ={Confirmation} />
 <Route path ="/payment" exact component ={Payment} />
 <Route path ="/finish" exact component ={Finish} />

 
</Switch>

 </React.Fragment>

    );
  
}

export default App;