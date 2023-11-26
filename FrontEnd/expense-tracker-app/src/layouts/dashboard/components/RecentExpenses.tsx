import React from 'react';
import ListItem from './ListItem';

const RecentExpenses: React.FC<{ recentExpenses: { [category: string]: string } }> = (props) => {
  let categories: string[] = [];
  let amount: string[] = [];
  for (var d in props.recentExpenses) {
    categories.push(d);
    amount.push(props.recentExpenses[d]);
  }
  return (
    <div className="container d-flex flex-wrap justify-content-center" style={{ padding: 0, width: '80%' }}>
      <div className="col-12 col-md-6 align-self-start my-5 mt-md-5 mx-auto ms-0 me-0 ms-md-0 me-md-0" style={{ borderRadius: '6px', border: '1px solid var(--bs-body-bg)', maxWidth: '933px', width: '100%' }}>
        <h1 className="text-center py-4 py-md-5 mb-4 mb-md-0" style={{ color: 'var(--bs-body-bg)', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}>Recent Expenses</h1>
        <ul className="list-group text-start" style={{ background: '#212529', borderWidth: '0px' }}>
          {categories.map((category, i) => (
            <ListItem key={i} category={category} amount={amount[i]} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecentExpenses;
