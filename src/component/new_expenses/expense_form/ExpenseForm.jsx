import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm=(props)=>{



    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState(0);
    const [enteredDate,setEnteredDate]=useState('');

    const onTitleChange=(event)=>{
        console.log(event.target.value)
        setEnteredTitle(event.target.value);}
    const onAmountChange=(event)=>{
        console.log(event.target.value)
        setEnteredAmount(event.target.value);}
    const onDateChange=(event)=>{
        console.log(event.target.value)
        setEnteredDate(event.target.value);}
    


    const OnExpenseSubmit=(event)=>{
        //const[]=useState{'hello'};//we can't use hooks inside a function, we can create as a direct child of a component
        event.preventDefault();
        console.log('Call from Form',enteredTitle,enteredAmount,enteredDate)

        const new_expense={
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSave(new_expense);
        
    };
    return(<div className="new-expense">
    <form onSubmit={OnExpenseSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title of the Expense</label>
                <input type="text" name="title" id="title"
                value={enteredTitle}
                onChange={onTitleChange} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount" min="0"
                value={enteredAmount}
                onChange={onAmountChange} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date"
                value={enteredDate}
                onChange={onDateChange} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
</div>)
}

export default ExpenseForm;