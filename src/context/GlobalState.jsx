import React, { createContext, useState } from "react";
// import AppReducer from './AppReducer'

//Initial State
// const initialState = {
//   transactions: [
//     { id: 1, text: "Flower", amount: -20 },
//     { id: 2, text: "Salary", amount: 300 },
//     { id: 3, text: "Book", amount: -10 },
//     { id: 4, text: "Camera", amount: 150 },
//   ],
// };
//const GlobalContext = createContext();
const GlobalContext = createContext();

//Create context
//export const GlobalContext = createContext(initialState);

//Provider component
//export const GlobalProvider = ({ children }) => {
// const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
// function deleteTransaction(id){
//   dispatch({
//     type: 'DELETE_TRANSACTION',
//     payload: id
//   })
// }

// function addTransaction(transaction){
//   dispatch({
//     type: 'ADD_TRANSACTION',
//     payload: transaction
//   })
// }

// return (
//   <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
//     {children}
//   </GlobalContext.Provider>
// );
//};
const CounterProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ]);

  // Function to add a transaction
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [transaction, ...prevTransactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, CounterProvider };
