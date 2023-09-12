import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Bike Insurance",
      amount: 114.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 134.12,
      date: new Date(2022, 9, 19),
    },
    {
      id: "e3",
      title: "Wooden Table",
      amount: 294.12,
      date: new Date(2021, 4, 11),
    },
    {
      id: "e4",
      title: "Personal Computer",
      amount: 394.12,
      date: new Date(2019, 4, 1),
    },
    {
      id: "e5",
      title: "Play Station",
      amount: 700.12,
      date: new Date(2020, 6, 3),
    },
    {
      id: "e6",
      title: "Comics",
      amount: 200.12,
      date: new Date(2022, 8, 3),
    },
    {
      id: "e7",
      title: "Manga",
      amount: 450.12,
      date: new Date(2021, 3, 3),
    },
    {
      id: "e8",
      title: "Books",
      amount: 100.12,
      date: new Date(2019, 9, 9),
    },
    {
      id: "e9",
      title: "T-shirt",
      amount: 250.12,
      date: new Date(2023, 4, 9),
    },
    {
      id: "e10",
      title: "Nike Air Jordan",
      amount: 700.12,
      date: new Date(2023, 10, 9),
    },
  ]);

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
