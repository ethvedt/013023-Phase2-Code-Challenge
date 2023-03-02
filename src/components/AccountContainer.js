import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const dbUrl= "http://localhost:8001/transactions";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  function onSearchChange(search) {
    setSearch(search);
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

  useEffect(() =>{
    fetch(dbUrl)
    .then(res => res.json())
    .then(setTransactions)
  }, [])

  const filterTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Search onSearchChange={onSearchChange} />
      <AddTransactionForm onSubmit={onSubmit}/>
      <TransactionsList 
        transactions={filterTransactions}
      />
    </div>
  );
}

export default AccountContainer;
