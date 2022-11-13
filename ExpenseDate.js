import React from 'react';
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const year = props.date.getFullYear();                               //Works on date object
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});

    return(
        <div className='expense-date'>
            <div className='expense-date_day'><h2>{ day }</h2></div>
            <div className='expense-date_month'><h2>{ month }</h2></div>
            <div className='expense-date_year'><h2>{ year }</h2></div>
        </div>
    )
}

export default ExpenseDate;