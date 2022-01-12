import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { ProductConsumer } from "../../context";

export const ProductList = ({ value,item }) => { 
  //  const { id, title, code, size,  img, price, total, count } = item;
  const { newstoreProducts, handleDetail } = value;

  return (
    <>
       <CardItemstyle>
            <Carousel>
{newstoreProducts.map((item) => {
            return (
              <div  onClick={() => {handleDetail(item.id)}}  >
    
                 <img data-set={item.id} key={item.id} src={item.img} alt="product" />
                {/* <CartItem key={item.id} item={item} value={value} /> */}
          
              </div>
            );
          })}
      </Carousel>
          </CardItemstyle>

      {/* {detailProducts.map((itemnre) => {
        return (
          <CardItemstyle>
            <Carousel>
              {itemnre.subimages.map((item) => {
                return (
                  <>
                    <img src={item} alt="product" />
                  </>
                );
              })}
            </Carousel>
          </CardItemstyle>
        );
      })} */}
    </>
  );
};

const CardItemstyle = styled.div`
  width: 40%;
  img {
    width: 100%;
    height: 100%;
  }
`;
