const AddExpense = () => {

  const handleInput = (e: any) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, '');
  };

  return (
    <section className="text-center">
      <h1 className="my-md-0 m-5 py-5" style={{ color: 'var(--bs-body-bg)', borderBottomWidth: '1px' }}>Add New Expense</h1>
      <div className="container d-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-lg-center my-md-5 px-2 mb-xxl-5 py-4 my-5 my-lg-5" style={{ padding: 0, width: '80%', maxWidth: '700px', border: '1px solid var(--bs-body-bg)', borderRadius: '6px' }}>
        <h1 className="my-md-4" style={{ color: 'var(--bs-body-bg)', width: '30%', margin: '0 auto' }}>Amount: </h1>
        <input type="text" style={{ background: '#495057', color: 'var(--bs-body-bg)', border: '1px solid var(--bs-body-bg)', borderRadius: '6px', width: '20%', margin: '0 auto' }} placeholder="$" required onInput={handleInput} />
      </div>

      <div className="container d-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-lg-center my-md-5 px-2 mt-xxl-5 py-4 my-5" style={{ padding: 0, width: '80%', maxWidth: '700px', border: '1px solid var(--bs-body-bg)', borderRadius: '6px' }}>
        <h1 className="my-md-4" style={{ color: 'var(--bs-body-bg)', width: '30%', margin: '0 auto' }}>Category: </h1>
        <div className="dropdown" style={{ margin: '0 auto', width: 'auto' }}>
          <button className="btn dropdown-toggle link-light border-light px-sm-4 py-sm-2" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{ padding: '4px 4px' }}>
            Dropdown
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">First Item</a>
            <a className="dropdown-item" href="#">Second Item</a>
            <a className="dropdown-item" href="#">Third Item</a>
          </div>
        </div>
      </div>

      <div className="container d-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-lg-center my-md-5 px-2 py-4 my-5" style={{ padding: 0, width: '80%', maxWidth: '700px', border: '1px solid var(--bs-body-bg)', borderRadius: '6px' }}>
        <h1 className="my-md-4" style={{ color: 'var(--bs-body-bg)', width: '30%', margin: '0 auto' }}>Date: </h1>
        <input type="date" style={{ margin: '0 auto', color: 'var(--bs-body-bg)', background: 'rgb(73,80,87)', border: '1px solid var(--bs-body-bg)', borderRadius: '6px', textAlign: 'center' }} required />
      </div>

      <button className="btn btn-secondary btn-lg mt-5" type="button" style={{ margin: 'auto 0', background: 'rgb(217,72,15)', borderColor: 'var(--bs-btn-disabled-color)' }}>Save</button>
    </section>
  );
}

export default AddExpense;