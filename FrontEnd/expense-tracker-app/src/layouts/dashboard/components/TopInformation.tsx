import React from 'react';
import CategoryIcon from '../../../utils/CategoryIcon';

const TopInformations: React.FC<{ topInformation: { [information: string]: string } }> = (props) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-3 py-3 px-3 my-2 mt-4 mx-md-3 mx-0 me-0 column" style={{ border: '1px solid var(--bs-body-bg)', borderRadius: '6px', marginLeft: '40px' }}>
          <h5 style={{ color: 'var(--bs-body-bg)' }}>Total Expenses</h5>
          <p className="lead fs-1" style={{ color: 'var(--bs-body-bg)' }}>${props.topInformation['total expenses']}</p>
        </div>
        <div className="col-md-3 py-3 px-3 my-2 mt-4 mx-md-3 mx-0 me-0 column" style={{ border: '1px solid var(--bs-body-bg)', borderRadius: '6px', marginLeft: '40px' }}>
          <h5 style={{ color: 'var(--bs-body-bg)' }}>Top Category</h5>
          <div className='d-flex justify-content-center align-items-center'>
            <CategoryIcon category={props.topInformation['top category']} />
            "    "
            <p className="lead fs-1 " style={{ color: 'var(--bs-body-bg)' }}>{props.topInformation['top category']}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopInformations;
