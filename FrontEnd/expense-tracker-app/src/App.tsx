import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Dashboard } from './dashboard/Dashboard';
import Navbar from './navbar/Navbar';
import Analytics from './analytics/Analytics';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
      </Routes>

    </div>
  );
}

export default App;
