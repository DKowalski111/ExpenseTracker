import React from 'react';

const RecentExpenses = () => {
  return (
    <div className="container d-lg-flex justify-content-lg-center">
      <div className="col-md-6 text-center align-self-start my-5 chartarea mt-md-5 mx-md-3 ms-xxl-0 me-xxl-0" style={{ borderRadius: '6px', border: '1px solid var(--bs-body-bg)', maxWidth: '933px', width: '100%' }}>
        <h3 className="fw-bold text-center my-3 mx-3" style={{ color: 'var(--bs-body-bg)' }}>Recent Expenses</h3>
        <ul className="list-group">
          <li className="list-group-item" style={{ color: 'var(--bs-list-group-active-color)', background: 'var(--bs-body-color)', borderStyle: 'none' }}>
            <span>Dziwka z roksy -200zl</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RecentExpenses;
