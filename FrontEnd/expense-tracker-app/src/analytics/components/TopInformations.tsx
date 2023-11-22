const TopInformations = () => {
  return (
    <div className="row g-0 d-lg-flex justify-content-lg-center">
      <div className="col-md-3 py-3 px-3 my-2 mt-4 mx-md-3 mx-0 me-0 column" style={{ border: '1px solid var(--bs-body-bg)', borderRadius: '6px', marginLeft: '40px' }}>
        <h5 style={{ color: 'var(--bs-body-bg)' }}>Total Expenses</h5>
        <p className="lead fs-1" style={{ color: 'var(--bs-body-bg)' }}>$1230.50</p>
      </div>
      <div className="col-md-3 py-3 px-3 my-2 mt-4 mx-md-3 mx-0 me-0 column" style={{ border: '1px solid var(--bs-body-bg)', borderRadius: '6px', marginLeft: '40px' }}>
        <h5 style={{ color: 'var(--bs-body-bg)' }}>This Month Expenses</h5>
        <p className="lead fs-1" style={{ color: 'var(--bs-body-bg)' }}>$1230.50</p>
      </div>
      <div className="col-md-3 py-3 px-3 my-2 mt-4 mx-md-3 mx-0 me-0 column" style={{ border: '1px solid var(--bs-body-bg)', borderRadius: '6px', marginLeft: '40px' }}>
        <h5 style={{ color: 'var(--bs-body-bg)' }}>Top Category</h5>
        <p className="lead fs-1" style={{ color: 'var(--bs-body-bg)' }}>$1230.50</p>
      </div>
      <div className="col-md-3 py-3 px-3 my-2 mt-4 mx-md-3 mx-0 me-0 column" style={{ border: '1px solid var(--bs-body-bg)', borderRadius: '6px', marginLeft: '40px' }}>
        <h5 style={{ color: 'var(--bs-body-bg)' }}>Monthly Expense Trend</h5>
        <p className="lead fs-1" style={{ color: 'var(--bs-body-bg)' }}>$1230.50</p>
      </div>
    </div>
  );
}

export default TopInformations;