const INIT_STATE = {
  cart: [],
};

export const cardReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "PUSH NEW PRODUCT":
      if(action.payload) {
        console.log("existe")
        // validar stock
        // validar oferta o cupon
      }
      
      return {
        ...state,
      };
    default:
      return state;
  }
};
