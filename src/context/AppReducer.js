export default (state, action) => {
    switch (action.type) {
      case "ADD_TRANSACTION":
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        };
     
      case "DELETE_TRANSACTION":
        return {
          ...state,
          transactions: state.transactions.filter(
            transaction => transaction.id !== action.payload
          )
      };

      case "UPDATE_DETAILS":
     return {
       ...state,
       details: {...action.payload}
     }
  
      default:
        return state;
  }
};