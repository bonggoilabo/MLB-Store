export const initialState = {
  cartAr: [],
  totalPrice: 0,
};

const handleCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      let products = state.cartAr;
      const exist = state.cartAr.find((x) => {
        return x.id === action.payload.id && x.size === action.payload.size;
      });
      if (exist) {
        const objectIndex = products.findIndex((x) => {
          return x.id === action.payload.id && x.size === action.payload.size;
        });
        if (action.payload.qty) {
          products[objectIndex] = {
            ...products[objectIndex],
            qty: products[objectIndex].qty + action.payload.qty,
          };
        } else {
          products[objectIndex] = {
            ...products[objectIndex],
            qty: products[objectIndex].qty + 1,
          };
        }
        const newCarts = {
          ...state,
          cartAr: [...products],
          totalPrice:
            Number(state.totalPrice) +
            action.payload.qty * Number(action.payload.price),
        };
        console.log(action.payload, action.payload.qty, state.totalPrice);
        return newCarts;
      } else {
        const newCarts = {
          ...state,
          cartAr: [...products, action.payload],
          totalPrice:
            Number(state.totalPrice) +
            action.payload.qty * Number(action.payload.price),
        };
        return newCarts;
      }

    case "UPDATEITEM":
      console.log("CartAr", state.cartAr);
      const product = state.cartAr.find((item) => {
        return item.id === action.payload.id;
      });
      if (product) {
        const newCartItems = state.cartAr;
        const ojIndex = newCartItems.findIndex((item) => {
          return item.id === action.payload.id;
        });
        newCartItems[ojIndex] = {
          ...newCartItems[ojIndex],
          qty: action.payload.qty,
        };
        let newCart, total;
        total = newCartItems.reduce((acc, cur) => {
          const rate = cur.qty >= 5 ? 0.1 : cur.qty >= 2 ? 0.05 : 0;
          acc += cur.qty * cur.price * (1 - rate);
          return acc;
        }, 0);
        newCart = {
          ...state,
          cartAr: newCartItems,
          totalPrice: total,
        };
        return newCart;
      } else {
        return state;
      }
    case "DELITEM":
      const _productInCart = state.cartAr.find((item) => {
        return item.idProduct === action.payload;
      });
      if (_productInCart) {
        const newCartItems = state.cartAr.filter((item) => {
          return item.idProduct !== action.payload;
        });
        const newCart = {
          ...state,
          cartAr: newCartItems,
          totalPrice:
            Number(state.totalPrice) -
            _productInCart.qty * Number(_productInCart.price),
        };
        return newCart;
      } else {
        return state;
      }
    default:
      return state;
  }
};
export default handleCart;
