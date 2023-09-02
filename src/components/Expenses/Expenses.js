import React from 'react'
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card.js';


export default function Expenses(props) {
    return (
        <Card className='expenses'>
            <ExpenseItem expense={props.expenses[0]} />
            <ExpenseItem expense={props.expenses[1]} />
            <ExpenseItem expense={props.expenses[2]} />
            <ExpenseItem expense={props.expenses[3]} />
        </Card>
    )
}
