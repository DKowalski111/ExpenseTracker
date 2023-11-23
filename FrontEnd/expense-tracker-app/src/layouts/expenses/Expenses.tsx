import { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import Expense from "../../models/Expense";
import exp from "constants";

const Expenses = () => {

  const [httpError, setHttpError] = useState(null);

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchExpenses = async () => {
      const url = `http://localhost:8080/api/expenses?page=${currentPage - 1}&size=20`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      console.log(response);

      const responseJson = await response.json();
      setExpenses(responseJson._embedded.expenses);
      setTotalPages(responseJson.page.totalPages);
    }
    fetchExpenses().catch((e) => {
      console.error(e);
    });
    window.scrollTo(0, 0);
  }, [currentPage])


  return (
    <div className="container d-flex flex-wrap justify-content-center" style={{ padding: 0, width: '80%' }}>
      <div className="col-12 col-md-6 align-self-start my-5 mt-md-5 mx-auto ms-0 me-0 ms-md-0 me-md-0" style={{ borderRadius: '6px', border: '1px solid var(--bs-body-bg)', maxWidth: '933px', width: '100%' }}>
        <h1 className="text-center py-4 py-md-5 mb-4 mb-md-0" style={{ color: 'var(--bs-body-bg)', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}>Recent Expenses</h1>
        <ul className="list-group text-start" style={{ background: '#212529', borderWidth: '0px' }}>
          {expenses.map(expense => (
            <ListItem key={expense.id} date={expense.date} category={expense.category} amount={expense.amount} />
          ))}
        </ul>
      </div>
    </div>
  );





}

export default Expenses;
