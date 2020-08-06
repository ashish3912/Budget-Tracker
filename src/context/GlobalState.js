import React, { useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: JSON.parse(localStorage.getItem("incomeTransactions")) || [],
    details : JSON.parse(localStorage.getItem("details")) || {}
};

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

  const deleteTransaction = id => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
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
        deleteTransaction,
        addTransaction,
        updateDetails
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};