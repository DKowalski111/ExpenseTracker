import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import Expense from "../../models/Expense";
import exp from "constants";
import { Pagination } from "../../utils/Pagination";

const Expenses = () => {

  const [httpError, setHttpError] = useState(null);

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState("")
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      const url = `http://localhost:8080/api/expenses/search?page=${currentPage - 1}&size=20&sortBy=${sortBy}${category != "" ? "&category=" + category : ''}`;

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application-json'
        }
      }

      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      console.log(response);

      const responseJson = await response.json();
      setExpenses(responseJson.content);
      setTotalPages(responseJson.totalPages);
    }
    fetchExpenses().catch((e) => {
      console.error(e);
    });
    window.scrollTo(0, 0);
  }, [currentPage, sortBy, category])

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }


  return (
    <div className="container d-flex flex-wrap justify-content-center" style={{ padding: 0, width: '80%' }}>
      <div className="col-12 col-md-6 align-self-start my-5 mt-md-5 mx-auto ms-0 me-0 ms-md-0 me-md-0" style={{ borderRadius: '6px', border: '1px solid var(--bs-body-bg)', maxWidth: '933px', width: '100%' }}>
        <h1 className="text-center py-4 py-md-5 mb-4 mb-md-0" style={{ color: 'var(--bs-body-bg)', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}>Recent Expenses</h1>
        <div className="d-flex d-lg-flex align-items-center align-items-lg-center my-0 py-2" style={{ width: '100%', borderBottom: '1px solid var(--bs-body-bg)' }}>
          <div className="dropdown text-center" style={{ width: '50%' }}>
            <button className="btn btn-light dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
              {sortBy == "" ? "Sort By" : sortBy}
            </button>
            <div className="dropdown-menu">
              <button className={`dropdown-item ${sortBy == "" ? "active" : ""}`} type="button" onClick={() => setSortBy("")}>Default</button>
              <button className={`dropdown-item ${sortBy == "Latest" ? "active" : ""}`} type="button" onClick={() => setSortBy("Latest")}>Latest</button>
              <button className={`dropdown-item ${sortBy == "Oldest" ? "active" : ""}`} type="button" onClick={() => setSortBy("Oldest")}>Oldest</button>
            </div>
          </div>

          <div className="dropdown text-center" style={{ width: '50%' }}>
            <button className="btn btn-light dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">
              {category == "" ? "Category" : category}
            </button>
            <div className="dropdown-menu">
              <button className={`dropdown-item ${category == "" ? "active" : ""}`} type="button" onClick={() => { setCategory(""); setCurrentPage(1) }}>None</button>
              <button className={`dropdown-item ${category == "Housing" ? "active" : ""}`} type="button" onClick={() => { setCategory("Housing"); setCurrentPage(1) }}>Housing</button>
              <button className={`dropdown-item ${category == "Utilities" ? "active" : ""}`} type="button" onClick={() => { setCategory("Utilities"); setCurrentPage(1) }}>Utilities</button>
              <button className={`dropdown-item ${category == "Groceries" ? "active" : ""}`} type="button" onClick={() => { setCategory("Groceries"); setCurrentPage(1) }}>Groceries</button>
              <button className={`dropdown-item ${category == "Insurance" ? "active" : ""}`} type="button" onClick={() => { setCategory("Insurance"); setCurrentPage(1) }}>Insurance</button>
              <button className={`dropdown-item ${category == "Dining Out" ? "active" : ""}`} type="button" onClick={() => { setCategory("Dining Out"); setCurrentPage(1) }}>Dining Out</button>
              <button className={`dropdown-item ${category == "Healthcare" ? "active" : ""}`} type="button" onClick={() => { setCategory("Healthcare"); setCurrentPage(1) }}>Healthcare</button>
              <button className={`dropdown-item ${category == "Entertainment" ? "active" : ""}`} type="button" onClick={() => { setCategory("Entertainment"); setCurrentPage(1) }}>Entertainment</button>
              <button className={`dropdown-item ${category == "Debt Repayment" ? "active" : ""}`} type="button" onClick={() => { setCategory("Debt Repayment"); setCurrentPage(1) }}>Debt Repayment</button>
              <button className={`dropdown-item ${category == "Personal Care" ? "active" : ""}`} type="button" onClick={() => { setCategory("Personal Care"); setCurrentPage(1) }}>Personal Care</button>
              <button className={`dropdown-item ${category == "Other" ? "active" : ""}`} type="button" onClick={() => { setCategory("Other"); setCurrentPage(1) }}>Other</button>
            </div>
          </div>
        </div>
        <ul className="list-group text-start" style={{ background: '#212529', borderWidth: '0px' }}>
          {expenses.map(expense => (
            <ListItem key={expense.id} date={expense.date} category={expense.category} amount={expense.amount} />
          ))}
        </ul>
      </div>
      <div className="col-12 text-center mt-3" style={{ margin: '0 auto', width: '100%' }}>
        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />}
      </div>

    </div>
  );
}

export default Expenses;
