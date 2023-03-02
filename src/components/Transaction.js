import React from "react";

function Transaction({ transaction }) {

  return (
    <tr>
      <td className="date">{transaction.date}</td>
      <td className="description">{transaction.description}</td>
      <td className="category">{transaction.category}</td>
      <td className="amount">{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;
