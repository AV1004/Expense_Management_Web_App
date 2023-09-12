import React, { useState } from 'react';
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    // const [userInput, setuserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setuserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    }
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    // const inputChangeHandler = (identifier, value) => {
    //     if (identifier === "Title") {
    //         setenteredTitle(value);
    //     }
    //     else if (identifier === "Amount") {
    //         setenteredAmount(value);
    //     }
    //     else {
    //         setenteredDate(value);
    //     }
    // }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.hideExpenseForm("Hide");

        props.onSaveExpenseDate(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
        // console.log(expenseData);
    }

    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    {/* <input type="text" onChange={(event) => inputChangeHandler("Title", event.target.value)} /> */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                    {/* <input type="number" onChange={(event) => inputChangeHandler("Amount", event.target.value)} min="0.01" step="0.01" /> */}
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2023-12-31" step="2023-12-31" />
                    {/* <input type="date" onChange={(event) => inputChangeHandler("Date", event.target.value)} min="2019-01-01" step="2023-12-31" /> */}
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={() => { props.hideExpenseForm("Hide") }}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
