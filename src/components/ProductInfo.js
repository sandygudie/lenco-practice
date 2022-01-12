// src/reusable/image-gallery.component.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const ProductInfo = ({ value }) => {
  // console.log(value.detailProducts)
  const { id, title, code, size, img, price, total, count } = value.detailProducts;
  const { increment, decrement,handleColor,handleSize, addToCart, openModal, detailInfo, buttonClick } = value;
  console.log(buttonClick)

  return (
  <>

     { detailInfo.map((item)=>{
       
     return (
      <ProductStyle>
      <ul>
      <li>Home</li>
      <li>All Categories</li>
      <li>Men's clothings</li>
    </ul>

    <img className="star" src="images/stargolden.jpeg"></img>

    <p className="desc">
      {" "}
      Super Oversized T-shirit With Raw Sleeves In Brown
    </p>
    <p className="price">${item.price}</p>

    <div className="color">
      <p>Pick a color</p>
      <div>
       {item.color.map((colorname)=>
        //  console.log(colorname)
(<span style={{backgroundColor : colorname, padding:"0px 10px", borderRadius: "100%"}} 
 data-color={colorname} onClick={(e) => handleColor(e)}>


 </span>)
      
      )} 
      </div>
    </div>

    <div className="size">
      <div style={{display : "flex", justifyContent: "space-between", width: "70%"}}> 
       <p>Size</p>
      <p style={{color : " #f62f5e", }}>Size guide</p>
</div>
    
      <div>
      {item.size.map((sizename)=>
        //  console.log(colorname)
(<span data-size={sizename} id= "sizebtn" onClick={(e) => handleSize(e)}>{sizename}</span>)
      
      )} 
      </div>
    </div>

    <div className="quantity">
      <p>Quantity</p>
      <div>
        {/* <span className="fas fa-minus" onClick={() => decrement(id)}></span>
        <span className="btncount">{buttonClick? count : "-"}</span>
        <span className="fas fa-plus" onClick={() => increment(id)}></span> */}
         <span className="btn btn-light mx-1 " onClick={() => decrement(id)}>
         <i className = "fas fa-minus" ></i>
          </span>
          <span className="btncount">{buttonClick? count : "-"}</span>
          <span className="btn btn-light mx-1 " onClick={() => increment(id)}>
          <i className = "fas fa-plus" ></i>
          </span>
      </div>
    </div>

    <div className="btn__container">
      <button
        onClick={() => {
          addToCart();
          openModal();
        }}
      >
        {" "}
        Add to Cart
      </button>

      <a>Add to wishlist</a>
    </div>
  </ProductStyle>
     )
     })}

</>
  );
};




//  const ProductBtn = ({ value }) => {

//   return (
//     <>
    
//     {value.detailProducts.map((item)=>{



//     })}
//     </>
//   )
// }
const ProductStyle = styled.div`
  width: 40%;

  ul {
    display: flex;
    justify-content: space-between;
  }
  .star {
    width: 30%;
    margin: 20px 0px;
  }
  .color,
  .size ,
  .quantity
  {
    margin: 15px 0px;
  }
  .color p,
  .size p,
  .quantity p
   {
    font-size: 20px;
    
    padding: 0.5em 0em;
    
}
.color span,
.size span
 {
  font-size: 15px;
  margin-right: 1em;
  
}

.quantity div{
  display:flex;
}

#sizebtn{
  padding: 0.2em 1em;
  background-color: #8080802b;
}

#sizebtn:focus{
 
  background-color: #f62f5e;
}
  
  .desc {
    font-size: 30px;
    font-weight: bold;
    color: black;
  }
  .price {
    font-size: 30px;
    color:#f62f5e;
  }

 
`;
