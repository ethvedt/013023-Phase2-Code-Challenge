import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const dbUrl= "http://localhost:8001/transactions/";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("date");

  function onSearchChange(search) {
    setSearch(search);
  };

  function onSortChange(sort) {
    setSort(sort);
  };

  function onSubmit(newTransaction) {
    fetch(dbUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(transaction => {
      setTransactions([...transactions, transaction]);
    })
  };

  function onDelete(transaction) {
    fetch(dbUrl+transaction.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(setTransactions(transactions.filter(eachTransaction => eachTransaction.id !== transaction.id)))
  };

  useEffect(() =>{
    fetch(dbUrl)
    .then(res => res.json())
    .then(setTransactions)
  }, [])

  const filterTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(search.toLowerCase()))

  const sortTransactions = (filterTransactions) => {
    switch (sort) {
      case "description":
        return filterTransactions.sort((a, b) => a.description.localeCompare(b.description));
      case "category":
        return filterTransactions.sort((a, b) => a.category.localeCompare(b.category));
      case "amount":
        return filterTransactions.sort((a, b) => a.amount-b.amount);
      case "date":
        return filterTransactions.sort((a, b) => Date(a.date) - Date(b.date));
      default:
        console.log("This shouldn't happen!");
    }
  };

  return (
    <div>
      <Search onSearchChange={onSearchChange} onSortChange={onSortChange}/>
      <AddTransactionForm onSubmit={onSubmit}/>
      <TransactionsList 
        transactions={sortTransactions(filterTransactions)}
        onDelete={onDelete}
      />
    </div>
  );
}

export default AccountContainer;
