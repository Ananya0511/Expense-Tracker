import React from 'react';
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate.js'
//import Card from './Card';

const ExpenseItems = (props) => {

    // const [newTitle, setNewTitle] = useState("");

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle(newTitle);
    // }

    // const changeHandler = (event) =>{
    //     setNewTitle(event.target.value);
    // }
    return (
        <div className='expense-items'>
            <ExpenseDate date={new Date(props.date)} />
            <div className='expense-items_description'>
                <h2>{ props.title }</h2>
                <div className='expense-items_price'>${ props.amount }</div>
            </div>
            {/* <input type='text' value={newTitle} onChange={ changeHandler }/>
            <button onClick={clickHandler}>Change Title</button> */}
        </div>
    );
}

export default ExpenseItems;