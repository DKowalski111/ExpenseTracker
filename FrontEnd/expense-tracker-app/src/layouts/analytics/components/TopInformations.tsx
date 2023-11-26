import React from "react";
import TopInformationProps from "../../../models/TopInformationProps";
import CategoryIcon from "../../../utils/CategoryIcon";

const TopInformations: React.FC<{ informations: TopInformationProps }> = (props) => {
  return (
    <div className="row g-0 d-lg-flex justify-content-lg-center">
      <div className="col-md-3 py-3 px-3 my-2 mt-4 mx-md-3 mx-0 me-0 column" style={{ border: '1px solid var(--bs-body-bg)', borderRadius: '6px', marginLeft: '40px' }}>
        <h5 style={{ color: 'var(--bs-body-bg)' }}>Total Expenses</h5>
        <p className="lead fs-1" style={{ color: 'var(--bs-body-bg)' }}>${props.informations.totalExpenses}</p>
      </div>
      <div className="col-md-3 py-3 px-3 my-2 mt-4 mx-md-3 mx-0 me-0 column" style={{ border: '1px solid var(--bs-body-bg)', borderRadius: '6px', marginLeft: '40px' }}>
        <h5 style={{ color: 'var(--bs-body-bg)' }}>This Month Expenses</h5>
        <p className="lead fs-1" style={{ color: 'var(--bs-body-bg)' }}>${props.informations.thisMonthExpenses}</p>
      </div>
      <div className="col-md-3 py-3 px-3 my-2 mt-4 mx-md-3 mx-0 me-0 column" style={{ border: '1px solid var(--bs-body-bg)', borderRadius: '6px', marginLeft: '40px' }}>
        <h5 style={{ color: 'var(--bs-body-bg)' }}>Top Category</h5>
        <div className="d-flex align-items-center justify-content-center">
          <CategoryIcon category={props.informations.topCategory} />
          "   "
          <p className="lead fs-1" style={{ color: 'var(--bs-body-bg)' }}>{props.informations.topCategory}</p>
        </div>
      </div>
      <div className="col-md-3 py-3 px-3 my-2 mt-4 mx-md-3 mx-0 me-0 column" style={{ border: '1px solid var(--bs-body-bg)', borderRadius: '6px', marginLeft: '40px' }}>
        <h5 style={{ color: 'var(--bs-body-bg)' }}>Monthly Expense Trend</h5>
        <p className={`lead fs-1 ${Number(props.informations.monthTrend) > 0 ? 'text-danger' : 'text-success'}`} style={{ color: 'var(--bs-body-bg)' }}>{props.informations.monthTrend}</p>
      </div>
    </div>
  );
}

export default TopInformations;