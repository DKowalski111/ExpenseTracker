import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from './layouts/dashboard/Dashboard';
import Navbar from './layouts/navbar/Navbar';
import Analytics from './layouts/analytics/Analytics';
import Expenses from './layouts/expenses/Expenses';
import AddExpense from './layouts/addExpense/AddExpense';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/expenses' element={<Expenses />} />
        <Route path='/add-expense' element={<AddExpense />} />
      </Routes>

    </div>
  );
}

export default App;
