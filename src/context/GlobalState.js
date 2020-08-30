import React, { useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: JSON.parse(localStorage.getItem("incomeTransactions")) || [],
    details : JSON.parse(localStorage.getItem("details")) || {},
    categories:JSON.parse(localStorage.getItem("categories")) || []
};
console.log(initialState);
export const GlobalContext = React.createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(state.transactions)
    );
  },[state.transactions]);

  useEffect(() => {
    localStorage.setItem(
      "details",
      JSON.stringify(state.details)
    );
  },[state.details]);

  useEffect(() => {
    localStorage.setItem(
      "categories",
      JSON.stringify([
        {  
             id : "1",
            image : "bill",
            heading: "Bills",
 
        },
        {
         id : "2",
         image : "education",
         heading: "Education",
 
        },
        {
         id : "3",
         image : "shopping",
         heading: "Shopping",
        }
    ])
    );
  },[state.categories]);

  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };

  const editTransaction = payload => {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: payload
    });
  };

  const addTransaction = transaction => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  };

  const updateDetails = details => {
    dispatch({
      type: "UPDATE_DETAILS",
      payload: details
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        details : state.details,
        categories:state.categories,
        deleteTransaction,
        addTransaction,
        updateDetails,
        editTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};