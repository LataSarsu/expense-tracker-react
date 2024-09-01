import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const Transaction = ({ transaction }) => {
  // const { deleteTransaction } = useContext(GlobalContext);
  // const { transactionContext } = useContext(GlobalContext);
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  // const deleteTransaction = (id) => {
  //   return {
  //     ...transactions,
  //     transactions: transactions.filter((transaction) => transaction.id !== id),
  //   };
  // };
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
