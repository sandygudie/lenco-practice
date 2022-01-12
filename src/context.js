import React, { Component } from "react";
import {  storeProducts, detailInfo} from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  
  state = {
    detailInfo:detailInfo,
    newstoreProducts: storeProducts,
    products: [],
    detailProducts:[],
    cart: [],
    modalOpen: false,
    // modalProduct:[],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    buttonClick:false,
    colorstate:"black",
    sizestate:[]
  };

  componentDidMount() {
    this.setProducts();
    // console.log(document.getElementsByTagName("li"))
    // console.log(element.classList.contains('.selected '))
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.products !== this.state.products) {
  //     const product = this.getItem();
  //     // console.log(product)

  //     let tempproduct = [{ ...product }];
  //     this.setState(() => {
  //       return { detailProducts: tempproduct };
  //     });
  //   }
  // }

  setProducts = () => {
    let tempProducts = [];
    this.state.newstoreProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
      console.log(singleItem, tempProducts)
    });

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  // setProducts = () => {
  //   let tempProducts = [];
  //   this.state.newstoreProducts.forEach((item) => {
  //     const singleItem = { ...item };
  //     tempProducts = [...tempProducts, singleItem];
  //   });
  //   let newdetailProducts = Object.assign({}, ...detailProducts); // removes the extra object

  //   tempProducts = [...tempProducts, newdetailProducts];

  //   this.setState(() => {
  //     return { products: tempProducts };
  //   });
  // };

  // handleDetail = () => {
  // //  const product =  this.state.products.find((item) => item.id === 4 )

  // };

  
  // getItem = () => {
  //   const product = this.state.products.find((item) => item.id === 4);
  //   return product;
  // };


  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);

    // console.log(product);
    return product;
  };

  handleDetail = (id) => {

    this.setState(() => {
      return {
        buttonClick: true,
      };
    });

    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    // console.log(index)
    product.count = 1;
    const price = product.price;
    product.total = price;

    // console.log(product);
    this.setState(
      () => {
        return {
          products: [...tempProducts],
          detailProducts: product,
        };
      },
      () => {
        this.addTotals();
      }
    );

   




  };
  
  addToCart = (id) => {


    let idnew = document.querySelector("li.slide.selected").lastChild.lastChild.getAttribute("data-set") 
    
    let newid = Number(idnew)

    let tempProducts = [...this.state.products];
  // const item =  this.state.products.find((item) => item.id === id)
    const index = tempProducts.indexOf(this.getItem(newid));
     console.log(index, tempProducts)
    const product = tempProducts[index];
   
    const tempMyObj = Object.assign({}, product);
   
    const { length } = tempProducts ;
    
    tempMyObj.color = this.state.colorstate
    
    tempMyObj.size = this.state.sizestate
    tempMyObj.id = length + 1;

    
    this.setState(
      () => {
        return {
           products: [...tempProducts, tempMyObj],
           cart: [...this.state.cart, tempMyObj],
        };
      },

      () => {
        this.addTotals();
        this.openModal()
      },
      
    );
  
    // if (temp) {
    //   this.setState(
    //     () => {
    //       return {
         
    //         products: [...tempProducts],
    //         cart: [...this.state.cart],
    //       };
    //     },
    //     () => {
    //       this.addTotals();
    //     }
    //   );
    // } else {
    //   this.setState(
    //     () => {
    //       return {
    //         // modalProduct: [...this.state.cart, product],
    //         products: [...tempProducts, tempMyObj],
    //         cart: [...this.state.cart, tempMyObj],
    //       };
    //     },
    //     () => {
    //       this.addTotals();
    //     }
    //   );
    
   
  };

 

  handleColor = (e) => {
    const newcolor = e.target.getAttribute("data-color");

    console.log(newcolor);
    // this.setState(() => {

    // })
    this.setState(() => {
      return { colorstate: newcolor };
    });
    return;
  };

  getColor = (getcolor, id) => {
    const product = this.state.products.find(
      (item) => item.color === getcolor && item.id === id
    );
    console.log(product);
    return product;
  };

//  To add single size
  handleSize = (e) => {
    // document.getElementById("sizebtn").addEventListener("click")
    const newsize = e.target.getAttribute("data-size");
let sizearray = []
// this.state.sizestate.forEach((item) => {
//   // const singleItem = { ...item };
//   sizearray = [...sizearray, newsize];
// });
if(!newsize){
  console.log("false")
}
sizearray = [...this.state.sizestate, newsize];
// sizearray.concat(newsize)
    console.log(newsize);
    console.log(sizearray);
    // this.setState(() => {

    // })
    this.setState(() => {
      return { sizestate: sizearray};
    });
    return;
  };


  // TO add mutiple size
  increment = (id) => {
    // let tempCart = [...this.state.cart];
    let tempCart = [...this.state.products];

    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    // console.log(product)
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return { products: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.products];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeitem(id);
      
      
    } else {
      product.total = product.count % product.price;
      this.setState(
        () => {
          return { products: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
   
  };

  removeitem = (id) => {
    let tempProducts = [...this.state.products];

    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    if(tempCart.length === 0){

      this.closeModal();
    }
  
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          // products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  checkout =()=>{
    const cartitems = this.state.cart
    localStorage.setItem("cart", JSON.stringify(cartitems));
  }
  
  deliveryitems = ()=>{
    const orderitems =localStorage.getItem("cart");
    console.log(orderitems)
    return orderitems

  }
  // modalOpen = () => {
  //   this.setState({ modal: true });
  // };

  // modalClose = () => {
  //   this.setState({
  //     modal: false,
  //   });
  // };
  openModal = () => {
    this.setState(() => {
      return {
        modalOpen: true,
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { 
        modalOpen: false,
        sizestate:[],
        colorstate:"black"
      
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          deliveryitems: this.deliveryitems,
          closeModal: this.closeModal,
          removeitem: this.removeitem,
          increment: this.increment,
          decrement: this.decrement,
          clearCart: this.clearCart,
          handleColor: this.handleColor,
          handleSize: this.handleSize,
         checkout :this.checkout,
         deliveryitems :this. deliveryitems
          // dataProduct :this.state.newstoreProducts
        }}
      >
        {this.props.children}
        {/* {console.log(this.props.children)} */}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
