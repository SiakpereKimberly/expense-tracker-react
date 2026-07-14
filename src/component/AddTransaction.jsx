import useExpenseStore from "../store/ExpenseStore";

import { useState } from "react";

export const AddTransaction = () => {
  const addTransaction = useExpenseStore((state) => state.addTransaction);
  console.log("addTransaction:", addTransaction);
  const store = useExpenseStore();

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };

     console.log("Submitting:", newTransaction);

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-4 px-6">
      <h3 className="text-left text-2xl font-bold">Add Transaction</h3>
      <hr className="mt-2 border-t border-slate-300" />
      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Transaction Name"
          className="w-full p-2 border border-slate-300 rounded-md"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Transaction Amount"
          className="w-full p-2 border border-slate-300 rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Transaction
        </button>
      </form>
    </div>
  );
};
