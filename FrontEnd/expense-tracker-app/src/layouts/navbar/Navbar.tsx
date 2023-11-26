import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md py-3" style={{ background: '#343a40', borderBottom: '1px solid var(--bs-navbar-active-color)' }} data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/dashboard">
          <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon" style={{ background: '#d9480f' }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
            </svg>
          </span>
          <span>Expense Tracker</span>
        </Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-5">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-5" className="collapse navbar-collapse text-end">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link active" to="/dashboard">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/expenses">Expenses</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/analytics">Analytics</Link></li>
          </ul>
          <Link className="btn btn-light ms-md-2" role="button" to="/add-expense" style={{ background: '#d9480f', borderStyle: 'none', color: '#dbffff' }}>Add expense</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
