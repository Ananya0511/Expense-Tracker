import React from 'react';
import ExpenseItems from './ExpenseItems';
import './Expenses.css'
//import Card from './Card'

const Expenses = (props) => {
    return(
        <div className='expenses'>
            {
                props.item.map(
                    expense => (
                        <ExpenseItems
                        key={expense.id}
                        date={expense.date} 
                        title={expense.title} 
                        amount={expense.amount} />
                    )
                )
            }
        </div>
    );
}

export default Expenses;