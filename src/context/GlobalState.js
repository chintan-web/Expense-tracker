import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial State

const initialState = {
  transections: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create global context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Action
  function deleteTransection(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransection(transection) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transection,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transections: state.transections,
        deleteTransection,
        addTransection,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
