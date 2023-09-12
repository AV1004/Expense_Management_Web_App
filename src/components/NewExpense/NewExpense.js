import React, { useState } from 'react'
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {
    const onExpenseSaveData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        props.onAddExpense(expenseData);
    }

    const [showAddExpenseForm, setShowAddExpenseForm] = useState("Hide");

    const handleAddExpenseClick = (condition) => {
        setShowAddExpenseForm(condition);
    }

    return (
        <div className='new-expense' >
            {showAddExpenseForm === "Hide" && <button onClick={() => { handleAddExpenseClick("Show") }} >Add New Expense</button>}
            {showAddExpenseForm === "Show" && <ExpenseForm onSaveExpenseDate={onExpenseSaveData} hideExpenseForm={handleAddExpenseClick} />}
        </div>
    )
}
