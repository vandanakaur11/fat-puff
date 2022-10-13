import * as cartTypes from "../types/cartTypes";

const initialState = {
  cart: [],
};

// let localCart = JSON.parse(localStorage.getItem("cart"));
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartTypes.ADD_TO_CART:
      if (payload.inCart) {
        const exist = state.cart.findIndex(
          (index) => payload.item.id === index.id
        );

        const newArray = [...state.cart];
        newArray[exist].quantity =
          newArray[exist].quantity + payload.item.quantity;
        // const newCartArr = [...localCart];
        // console.log(newCartArr);
        // if (!localCart) {
        //   localStorage.setItem("cart", JSON.stringify(newArray));
        // } else {
        //   newCartArr[exist].quantity =
        //     newCartArr[exist].quantity + payload.item.quantity;
        //   localStorage.setItem("cart", JSON.stringify(newCartArr));
        // }

        return {
          ...state,
          cart: newArray,
        };
      } else {
        // let localCart = [...state.cart, payload.item];

        // localStorage.setItem("cart", JSON.stringify(localCart));
        return {
          ...state,
          cart: [...state.cart, payload.item],
        };
      }
    case cartTypes.DELETE:
      const removedItem = state.cart.filter((item, i) => i !== payload);
      localStorage.setItem("cart", JSON.stringify(removedItem));
      return {
        ...state,
        cart: removedItem,
      };
    case cartTypes.UPDATE_PRICE:
      const exist = state.cart.findIndex((index) => payload.id === index.id);
      const newArray = [...state.cart];
      newArray[exist].quantity = payload.quantity;
      return {
        ...state,
        cart: newArray,
      };

    default:
      return state;
  }
};

export default userReducer;
