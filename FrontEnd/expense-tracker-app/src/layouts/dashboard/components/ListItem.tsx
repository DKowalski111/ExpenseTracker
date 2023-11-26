import CategoryIcon from "../../../utils/CategoryIcon";

const ListItem: React.FC<{ category: string, amount: string }> = (props) => {

  return (
    <div>
      <li className="list-group-item list-group-item-light mx-md-5" style={{ color: 'var(--bs-list-group-active-color)', background: 'rgb(33,37,41)', borderWidth: '0px' }}>
        <div className="d-flex align-items-center">
          <CategoryIcon category={props.category} />
          <p className="m-3">${props.amount}</p>
        </div>
      </li>
    </div>
  );
}

export default ListItem;