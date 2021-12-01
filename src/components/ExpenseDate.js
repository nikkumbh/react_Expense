import './ExpenseDate.css'

function ExpenseDate(){
    let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //const month = Date('en-US', {month:'long'},{year:'long'})
    //const day = Date('en-US',{day:'2-digit'})
    //const year = Date.getFullYear();

    

    return(
        <div className="expense-date">
        <div className='expense-date__month'>{date.toLocaleString('en-US', options)}</div>
        <div className="expense-date__year"></div>
        <div className="expense-date__day"></div>
      </div>
    );

}
export default ExpenseDate;