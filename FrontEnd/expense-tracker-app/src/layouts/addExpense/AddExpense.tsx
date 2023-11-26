import { useState } from "react";
import AddExpenseRequest from "../../models/AddExpenseRequest";

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleInput = (e: any) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '');
  };

  const submitNewExpense = async () => {
    if (amount != "" && category != "" && date != "") {
      try {
        const url = `http://localhost:8080/api/expenses/add/expense`;
        const expense: AddExpenseRequest = new AddExpenseRequest(amount, category, date);
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(expense)
        }
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
          throw new Error("Something went wrong !");
        }
        setAmount("");
        setCategory("");
        setDate("");
      } catch (e: any) {
        console.log(e);
      }
    }
  }

  return (
    <section className="text-center">
      <h1 className="my-md-0 m-5 py-5" style={{ color: 'var(--bs-body-bg)', borderBottomWidth: '1px' }}>Add New Expense</h1>
      <div className="container d-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-lg-center my-md-5 px-2 mb-xxl-5 py-4 my-5 my-lg-5" style={{ padding: 0, width: '80%', maxWidth: '700px', border: '1px solid var(--bs-body-bg)', borderRadius: '6px' }}>
        <h1 className="my-md-4" style={{ color: 'var(--bs-body-bg)', width: '30%', margin: '0 auto' }}>Amount: </h1>
        <input type="text" style={{ background: '#495057', color: 'var(--bs-body-bg)', border: '1px solid var(--bs-body-bg)', borderRadius: '6px', width: '20%', margin: '0 auto' }} placeholder="$" required onInput={handleInput} value={amount || ''} onChange={(e) => { setAmount(e.target.value) }} />
      </div>

      <div className="container d-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-lg-center my-md-5 px-2 mt-xxl-5 py-4 my-5" style={{ padding: 0, width: '80%', maxWidth: '700px', border: '1px solid var(--bs-body-bg)', borderRadius: '6px' }}>
        <h1 className="my-md-4" style={{ color: 'var(--bs-body-bg)', width: '30%', margin: '0 auto' }}>Category: </h1>
        <div className="dropdown text-center" style={{ width: '50%' }}>
          <button className="btn btn-light dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
            {category == "" ? "Category" : category}
          </button>
          <div className="dropdown-menu">
            <button className={`dropdown-item ${category == "" ? "active" : ""}`} type="button" onClick={() => { setCategory(""); }}>None</button>
            <button className={`dropdown-item ${category == "Housing" ? "active" : ""}`} type="button" onClick={() => { setCategory("Housing"); }}>Housing</button>
            <button className={`dropdown-item ${category == "Utilities" ? "active" : ""}`} type="button" onClick={() => { setCategory("Utilities"); }}>Utilities</button>
            <button className={`dropdown-item ${category == "Groceries" ? "active" : ""}`} type="button" onClick={() => { setCategory("Groceries"); }}>Groceries</button>
            <button className={`dropdown-item ${category == "Insurance" ? "active" : ""}`} type="button" onClick={() => { setCategory("Insurance"); }}>Insurance</button>
            <button className={`dropdown-item ${category == "Dining Out" ? "active" : ""}`} type="button" onClick={() => { setCategory("Dining Out"); }}>Dining Out</button>
            <button className={`dropdown-item ${category == "Healthcare" ? "active" : ""}`} type="button" onClick={() => { setCategory("Healthcare"); }}>Healthcare</button>
            <button className={`dropdown-item ${category == "Entertainment" ? "active" : ""}`} type="button" onClick={() => { setCategory("Entertainment"); }}>Entertainment</button>
            <button className={`dropdown-item ${category == "Debt Repayment" ? "active" : ""}`} type="button" onClick={() => { setCategory("Debt Repayment"); }}>Debt Repayment</button>
            <button className={`dropdown-item ${category == "Personal Care" ? "active" : ""}`} type="button" onClick={() => { setCategory("Personal Care"); }}>Personal Care</button>
            <button className={`dropdown-item ${category == "Other" ? "active" : ""}`} type="button" onClick={() => { setCategory("Other"); }}>Other</button>
          </div>
        </div>
      </div>

      <div className="container d-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-lg-center my-md-5 px-2 py-4 my-5" style={{ padding: 0, width: '80%', maxWidth: '700px', border: '1px solid var(--bs-body-bg)', borderRadius: '6px' }}>
        <h1 className="my-md-4" style={{ color: 'var(--bs-body-bg)', width: '30%', margin: '0 auto' }}>Date: </h1>
        <input type="datetime-local" onChange={(e) => { setDate(e.target.value) }} style={{ margin: '0 auto', color: 'var(--bs-body-bg)', background: 'rgb(73,80,87)', border: '1px solid var(--bs-body-bg)', borderRadius: '6px', textAlign: 'center' }} required value={date || ''} />
      </div>
      <button className="btn btn-secondary btn-lg mt-5" type="button" style={{ margin: 'auto 0', background: 'rgb(217,72,15)', borderColor: 'var(--bs-btn-disabled-color)' }} onClick={submitNewExpense}>Save</button>
    </section>
  );
}

export default AddExpense;