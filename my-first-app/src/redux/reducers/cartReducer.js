const INIT_STATE = {
  cart: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "PUSH NEW PRODUCT":
      if(action.payload) {
        console.log("existe")
        // validar stock
        // validar oferta o cupon
      }
      
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
};
