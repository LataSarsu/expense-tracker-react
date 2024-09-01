import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  //  const { transactionContext } = useContext(GlobalContext);
  const { transactions, addTransaction } = useContext(GlobalContext);
  //  const { addTransaction } = useContext(GlobalContext);
  //const onSubmit = (e) => {
  const onSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "" || amount === 0) {
      // Optionally, add validation here
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount, // Convert to number
    };

    addTransaction(newTransaction); // Call the function to add the transaction

    setText(""); // Clear text input
    setAmount(0); // Clear amount input
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
