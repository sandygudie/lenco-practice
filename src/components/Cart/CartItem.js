import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, code, size,  img, price, total, count ,color} = item;
  const { increment, decrement,  removeitem,colorstate,sizestate } = value;

  return (
    <>
      <td className=" d-flex">
        <div className="cart__img">
          <img src={img} className="img-fluid" alt="product" />
        </div>

        <div className=" img__caption ">
          <p className="color-title"  style={{ fontWeight: "Bold", textTransform:"capitalize", fontSize:"10px"}}>{color}{title}</p>
          <p>{code}</p>

          <div className="img__remove" onClick={() => removeitem(id)}>
            <i
              style={{ color: "red", marginRight: "0.5rem" }}
              class="fas fa-times"
            >
              {" "}
            </i>
            Remove
          </div>
        </div>
      </td>

      <td>
        {size.map((item) => {
          return <p>{item}</p>;
        })}
      </td>

      <td>

     
        <div className="quantity">
          <span className="btn btn-light mx-1 " onClick={() => decrement(id)}>
         <i className = "fas fa-minus" ></i>
          </span>
          <span className="btncount btn  mx-1">{count}</span>
          <span className="btn btn-light mx-1 " onClick={() => increment(id)}>
          <i className = "fa fa-plus" ></i>
          </span>
        </div>
      </td>

      <td className="text-right">
        <i class="fas fa-euro-sign">{total}</i>
      </td>
    </>
  );
}
