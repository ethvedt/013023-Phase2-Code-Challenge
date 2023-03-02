import React, {useState} from "react";

function AddTransactionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [key]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
