import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem({title , amount}) {
  return (
    <div className='expense-item'>
      <ExpenseDate/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;