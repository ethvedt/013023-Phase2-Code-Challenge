import React from "react";

function Transaction({ transaction, onDelete }) {

  function handleClick(event) {
    onDelete(transaction);
  };

  return (
    <tr>
      <td className="date">{transaction.date}</td>
      <td className="description">{transaction.description}</td>
      <td className="category">{transaction.category}</td>
      <td className="amount">{transaction.amount}</td>
      <td className="delete">
        <button onClick={handleClick}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;
