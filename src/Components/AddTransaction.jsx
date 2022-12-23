import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const onSumitF = (e) => {
    e.preventDefault();

    const newTansaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTansaction);
    setText("");
    setAmmount("");
  };
  const [text, setText] = useState("");
  const [amount, setAmmount] = useState(0);
  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSumitF}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter  Text Here..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmmount(e.target.value)}
            placeholder="Enter  Ammount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
