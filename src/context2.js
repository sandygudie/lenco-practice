import React, { Component } from "react";
import { detailProducts, storeProducts} from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    newstoreProducts: storeProducts,
    products: [],
    detailProducts:detailProducts,
    cart: storeProducts,
    // modalOpen: false,
    // modalProduct:[],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    // modal: false,
    colorstate:" ",
    sizestate:[]
  };

  componentDidMount() {
    this.setProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products !== this.state.products) {
      const product = this.getItem();
      // console.log(product)

      let tempproduct = [{ ...product }];
      this.setState(() => {
        return { detailProducts: tempproduct };
      });
    }
  }

  setProducts = () => {
    let tempProducts = [];
    this.state.newstoreProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    let newdetailProducts = Object.assign({}, ...detailProducts); // removes the extra object

    tempProducts = [...tempProducts, newdetailProducts];

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  // handleDetail = () => {
  // //  const product =  this.state.products.find((item) => item.id === 4 )

  // };

  modalOpen = () => {
    this.setState({ modal: true });
  };

  modalClose = () => {
    this.setState({
      modal: false,
    });
  };

  getItem = () => {
    const product = this.state.products.find((item) => item.id === 4);
    return product;
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));

    const product = tempProducts[index];

    product.inCart = true;

    this.setState(
      () => {
        return {
          cart: this.state.products,
        };
      },

      () => {
        this.addTotals();
      }
    );
  };

  openModal = () => {
    this.setState(() => {
      return {
        modalOpen: true,
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
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
//  To add single size
  handleSize = (e) => {
    // document.getElementById("sizebtn").addEventListener("click")
    const newsize = e.target.getAttribute("data-size");
let sizearray = []
// this.state.sizestate.forEach((item) => {
//   // const singleItem = { ...item };
//   sizearray = [...sizearray, newsize];
// });
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

    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(
      () => {
        return {
          // cart: [...tempCart],
          detailProducts: [tempCart[3]],
        };
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
          return {
            detailProducts: [tempCart[3]],
          };
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
