import React from "react";
import './NewExpenses.css'
import ExpensesForm from './ExpensesForm'

const NewExpenses = (props) =>{

    const saveExpenseDataHandler = (enteredExpensesData) => {
        const expenseData = {
            ...enteredExpensesData,
            id: Math.random().toString()
        }

        props.onAddExpenses(expenseData);
        console.log(expenseData);
    };
    return(
        <div className="new-expenses">
            <ExpensesForm onSaveExpenseData = {saveExpenseDataHandler}/>

        </div>
    );
}

export default NewExpenses;
