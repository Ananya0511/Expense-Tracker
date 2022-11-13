import React, {useState, useEffect} from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';


let DUMMY_EXPENSES = [
//     {
//     id:'1',
//     title:'School Fees',
//     amount: 500,
//     date: new Date(2022, 8, 24)
// },
// {
//     id:'2',
//     title:'House Rent',
//     amount: 1000,
//     date: new Date(2022, 8, 10)
// },
// {
//     id:'3',
//     title:'Travel',
//     amount: 800,
//     date: new Date(2022, 8, 30)
// },
// {
//     id:'4',
//     title:'Fooding',
//     amount: 700,
//     date: new Date(2022, 8, 25)
// }
];

const App = () => {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    function fetchData(){
        fetch('https://techgun.website/sample/api/read.php').then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            console.log(data);
            setExpenses(data);
        }
      );
    }

    useEffect(() => {
        fetchData();
    },[]);

    const addExpenseHandler = (expense) =>{
        fetch('https://ananya-dash-default-rtdb.asia-southeast1.firebasedatabase.app/applicationdemo.json',{
            method:'POST',                                         //Insert data into db
            body:JSON.stringify(expense),
            headers:{
                'content-Type':'application/json'
            }
        }).then(
            response=>{
                fetchData();
            }
        );
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    }

    return (
        <div>
            <NewExpenses onAddExpenses={addExpenseHandler}/>
            <Expenses item={expenses}></Expenses>
        </div>
    );
}

export default App;