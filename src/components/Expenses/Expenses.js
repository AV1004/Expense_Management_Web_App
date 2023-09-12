import React, { useState } from 'react'
import './Expenses.css';
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';


export default function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState("2019");


    const handleFilterYear = (filterYear) => {
        setSelectedYear(filterYear);
        console.log(filterYear)
    }

    const filterdExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });



    return (
        <div className='expenses' >
            <Card>
                <ExpensesFilter defaultYear={selectedYear} selectedFilterYear={handleFilterYear} />
                <ExpenseChart expenses={filterdExpenses} />
                <ExpenseList expenses={filterdExpenses} />
            </Card>
        </div>
    )
}
